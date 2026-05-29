import DashboardLayout from "../layouts/DashboardLayout";
import ChatBox from "../components/chatbot/ChatBox";

function ChatbotPage() {
  return (
    <DashboardLayout>

      <h1 className="text-4xl font-bold text-white mb-6">
        AI Chatbot
      </h1>

      <ChatBox />

    </DashboardLayout>
  );
}

export default ChatbotPage;