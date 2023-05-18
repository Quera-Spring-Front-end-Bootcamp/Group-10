import { Outlet } from "react-router-dom";
import AnonymousHeader from "../components/AnonymousHeader";

const AnonymousLayout = () => {
  return (
    <>
      <AnonymousHeader />
      <Outlet />
    </>
  );
};

export default AnonymousLayout;
