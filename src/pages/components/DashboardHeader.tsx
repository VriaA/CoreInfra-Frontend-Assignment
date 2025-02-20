import { Link } from "react-router";
import HomeIcon from "../../assets/icons/home.svg?react";
import SearchIcon from "../../assets/icons/search.svg?react";
import BellIcon from "../../assets/icons/bell.svg?react";
import AvatarIcon from "../../assets/icons/avatar.svg?react";

export default function DashboardHeader() {
  return (
    <header className="flex justify-between border-b border-[#dededf] bg-white py-1 pr-[19px] pl-2">
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

      <div className="flex h-10 items-center gap-4">
        <div className="flex w-[214px] items-center gap-2 rounded-[98px] border border-[#d0d5dd] px-[14px] py-2 focus-within:outline">
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
