import { Routes, Route }
from "react-router-dom";

import LandingPage
from "../pages/LandingPage";

import Login
from "../pages/Login";

import Register
from "../pages/Register";

import Dashboard
from "../pages/Dashboard";

import ChatbotPage
from "../pages/ChatbotPage";

import MockTestPage
from "../pages/MockTestPage";

import AnalyticsPage
from "../pages/AnalyticsPage";

import ProfilePage
from "../pages/ProfilePage";

import LeaderboardPage
from "../pages/LeaderboardPage";

import SettingsPage
from "../pages/SettingsPage";

import NotFound
from "../pages/NotFound";

import ProtectedRoute
from "../components/auth/ProtectedRoute";

import AttemptHistory from "../pages/AttemptHistory";
import AdminQuestions from "../pages/AdminQuestions";
import AdminDashboard from "../pages/AdminDashboard";
function AppRoutes() {

  return (
    <Routes>

      <Route
        path="/"
        element={<LandingPage />}
      />

      <Route
        path="/login"
        element={<Login />}
      />

      <Route
        path="/register"
        element={<Register />}
      />

      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />

      <Route
        path="/chatbot"
        element={
          <ProtectedRoute>
            <ChatbotPage />
          </ProtectedRoute>
        }
      />

      <Route
        path="/mock-test"
        element={
          <ProtectedRoute>
            <MockTestPage />
          </ProtectedRoute>
        }
      />

      <Route
        path="/analytics"
        element={
          <ProtectedRoute>
            <AnalyticsPage />
          </ProtectedRoute>
        }
      />

      <Route
        path="/profile"
        element={
          <ProtectedRoute>
            <ProfilePage />
          </ProtectedRoute>
        }
      />

      <Route
        path="/leaderboard"
        element={
          <ProtectedRoute>
            <LeaderboardPage />
          </ProtectedRoute>
        }
      />

      <Route
        path="/settings"
        element={
          <ProtectedRoute>
            <SettingsPage />
          </ProtectedRoute>
        }
      />

      <Route
        path="*"
        element={
          <ProtectedRoute>  <NotFound />
          </ProtectedRoute>
        }
      />
      <Route
  path="/history"
        element={
          <ProtectedRoute><AttemptHistory />
          </ProtectedRoute>}
        
      />
      <Route
  path="/admin"
  element={<AdminQuestions />}
      />
      <Route
  path="/admin"
        element={<AdminDashboard />}
        
/>

    </Routes>
  );
}

export default AppRoutes;