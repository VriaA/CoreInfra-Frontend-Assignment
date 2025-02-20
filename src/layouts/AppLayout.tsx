import NavBar from "../components/NavBar";
import { Outlet } from "react-router";

export default function AppLayout() {
  return (
    <div className="flex">
      <NavBar />
      <div className="flex-1">
        <Outlet />
      </div>
    </div>
  );
}
