"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { LoaderCircle, Send } from "lucide-react";
import React, { useEffect, useState } from "react";
import axios from "axios";
import ReactMarkdown from "react-markdown";
import EmptyState from "../_components/EmptyState";
import { useParams, useRouter } from "next/navigation";
import { v4 as uuidv4 } from "uuid";

type messages = {
  content: string;
  role: string;
  type: string;
};

function AiChat() {
  const [userInput, setUserInput] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [messageList, setMessageList] = useState<messages[]>([]);

  const router = useRouter();

  const { chatId } = useParams();
  console.log("CHATID:", chatId);

  useEffect(() => {
    chatId && GetMessageList();
  }, [chatId]);

  const GetMessageList = async () => {
    const result = await axios.get("/api/history?recordId=" + chatId);
    console.log("GET🤩:", result.data);
    setMessageList(result?.data?.content);
  };

  const onSend = async () => {
    setLoading(true);
    setMessageList((prev) => [
      ...prev,
      {
        content: userInput,
        role: "user",
        type: "text",
      },
    ]);
    setUserInput("");
    const result = await axios.post("/api/ai-career-chat-agent", {
      userInput: userInput,
    });
    console.log("CHAT:", result.data);
    setMessageList((prev) => [...prev, result.data]);
    setLoading(false);
  };

  console.log(messageList);

  useEffect(() => {
    //Save message into Data base
    messageList.length > 0 && updateMessageList();
  }, [messageList]);

  const updateMessageList = async () => {
    const result = await axios.post("/api/history", {
      content: messageList,
      recordId: chatId,
    });
    console.log("Chat History:", result);
  };

  const onNewChat = async () => {
    const id = uuidv4();
    //Create a new record to History Table
    const result = await axios.post("/api/history", {
      recordId: id,
      content: [],
    });
    console.log("HISTORY LOGS:", result);
    router.replace("/ai-tools/ai-chat/" + id);
  };

  return (
    <div className="px-10 md:px-24 lg:px-36 xl:px-48 gradient-background5 h-[75vh] overflow-auto p-10 rounded-xl">
      <div className="flex flex-col items-center justify-between">
        <div>
          <h2 className="font-bold text-3xl text-center">AI Career Q/A Chat</h2>
          <p>Smarter Career decisions start here...</p>
        </div>
        <Button onClick={onNewChat} className="mt-5" variant={"work1"}>
          + New Chat
        </Button>
      </div>
      <div className="flex flex-col h-[75vh]">
        {messageList?.length <= 0 && (
          <div className="mt-5">
            {/* Empty state options */}
            <EmptyState
              selectedQuestion={(question: string) => setUserInput(question)}
            />
          </div>
        )}

        <div className="flex-1">
          {/* Message List */}
          {messageList?.map((message, index) => (
            <div key={index}>
              <div
                className={`flex mb-2 ${
                  message.role == "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`p-3 rounded-lg gap-2 ${
                    message.role == "user"
                      ? "bg-indigo-400 text-black rounded-lg"
                      : "bg-gray-50 text-black"
                  }`}
                >
                  <ReactMarkdown>{message.content}</ReactMarkdown>
                </div>
              </div>
              {loading && messageList?.length - 1 == index && (
                <div className="flex justify-start p-3 rounded-lg gap-2 bg-gray-50 text-black mb-2">
                  <LoaderCircle className="animate-spin" /> Thinking...
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="flex justify-between items-center gap-4 absolute bottom-5 w-[50%]">
          {/* Input field */}
          <Input
            onChange={(event) => setUserInput(event.target.value)}
            value={userInput}
            placeholder="Type Here"
          />
          <Button disabled={loading} onClick={onSend}>
            <Send />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default AiChat;
