import { Outlet } from "react-router-dom";
import UserSettingsDrawer from "../components/UserSettingsDrawer";

function UserSettingsLayout() {
  return (
    <div className="bg-gray-light w-screen h-screen flex flex-row">
      <UserSettingsDrawer />
      <Outlet />
    </div>
  );
}

export default UserSettingsLayout;
