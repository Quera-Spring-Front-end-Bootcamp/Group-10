import { Link } from "react-router-dom";

import useRouteIsActive from "../hooks/useRouteIsActive";

/* -------------------------------------------------------------------------- */
/*                                     Type                                   */
/* -------------------------------------------------------------------------- */
export type ListItemType = {
  id: number | string;
  title: string;
  to: string;
  icon?: JSX.Element;
  className?: string;
};

function ListItem({ title, to, icon, className }: ListItemType) {
  /* -------------------------------------------------------------------------- */
  /*                                    hook                                    */
  /* -------------------------------------------------------------------------- */
  const isActive = useRouteIsActive(to);

  return (
    <Link
      to={to}
      className={`flex gap-2 align-middle p-1 
       ${isActive && "bg-blue-light"}
       ${className}`}
    >
      {icon}
      <span>{title}</span>
    </Link>
  );
}

export default ListItem;
