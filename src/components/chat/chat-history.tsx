"use client";
import {
    Actor,
    Character,
    CHAT_HISTORY_TYPE,
    HistoryItem,
    HistoryItemActor,
    HistoryItemNarratedAction,
    HistoryItemTriggerEvent,
} from "@inworld/web-core";
import React, { useEffect, useRef, useState } from "react";

// import { getEmoji } from "../helpers/emoji";

import { getEmoji } from "@/helpers/emojis";
import { dateWithMilliseconds } from "@/helpers/transform";
import { CHAT_VIEW, EmotionsMap } from "@/types/chat-types";
import { Card } from "../ui/card";

interface HistoryProps {
  chatView: CHAT_VIEW;
  characters: Character[];
  history: HistoryItem[];
  emotions: EmotionsMap;
  onInteractionEnd: (value: boolean) => void;
}

type CombinedHistoryItem = {
  interactionId: string;
  messages: (
    | HistoryItemActor
    | HistoryItemNarratedAction
    | HistoryItemTriggerEvent
  )[];
  source: Actor;
  type: CHAT_HISTORY_TYPE;
};

export const ChatHistory = (props: HistoryProps) => {
  const { chatView, history } = props;

  const ref = useRef<HTMLDivElement>(null);

  const [combinedChatHistory, setCombinedChatHistory] = useState<
    CombinedHistoryItem[]
  >([]);
  const [isInteractionEnd, setIsInteractionEnd] = useState<boolean>(true);

  useEffect(() => {
    // scroll chat down on history change
    if (ref.current && history) {
      ref.current.scrollTo({
        top: ref.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [history]);

  useEffect(() => {
    let currentRecord: CombinedHistoryItem | undefined;
    const mergedRecords: CombinedHistoryItem[] = [];
    const hasActors = history.find(
      (record: HistoryItem) => record.type === CHAT_HISTORY_TYPE.ACTOR
    );
    const withoutTriggerEvents = history.filter((record: HistoryItem) =>
      [CHAT_HISTORY_TYPE.ACTOR, CHAT_HISTORY_TYPE.INTERACTION_END].includes(
        record.type
      )
    );

    for (let i = 0; i < history.length; i++) {
      let item = history[i];
      switch (item.type) {
        case CHAT_HISTORY_TYPE.ACTOR:
        case CHAT_HISTORY_TYPE.NARRATED_ACTION:
          currentRecord = mergedRecords.find(
            (r) =>
              r.interactionId === item.interactionId &&
              [
                CHAT_HISTORY_TYPE.ACTOR,
                CHAT_HISTORY_TYPE.NARRATED_ACTION,
              ].includes(r.messages?.[0]?.type) &&
              r.type === CHAT_HISTORY_TYPE.ACTOR &&
              r.source.name === item.source.name
          ) as CombinedHistoryItem;

          if (currentRecord) {
            currentRecord.messages.push(item);
          } else {
            currentRecord = {
              interactionId: item.interactionId,
              messages: [item],
              source: item.source,
              type: CHAT_HISTORY_TYPE.ACTOR,
            } as CombinedHistoryItem;
            mergedRecords.push(currentRecord);
          }
          break;
        case CHAT_HISTORY_TYPE.TRIGGER_EVENT:
          mergedRecords.push({
            interactionId: item.interactionId!,
            messages: [item],
            source: item.source,
            type: item.type,
          });
          break;
      }
    }

    // Interaction is considered ended
    // when there is no actor action yet (chat is not started)
    // or last received message is INTERACTION_END.
    const lastInteractionId =
      withoutTriggerEvents[withoutTriggerEvents.length - 1]?.interactionId;

    const interactionEnd = withoutTriggerEvents.find(
      (event) =>
        event.interactionId === lastInteractionId &&
        event.type === CHAT_HISTORY_TYPE.INTERACTION_END
    );
    const isInteractionEnd =
      !hasActors || (!!currentRecord && !!interactionEnd);

    setIsInteractionEnd(isInteractionEnd);
    props.onInteractionEnd(isInteractionEnd);

    setCombinedChatHistory(mergedRecords);
  }, [history, props.onInteractionEnd]);

  const getContent = (
    message:
      | HistoryItemActor
      | HistoryItemNarratedAction
      | HistoryItemTriggerEvent
  ) => {
    switch (message.type) {
      case CHAT_HISTORY_TYPE.ACTOR:
        return message.text;
      case CHAT_HISTORY_TYPE.NARRATED_ACTION:
        return <span className="text-lg">{message.text}</span>;
      case CHAT_HISTORY_TYPE.TRIGGER_EVENT:
        return message.name;
    }
  };

  return (
    <div className="flex flex-col mb-8 px-4">
      <Card ref={ref} className="flex justify-end w-full min-h-full">
        <Card className="flex">
          {combinedChatHistory.map((item, index) => {
            let emoji: string | null = null;
            let messages = item.messages;
            let actorSource = "AGENT";
            let message = item.messages?.[0];
            const character = props.characters.find(
              (c) => c.id === item.source.name
            );

            const title =
              item.type === CHAT_HISTORY_TYPE.ACTOR ||
              item.type === CHAT_HISTORY_TYPE.TRIGGER_EVENT
                ? `${dateWithMilliseconds(message.date)} (${
                    item.interactionId
                  })`
                : "";

            if (item.type === CHAT_HISTORY_TYPE.ACTOR) {
              actorSource = item.source.isCharacter ? "AGENT" : "PLAYER";

              if (item.source.isCharacter) {
                const emotion = props.emotions[item.interactionId!];
                if (emotion?.behavior) {
                  emoji = getEmoji(emotion.behavior);
                }
              }
            }

            return (
              <ul
                key={`PortalSimulatorChatHistoryMessageGroup-${index}`}
                className={`mb-4 p-0 flex flex-col space-x-4 text-black`}
              >
                <li
                  className="flex flex-row w-full text-lg text-black"
                  title={title}
                  key={index}
                  data-id={message.id}
                >
                  <Card className="mw-[90%] flex flex-row items-center ">
                    <Card
                      className="flex-1 flex-col p-4 rounded-sm text-white overflow-visible relative"
                      key={`PortalSimulatorChatli-${index}`}
                    >
                      {/* <CircularRpmAvatar
                        key={index}
                        src={
                          character?.assets?.rpmImageUriPortrait ??
                          character?.assets?.avatarImg ??
                          ""
                        }
                        name={character?.displayName}
                        size="48px"
                        sx={{
                          display: ["none", "flex"],
                          mr: 1,
                          float: "left",
                        }}
                      /> */}
                      {emoji && <Card className="text-lg">{emoji}</Card>}
                      <p className="text-black text-base">
                        {messages.map((m) => (
                          <React.Fragment key={m.id}>
                            {getContent(m)}{" "}
                          </React.Fragment>
                        ))}
                      </p>
                    </Card>
                  </Card>
                </li>
              </ul>
            );
          })}
          {/* <Fade in={!isInteractionEnd} timeout={500}>
              <Card margin="0 0 20px 20px">
                <Typing />
              </Card>
            </Fade> */}
        </Card>
      </Card>
    </div>
  );
};
