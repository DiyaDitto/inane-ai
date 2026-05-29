import { useState } from "react";

function ChatInput({ onSend }) {
  const [message, setMessage] = useState("");

  const handleSend = () => {
    if (!message.trim()) return;

    onSend(message);
    setMessage("");
  };

  return (
    <div className="flex gap-3">

      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Ask anything..."
        className="flex-1 bg-slate-800 border border-slate-700 rounded-xl p-4 text-white"
      />

      <button
        onClick={handleSend}
        className="bg-purple-600 hover:bg-purple-700 px-6 rounded-xl"
      >
        Send
      </button>

    </div>
  );
}

export default ChatInput;