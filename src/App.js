import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PoemPage from "./pages/PoemPage";
import GeneratorPage from "./pages/GeneratorPage";
import ReviewsPage from "./pages/ReviewsPage";
import PrivateOreoPage from "./pages/PrivateOreoPage";
import PrivateFriendsPage from "./pages/PrivateFriendsPage";
import AdminPage from "./pages/AdminPage";
import PrivateRoute from "./components/PrivateRoute";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/poem/:id" element={<PoemPage />} />
          <Route path="/generator" element={<GeneratorPage />} />
          <Route path="/reviews" element={<ReviewsPage />} />
          <Route
            path="/oreo-private"
            element={
              <PrivateRoute>
                <PrivateOreoPage />
              </PrivateRoute>
            }
          />
          <Route
            path="/friends-keerthi-mouli"
            element={
              <PrivateRoute>
                <PrivateFriendsPage />
              </PrivateRoute>
            }
          />
          <Route
            path="/admin"
            element={
              <PrivateRoute>
                <AdminPage />
              </PrivateRoute>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
