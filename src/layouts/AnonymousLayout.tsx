import { Outlet } from "react-router-dom";
import AnonymousHeader from "../components/AnonymousHeader";

const AnonymousLayout = () => {
  return (
    <div className="flex flex-col h-screen">
      <div className="w-screen h-screen m-auto absolute -z-50">
        <div className="absolute inset-0 bg-gradient-to-r from-secondary  to-primary transform -skew-y-12 origin-bottom-right"></div>
      </div>
      <AnonymousHeader />
      <Outlet />
    </div>
  );
};

export default AnonymousLayout;
