"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  CameraIcon,
  FileIcon,
  GaugeIcon,
  MicIcon,
  MoreHorizontalIcon,
  PanelTopCloseIcon,
  PhoneIcon,
  SendIcon,
  UserIcon,
} from "lucide-react";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import { Textarea } from "../ui/textarea";
import {
  Character,
  HistoryItem,
  InworldConnectionService,
} from "@inworld/web-core";
import { EmotionsMap } from "@/lib/enums";
import { FC, useCallback, useState } from "react";
import { Input } from "../ui/input";
import { ChatHistory } from "./chat-history";
import { CHAT_VIEW } from "@/types/chat-types";
import ChatForm from "./chat-form";

interface ChatProps {
  characters: Character[];
  chatView?: any;
  chatHistory: HistoryItem[];
  connection: InworldConnectionService;
  emotions: EmotionsMap;
  onRestore: (state: string) => Promise<void>;
  prevTranscripts: string[];
}

const RECORDING_STATUS = {
  STARTING: "STARTING",
  RECORDING: "RECORDING",
  STOPPED: "STOPPED",
};

const ChatWindow: FC<ChatProps> = (props) => {
  const { chatHistory, connection } = props;

  const [text, setText] = useState("");
  const [confirmText, setConfirmText] = useState("");
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [recorderdingStatus, setRecorderdingStatus] = useState(
    RECORDING_STATUS.STOPPED
  );
  const [isPlaybackMuted, setIsPlaybackMuted] = useState(
    connection?.player?.getMute() ?? false
  );
  const [hasPlayedWorkaroundSound, setHasPlayedWorkaroundSound] =
    useState(false);
  const [isInteractionEnd, setIsInteractionEnd] = useState<boolean>(false);

  const handleTextChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setText(e.target.value);
    },
    []
  );

  const savedState = localStorage.getItem("INWORLD_SESSION_STATE_KEY");

  const handleCopyClick = useCallback(async () => {
    const history = [...props.prevTranscripts, connection.getTranscript()].join(
      "\n"
    );

    if (navigator.clipboard) {
      navigator.clipboard.writeText(history).then(() => {
        setConfirmText("Transcript successfully copied to clipboard");
      });
    } else {
      setConfirmText("Transcript successfully copied to console");
    }

    setConfirmOpen(true);
  }, [connection, chatHistory, props.prevTranscripts]);

  const handleClearStateClick = useCallback(() => {
    localStorage.removeItem("INWORLD_SESSION_STATE_KEY");
    setConfirmText("Session state successfully cleared from local storage");
    setConfirmOpen(true);
    ("INWORLD_SESSION_STATE_KEY");
  }, []);

  const handleSaveStateClick = useCallback(async () => {
    const sessionState = await connection.getSessionState();

    if (sessionState?.state) {
      localStorage.setItem("INWORLD_SESSION_STATE_KEY", sessionState.state);
      setConfirmText(
        'Session state successfully saved to local storage. Now you can restore it us the "Restore" button'
      );
    } else {
      setConfirmText("Session state could not be saved. Try again");
    }

    setConfirmOpen(true);
  }, [connection]);

  const handleRestoreStateClick = useCallback(async () => {
    if (savedState) {
      await props.onRestore(savedState);
      setConfirmText("Session state successfully restored from local storage");
    } else {
      setConfirmText("Session state could not be restored. Try again");
    }

    setConfirmOpen(true);
  }, [props.onRestore, savedState]);

  const handleMutePlayback = useCallback(() => {
    connection.recorder.initPlayback();
    connection.player.mute(!isPlaybackMuted);
    setIsPlaybackMuted(!isPlaybackMuted);
    connection.sendTTSPlaybackMute(!isPlaybackMuted);
  }, [connection, isPlaybackMuted]);

  const stopRecording = useCallback(() => {
    setRecorderdingStatus(RECORDING_STATUS.STOPPED);
    connection.recorder.stop();
    connection.sendAudioSessionEnd();
  }, [connection]);

  const startRecording = useCallback(async () => {
    try {
      setRecorderdingStatus(RECORDING_STATUS.STARTING);
      connection.sendAudioSessionStart();
      await connection.recorder.start();
      setRecorderdingStatus(RECORDING_STATUS.RECORDING);
    } catch (e) {
      console.error(e);
    }
  }, [connection]);

  const playWorkaroundSound = useCallback(() => {
    // Workaround for browsers with restrictive auto-play policies
    connection.player.playWorkaroundSound();
    setHasPlayedWorkaroundSound(true);
  }, [connection, setHasPlayedWorkaroundSound]);

  const handleSend = useCallback(() => {
    if (text) {
      !hasPlayedWorkaroundSound && playWorkaroundSound();

      connection?.sendText(text);

      setText("");
    }
  }, [connection, hasPlayedWorkaroundSound, playWorkaroundSound, text]);

  const handleTextKeyPress = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>, handle: () => void) => {
      if (e.key === "Enter") {
        handle();
      }
    },
    []
  );

  const handleSpeakClick = useCallback(async () => {
    !hasPlayedWorkaroundSound && playWorkaroundSound();

    if (recorderdingStatus === RECORDING_STATUS.RECORDING) {
      return stopRecording();
    } else if (recorderdingStatus === RECORDING_STATUS.STOPPED) {
      return startRecording();
    }
  }, [
    connection,
    hasPlayedWorkaroundSound,
    recorderdingStatus,
    playWorkaroundSound,
    startRecording,
    stopRecording,
  ]);
  return (
    <Card className="max-w-lg mx-auto">
      <CardHeader className="flex flex-row items-center justify-between p-4 border-b">
        <div className="flex items-center space-x-2">
          <Avatar>
            <AvatarImage
              alt="The White Rabbit"
              src="/placeholder.svg?height=32&width=32"
            />
            <AvatarFallback>WR</AvatarFallback>
          </Avatar>
          <CardDescription className="font-semibold text-base leading-4">
            Scene: The White Rabbit's Shop
          </CardDescription>
        </div>
        <div className="flex items-center space-x-2">
          <GaugeIcon className="text-gray-500" />
          <UserIcon className="text-gray-500" />
          <PanelTopCloseIcon className="text-gray-500" />
        </div>
      </CardHeader>
      <CardContent>
        <div className="p-4">
          <Select>
            <SelectTrigger id="scene">
              <SelectValue>The White Rabbit's Shop</SelectValue>
            </SelectTrigger>
            <SelectContent position="popper">
              <SelectItem value="shop">The White Rabbit's Shop</SelectItem>
              <SelectItem value="other">Other Scenes</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <ChatHistory
          characters={props.characters}
          chatView={CHAT_VIEW.TEXT}
          emotions={props.emotions}
          history={props.chatHistory}
          onInteractionEnd={setIsInteractionEnd}
        />
      </CardContent>
      <CardFooter className="flex flex-col items-center justify-between p-4 border-t">
        <Textarea />
        <Separator />
        <div className="flex items-center justify-start gap-4 flex-row">
          <CameraIcon className="mx-2 text-gray-500" />
          <PhoneIcon className="mx-2 text-gray-500" />
          <MicIcon className="mx-2 text-gray-500" />
          <FileIcon className="mx-2 text-gray-500" />
          <MoreHorizontalIcon className="mx-2 text-gray-500" />
          <Button variant="ghost">
            <SendIcon />
          </Button>
        </div>
        <div className="w-full">
          <Input className="flex-1" placeholder="Message The White Rabbit" />
          <Button className="ml-2">Send</Button>
        </div>
        <ChatForm />
        <Input onChange={(e) => setText(e.target.value)} />
        <Button onClick={() => handleSend()}>Send Message</Button>
        <Button onClick={() => startRecording()}>startRecording</Button>
        <Button onClick={() => stopRecording()}>stopRecording rec</Button>
      </CardFooter>
    </Card>
  );
};

export default ChatWindow;
