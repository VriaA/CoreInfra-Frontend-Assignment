import NavBar from "../components/NavBar";
import { Outlet } from "react-router";
import AppContextProvider from "../contexts/AppContext";

export default function AppLayout() {
  return (
    <AppContextProvider>
      <div className="flex">
        <NavBar />
        <div className="flex-1">
          <Outlet />
        </div>
      </div>
    </AppContextProvider>
  );
}
