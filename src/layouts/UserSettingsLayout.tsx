import { Outlet } from "react-router-dom";

function UserSettingsLayout() {
  return (
    <div>
      <h1>user settings layout</h1>
      <Outlet />
    </div>
  );
}

export default UserSettingsLayout;
