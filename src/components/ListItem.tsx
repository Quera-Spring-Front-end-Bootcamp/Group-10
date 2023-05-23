import { Link } from "react-router-dom";

export type ListItemType = {
  id: number;
  title: string;
  to: string;
  icon?: JSX.Element;
};

function ListItem({ title, to, icon }: ListItemType) {
  return (
    <Link to={to} className="flex gap-2">
      {icon}
      <span>{title}</span>
    </Link>
  );
}

export default ListItem;
