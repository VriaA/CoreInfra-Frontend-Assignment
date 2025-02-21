import { Link } from "react-router";
import HomeIcon from "../../../assets/icons/home.svg?react";
import SearchIcon from "../../../assets/icons/search.svg?react";
import BellIcon from "../../../assets/icons/bell.svg?react";
import AvatarIcon from "../../../assets/icons/avatar.svg?react";
import MenuIcon from "../../../assets/icons/menu.svg?react";
import { useContext } from "react";
import { AppContext, AppContextValues } from "../../../contexts/AppContext";

export default function DashboardHeader() {
  const { setIsNavBarOpen } = useContext(AppContext) as AppContextValues;

  function openNavBar() {
    setIsNavBarOpen(true);
  }

  return (
    <header className="flex flex-col border-b border-[#dededf] bg-white py-1 pr-[19px] pl-2 lg:flex-row lg:justify-between">
      <Link
        to={"/"}
        className="nav-link font-medium text-[#001735]">
        <HomeIcon
          width={16}
          height={16}
          aria-hidden={true}
          stroke="#001735"
        />
        <span>Dashboard</span>
      </Link>

      <div className="flex h-10 w-full items-center gap-4 pl-3 lg:w-fit lg:pl-0">
        <button
          className="cursor-pointer lg:hidden"
          onClick={openNavBar}
          type="button"
          aria-label="Open navigation menu">
          <MenuIcon />
        </button>
        <div className="mx-auto flex w-full max-w-[400px] items-center gap-2 rounded-[98px] border border-[#d0d5dd] px-[14px] py-2 shadow-[0px_15.68px_31.36px_rgba(0,0,0,0.05)] focus-within:outline lg:mx-0 lg:w-[214px]">
          <SearchIcon
            width={16}
            height={16}
            className="flex-none"
            aria-hidden="true"
          />
          <input
            type="text"
            className="font-satoshi w-full text-start text-xs leading-[18px] font-normal text-[#344054] outline-none"
            placeholder="Search"
            aria-label="Search"
          />
        </div>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-md p-[10px]"
          aria-label="Notifications">
          <BellIcon />
        </button>

        <button
          type="button"
          className="h-8 w-8"
          aria-label="User profile">
          <AvatarIcon />
        </button>
      </div>
    </header>
  );
}
