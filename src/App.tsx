import { BrowserRouter, Routes, Route } from "react-router";
import Dashboard from "./pages/dashboard/Dashboard";
import AppLayout from "./layouts/AppLayout";
import CardProfile from "./pages/card_profile/CardProfile";
import CreateProfile from "./pages/card_profile/CreateProfile";
import CardRequest from "./pages/card_request/CardRequest";
import CardRequestDetails from "./pages/card_request/CardRequestDetails";
import CardRequestProvider from "./contexts/CardRequestContext";
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
          <Route element={<CardRequestProvider />}>
            <Route
              path="/card-request"
              element={<CardRequest />}
            />
            <Route
              path="/card-request/:id"
              element={<CardRequestDetails />}
            />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
