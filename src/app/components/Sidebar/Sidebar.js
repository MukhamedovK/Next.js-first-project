"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

const Sidebar = () => {
  const router = useRouter();

  return (
    <aside className="bg-base-200 text-base-content min-h-full w-[20%] p-4 border-r-2">
      <div className="mt-6">
        <ul>
          <li>
            <button className="btn px-4 py-2 text-[17px]" onClick={() => router.push("/")}>
              Home
            </button>
          </li>
          <li>
            <button className="btn px-4 py-2 text-[17px]" onClick={() => router.push("/dashboard")}>
              Dashboard
            </button>
          </li>
          <li>
          <button className="btn px-4 py-2 text-[17px]" onClick={() => router.push("/about")}>
              About
            </button>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
