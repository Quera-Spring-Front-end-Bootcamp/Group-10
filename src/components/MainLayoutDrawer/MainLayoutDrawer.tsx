import { Link } from "react-router-dom";

import Logo from "../Logo";
import Button from "../ui/Button";
import ListItem, { ListItemType } from "../ListItem";
import EditProfileIcon from "../icons/EditProfileIcon";
import ArrowRightIcon from "../icons/ArrowRightIcon";
import CheckProfileIcon from "../icons/CheckProfileIcon";
import SettingsIcon from "../icons/SettingsIcon";
import PlusIcon from "../icons/PlusIcon";
import SearchInput from "../SearchInput";

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
      <div className="flex flex-col">
        <div>
          <Logo />
        </div>
        <div className="mt-8 font-medium">
          <h4>ورک اسپیس ها</h4>
        </div>
        <div className="mt-3">
          <SearchInput placeholder="جستجو کنید" />
        </div>
        <Button className="!py-1 !bg-gray-semi-light flex items-center justify-center mt-3">
          <PlusIcon className="stroke-black" />
          <span className="text-black text-sm">ساخت اسپیس جدید</span>
        </Button>
      </div>
    </div>
  );
}

export default MainLayoutDrawer;
