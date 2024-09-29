import { Link } from "react-router-dom";
import { ModeToggle } from "../ModeToggle";

export default function Header() {
  return (
    <header className="z-50 backdrop-blur bg-white/50 dark:bg-black/50 border-b sticky top-0">
      <div className="container">
        <div className="h-16 flex items-center justify-between">
          <div className="flex gap-3 items-center">
            <Logo />
          </div>
          <nav className="flex items-center gap-4">
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
