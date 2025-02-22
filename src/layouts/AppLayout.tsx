import NavBar from "../components/NavBar";
import { Outlet } from "react-router";
import AppContextProvider from "../contexts/AppContext";

export default function AppLayout() {
  return (
    <AppContextProvider>
      <div className="flex">
        <NavBar />
        <div className="min-h-svh w-full flex-1 bg-[#F8FBFF]">
          <Outlet />
        </div>
      </div>
    </AppContextProvider>
  );
}
