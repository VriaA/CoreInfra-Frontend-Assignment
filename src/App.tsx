import { BrowserRouter, Routes, Route } from "react-router";
import Dashboard from "./pages/dashboard/Dashboard";
import AppLayout from "./layouts/AppLayout";
import CardProfile from "./pages/card_profile/CardProfile";
import CreateProfile from "./pages/card_profile/CreateProfile";
import EditProfile from "./pages/card_profile/EditProfile";
import CardRequest from "./pages/card_request/CardRequest";
import CardRequestDetails from "./pages/card_request/CardRequestDetails";
import CardRequestProvider from "./contexts/CardRequestContext";
import CardProfileProvider from "./contexts/CardProfileContext";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route
            path="/"
            element={<Dashboard />}
          />

          <Route element={<CardProfileProvider />}>
            <Route
              path="/card-profile"
              element={<CardProfile />}
            />
            <Route
              path="/card-profile/create"
              element={<CreateProfile />}
            />
            <Route
              path="/card-profile/edit/:id"
              element={<EditProfile />}
            />
          </Route>

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
