import { Outlet } from "react-router-dom";

const AnonymousLayout = () => {
  return (
    <>
      <h1>AnonymousLayout</h1>
      <Outlet />
    </>
  );
};

export default AnonymousLayout;
