import { useState } from "react";
import Message from "./Message";
import ChatInput from "./ChatInput";

function ChatBox() {
  const [messages, setMessages] = useState([
    {
      text: "Hello! I'm your SSC AI Mentor. How can I help you today?",
      sender: "ai",
    },
  ]);

  const handleSend = (text) => {
    setMessages((prev) => [
      ...prev,
      {
        text,
        sender: "user",
      },
      {
        text: "AI response will come here later.",
        sender: "ai",
      },
    ]);
  };

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl h-[600px] flex flex-col">

      <div className="flex-1 overflow-y-auto p-6 space-y-4">
        {messages.map((msg, index) => (
          <Message
            key={index}
            text={msg.text}
            sender={msg.sender}
          />
        ))}
      </div>

      <div className="p-4 border-t border-slate-800">
        <ChatInput onSend={handleSend} />
      </div>

    </div>
  );
}

export default ChatBox;