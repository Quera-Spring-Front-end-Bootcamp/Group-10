import { Link, LinkProps } from "react-router-dom";

export default function QLink({ to, children, className }: LinkProps) {
  return (
    <Link to={to} className={`text-primary ${className}`}>
      {children}
    </Link>
  );
}
