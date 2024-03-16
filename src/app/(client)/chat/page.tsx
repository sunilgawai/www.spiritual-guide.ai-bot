"use client";
import ChatWindow from "@/components/chat/chat-window";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { EmotionsMap } from "@/lib/enums";
import { InworldService } from "@/lib/inworld-connection";
import {
  AdditionalPhonemeInfo,
  Character,
  DialogPhrase,
  EmotionEvent,
  HistoryItem,
  InworldConnectionService,
  InworldPacket,
} from "@inworld/web-core";
import { GaugeIcon, PanelTopCloseIcon, UserIcon } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";

interface CurrentContext {
  characters: Character[];
  chatting: boolean;
  connection?: InworldConnectionService;
}

const ChatPage = () => {
  // const [bodyTexture, setBodyTexture] = useState(BODY_TEXTURE_TYPE.WOOD1);
  const [connection, setConnection] = useState<InworldConnectionService>();
  const [characters, setCharacters] = useState<Character[]>([]);
  const [chatHistory, setChatHistory] = useState<HistoryItem[]>([]);
  const [prevChatHistory, setPrevChatHistory] = useState<HistoryItem[]>([]);
  const [prevTranscripts, setPrevTranscripts] = useState<string[]>([]);
  const [chatting, setChatting] = useState(false);
  //   const [chatView, setChatView] = useState(CHAT_VIEW.TEXT);
  const [initialized, setInitialized] = useState(false);
  const [phonemes, setPhonemes] = useState<AdditionalPhonemeInfo[]>([]);
  const [emotionEvent, setEmotionEvent] = useState<EmotionEvent>();
  const [avatars, setAvatars] = useState<string[]>([]);
  const [emotions, setEmotions] = useState<EmotionsMap>({});

  const stateRef = useRef<CurrentContext>();
  stateRef.current = {
    characters,
    chatting,
    connection,
  };

  const onHistoryChange = useCallback((history: HistoryItem[]) => {
    setChatHistory(history);
  }, []);

  const openConnection = useCallback(
    async (previousState?: string) => {
      const currentTranscript = connection?.getTranscript() || "";

      setPrevTranscripts([
        ...prevTranscripts,
        ...(currentTranscript ? [currentTranscript] : []),
      ]);
      setPrevChatHistory([...prevChatHistory, ...chatHistory]);
      setChatHistory([]);
      setChatting(true);
      //   setChatView(form.chatView!);

      const duration = 0;
      const ticks = 0;
      const previousDialog: DialogPhrase[] = [];
      const textMode = true;

      console.log("Connecting to Inworld Service");
      const service = new InworldService({
        onHistoryChange,
        capabilities: {
          ...(textMode ? { interruptions: true } : { phonemes: true }),
          emotions: true,
          multiAgent: false,
          narratedActions: true,
        },
        ...(previousDialog.length && { continuation: { previousDialog } }),
        ...(previousState && { continuation: { previousState } }),
        // audioPlayback: {
        //   stop: { duration, ticks },
        // },
        sceneName:
          "workspaces/default-rlxw0tuke-_67nkok2qq5w/characters/game_master",
        playerName:
          "workspaces/default-rlxw0tuke-_67nkok2qq5w/characters/game_master",
        onPhoneme: (phonemes: AdditionalPhonemeInfo[]) => {
          setPhonemes(phonemes);
        },
        onReady: async () => {
          console.log("Ready!");
        },
        onDisconnect: () => {
          console.log("Disconnect!");
        },
        onMessage: (inworldPacket: InworldPacket) => {
          if (
            inworldPacket.isEmotion() &&
            inworldPacket.packetId?.interactionId
          ) {
            setEmotionEvent(inworldPacket.emotions);
            setEmotions((currentState: any) => ({
              ...currentState,
              [inworldPacket.packetId.interactionId]: inworldPacket.emotions,
            }));
          }
        },
      });

      const characters = await service.connection.getCharacters();

      if (characters.length) {
        console.log("Characters found:", characters);
        const avatars = characters.map((c: Character) => {
          const rpmImageUri = c?.assets?.rpmImageUriPortrait;
          const avatarImg = c?.assets?.avatarImg;

          return rpmImageUri || avatarImg || "";
        });
        setAvatars(avatars);
      } else {
        console.error(
          "Character(s) not found. Was them added?:",
          process.env.INWORLD_SCENE
        );
        return;
      }

      setConnection(service.connection);
      setCharacters(characters);
    },
    [chatHistory, connection, onHistoryChange, prevChatHistory, prevTranscripts]
  );

  useEffect(() => {
    openConnection();
  }, []);

  return (
    <div className="container bg-green-200">
      <div className="w-full border-b py-4 px-16 flex flex-col items-center justify-between">
        <Avatar>
          <AvatarImage
            alt="The White Rabbit"
            src="/placeholder.svg?height=32&width=32"
          />
          <AvatarFallback>WR</AvatarFallback>
        </Avatar>
        <p className="font-semibold text-base leading-4">
          Scene: The White Rabbit's Shop
        </p>
        <div className="flex items-center space-x-2">
          <GaugeIcon className="text-gray-500" />
          <UserIcon className="text-gray-500" />
          <PanelTopCloseIcon className="text-gray-500" />
        </div>
      </div>
      <ChatWindow
        connection={connection}
        characters={characters}
        chatHistory={chatHistory}
        prevTranscripts={prevTranscripts}
        emotions={emotions}
        onRestore={openConnection}
      />
      {connection && (
        <ChatWindow
          connection={connection}
          characters={characters}
          chatHistory={chatHistory}
          prevTranscripts={prevTranscripts}
          emotions={emotions}
          onRestore={openConnection}
        />
      )}
    </div>
  );
};

export default ChatPage;
