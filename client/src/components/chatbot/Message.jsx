function Message({ text, sender }) {
  return (
    <div
      className={`flex ${
        sender === "user"
          ? "justify-end"
          : "justify-start"
      }`}
    >
      <div
        className={`max-w-md px-4 py-3 rounded-2xl ${
          sender === "user"
            ? "bg-purple-600"
            : "bg-slate-800"
        }`}
      >
        {text}
      </div>
    </div>
  );
}

export default Message;