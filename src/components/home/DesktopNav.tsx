import { navMenu } from "@/lib/nav-menu";
import { Link } from "react-router-dom";

export default function DesktopNav() {
  return (
    <div className="hidden sm:block">
      <div className="flex gap-4 text-sm">
        {navMenu.map((item, i) => (
          <Link to={item.href} key={i}>
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
