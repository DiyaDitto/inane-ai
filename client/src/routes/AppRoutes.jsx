import { Routes, Route } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Dashboard from "../pages/Dashboard";
import ChatbotPage from "../pages/ChatbotPage";
import MockTestPage from "../pages/MockTestPage";
import AnalyticsPage from "../pages/AnalyticsPage";
import ProfilePage from "../pages/ProfilePage";
import LeaderboardPage from "../pages/Leaderboardpage";
import SettingsPage from "../pages/SettingsPage";
import NotFound from "../pages/NotFound";
function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/chatbot" element={<ChatbotPage />} />
      <Route path="/mock-test" element={<MockTestPage />} />
      <Route path="/analytics" element={<AnalyticsPage />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/leaderboard" element={<LeaderboardPage />} />
      <Route path="/settings" element={<SettingsPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>

  );
}

export default AppRoutes;