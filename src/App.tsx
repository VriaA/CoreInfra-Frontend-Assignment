import { BrowserRouter, Routes, Route } from "react-router";
import Dashboard from "./pages/dashboard/Dashboard";
import AppLayout from "./layouts/AppLayout";
import CardProfile from "./pages/card_profile/CardProfile";
import CreateProfile from "./pages/card_profile/CreateProfile";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route
            path="/"
            element={<Dashboard />}
          />
          <Route
            path="/card-profile"
            element={<CardProfile />}
          />

          <Route
            path="/card-profile/create"
            element={<CreateProfile />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
