import { Link } from "react-router-dom";
import { ModeToggle } from "../ModeToggle";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

export default function Header() {
  return (
    <header className="border-b">
      <div className="container">
        <div className="h-16 flex items-center justify-between">
          <div className="flex gap-3 items-center">
            <MobileNav />
            <Logo />
          </div>
          <nav className="flex items-center gap-4">
            <DesktopNav />
            <ModeToggle />
          </nav>
        </div>
      </div>
    </header>
  );
}

export const Logo = () => {
  return (
    <Link to="/" className="text-lg font-semibold">
      VITE<span className="text-primary">SHAD</span>
    </Link>
  );
};
