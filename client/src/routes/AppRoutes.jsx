import { Routes, Route } from "react-router-dom";
import CurrentAffairsPage from "../pages/CurrentAffairsPage";
import CurrentAffairsDetailPage from "../pages/CurrentAffairsDetailPage";
import LandingPage from "../pages/LandingPage";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Dashboard from "../pages/Dashboard";
import ChatbotPage from "../pages/ChatbotPage";
import MockTestPage from "../pages/MockTestPage";
import AnalyticsPage from "../pages/AnalyticsPage";
import ProfilePage from "../pages/ProfilePage";
import LeaderboardPage from "../pages/LeaderboardPage";
import SettingsPage from "../pages/SettingsPage";
import NotFound from "../pages/NotFound";
import SubjectPage from "../pages/SubjectPage";
import ProtectedRoute from "../components/auth/ProtectedRoute";
import PYQPage from "../pages/PYQPage";
import PYQDetailPage from "../pages/PYQDetailPage";
import AttemptHistory from "../pages/AttemptHistory";
import AdminQuestions from "../pages/AdminQuestions";
import AdminDashboard from "../pages/AdminDashboard";
import AdminPYQ from "../pages/AdminPYQ";
import AdminCurrentAffairs from "../pages/AdminCurrentAffairs";
import AdminUsers from "../pages/AdminUsers";
import AdminAnalytics from "../pages/AdminAnalytics";
import AdminUpload from "../pages/AdminUpload";
import SearchPage from "../pages/SearchPage";
import EditQuestion from "../pages/Editquestion";
import EditPYQ from "../pages/EditPYQ";
import EditCurrentAffair from "../pages/EditCurrentAffair";
import AdminBulkUpload from "../pages/AdminBulkUpload";
import SubjectQuestions from "../pages/SubjectQuestions";
import AdminLayout from "../layouts/AdminLayout";
import PYQYearPage from "../pages/PYQYearPage";
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
        path="/history"
        element={
          <ProtectedRoute>
            <AttemptHistory />
          </ProtectedRoute>
        }
      />

      <Route
        path="/admin"
        element={
        
            <AdminDashboard />
   
        }
      />

      <Route
        path="/admin/questions"
        element={
            <AdminQuestions />
    
        }
      />
      <Route
  path="/admin/pyqs"
  element={
   
      <AdminPYQ />

  }
/>

<Route
  path="/admin/current-affairs"
  element={
    
      <AdminCurrentAffairs />

  }
/>

<Route
  path="/admin/users"
  element={
 
      <AdminUsers />
    
  }
/>

<Route
  path="/admin/analytics"
  element={
   
      <AdminAnalytics />

  }
/>

<Route
  path="/admin/upload"
  element={
    
      <AdminUpload />
    
  }
/>

      
      <Route
  path="/subjects"
  element={
    <ProtectedRoute>
      <SubjectPage />
    </ProtectedRoute>
  }
/>


   
      <Route
  path="/pyqs"
  element={
    <ProtectedRoute>
      <PYQPage />
    </ProtectedRoute>
  }
/>

<Route
  path="/pyqs/:exam"
  element={
    <ProtectedRoute>
      <PYQDetailPage />
    </ProtectedRoute>
  }
      />
      <Route
  path="/current-affairs"
  element={
    <ProtectedRoute>
      <CurrentAffairsPage />
    </ProtectedRoute>
  }
/>

<Route
  path="/current-affairs/:category"
  element={
    <ProtectedRoute>
      <CurrentAffairsDetailPage />
    </ProtectedRoute>
  }
      />
      <Route
  path="/search"
  element={
    <ProtectedRoute>
      <SearchPage />
    </ProtectedRoute>
  }
      />
      <Route
  path="/admin/questions/edit/:id"
  element={<EditQuestion />}
/>
<Route
  path="/admin/pyqs/edit/:id"
  element={<EditPYQ />}
/>
<Route
  path="/admin/current-affairs/edit/:id"
  element={<EditCurrentAffair />}
      />
      <Route
  path="/admin/bulk-upload"
  element={<AdminBulkUpload />}
      />
      <Route
  path="/subjects/:subject"
  element={<SubjectQuestions />}
      />
       <Route
  path="/admin-layout"
  element={<AdminLayout />}
      />
    <Route
  path="/pyqs/:exam/:year"
  element={<PYQYearPage />}
/>
<Route
        path="*"
        element={
          <ProtectedRoute>
            <NotFound />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

export default AppRoutes;