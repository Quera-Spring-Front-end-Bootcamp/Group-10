import { Outlet } from "react-router-dom";
import MainLayoutDrawer from "../components/MainLayoutDrawer/MainLayoutDrawer";

const MainLayout = () => {
  return (
    <div className="bg-gray-light w-screen h-screen flex flex-row">
      <MainLayoutDrawer />
      <div className="p-4 w-full overflow-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
