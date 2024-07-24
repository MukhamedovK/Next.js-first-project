import ThemeController from "@/app/others/ThemeController";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="navbar bg-base-100 drop-shadow-xl">
      <div className="flex-1">
        <Link href={'/'} className="btn btn-ghost text-xl">Kamoliddin Muxamedov</Link>
      </div>
      <div className="flex-none">
        <ThemeController />
      </div>
    </nav>
  );
}
