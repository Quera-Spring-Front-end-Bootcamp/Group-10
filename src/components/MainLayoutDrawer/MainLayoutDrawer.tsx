import { Link, NavLink } from "react-router-dom";

import Logo from "../Logo";
import Button from "../ui/Button";
import ListItem, { ListItemType } from "../ListItem";
import EditProfileIcon from "../icons/EditProfileIcon";
import ArrowRightIcon from "../icons/ArrowRightIcon";
import CheckProfileIcon from "../icons/CheckProfileIcon";
import SettingsIcon from "../icons/SettingsIcon";
import PlusIcon from "../icons/PlusIcon";
import SearchInput from "../SearchInput";
import MainLayoutDrawerList from "./MainLayoutDrawerList";
import Avatar from "../ui/Avatar";
import ExitIcon from "../icons/ExitIcon";
import NewWorkSpace from "../NewWorkSpace/NewWorkSpace";

/* -------------------------------------------------------------------------- */
/*                                   Const                                    */
/* -------------------------------------------------------------------------- */
const listItems: ListItemType[] = [
  {
    id: 1,
    title: "اطلاعات فردی",
    to: "/user/personal",
    className: "stroke-gray-dark",
    icon: <EditProfileIcon className="stroke-gray-dark" />,
  },
  {
    id: 1,
    title: "اطلاعات حساب",
    to: "/user/account",
    className: "stroke-gray-dark",
    icon: <CheckProfileIcon className="stroke-gray-dark" />,
  },
  {
    id: 1,
    title: "تنظیمات",
    to: "/user/settings",
    className: "stroke-gray-dark",
    icon: <SettingsIcon className="stroke-gray-dark" />,
  },
];

function MainLayoutDrawer() {
  return (
    <div className=" border-l-[1px] border-[#AAAAAA] w-96 p-8">
      <div className="flex flex-col h-[calc(100vh-64px)]">
        <div>
          <Logo />
        </div>
        <div className="mt-8 font-semibold">
          <h4>ورک اسپیس ها</h4>
        </div>
        <div className="mt-3">
          <SearchInput placeholder="جستجو کنید" />
        </div>
        <NewWorkSpace />
        <div className="flex-1 overflow-auto">
          <MainLayoutDrawerList />
        </div>
        <NavLink to="/user/personal">
          <button className="flex items-center gap-2 my-2">
            <Avatar alt="KD" />
            <span>نام کاربری</span>
          </button>
        </NavLink>
        <NavLink to="/">
          <button className="flex items-center gap-2">
            <div className="w-9 h-9 flex items-center justify-center">
              <ExitIcon className="stroke-gray" />
            </div>
            <span className="text-gray">خروج</span>
          </button>
        </NavLink>
      </div>
    </div>
  );
}

export default MainLayoutDrawer;
