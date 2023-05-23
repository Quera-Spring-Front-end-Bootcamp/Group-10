import React from "react";
import Logo from "./Logo";
import Button from "./ui/Button";
import BackIcon from "./icons/BackIcon";
import UserSettingsDrawerListItem, { ListItemType } from "./ListItem";

const listItems: ListItemType[] = [
  {
    id: 1,
    title: "test",
    to: "/app",
    icon: <BackIcon className="stroke-gray-dark" />,
  },
];

function UserSettingsDrawer() {
  return (
    <div className=" border-l-[1px] border-[#AAAAAA] w-80 p-8">
      <div className="flex flex-col">
        <div>
          <Logo />
        </div>
        <div className="mt-16">
          <Button className="flex gap-1">
            <BackIcon className="stroke-white" />
            <span>بازگشت</span>
          </Button>
          <div className="mt-4">
            {listItems.map((listItem) => {
              return (
                <UserSettingsDrawerListItem key={listItem.id} {...listItem} />
              );
            })}
          </div>
          {/* <UserSettingsDrawerListItem /> */}
        </div>
      </div>
    </div>
  );
}

export default UserSettingsDrawer;
