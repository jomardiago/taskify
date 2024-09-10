import Link from "next/link";
import { LayoutDashboard, ListTodo, PanelTop, User } from "lucide-react";

import { PATHS } from "@/lib/paths";

type Props = {
  children: React.ReactNode;
};

export default function DashboardLayout({ children }: Props) {
  return (
    <div className="flex w-full gap-12">
      <div className="w-[250px] h-[calc(100vh-70px)] px-12 py-8 border-r shadow-xl">
        <ul className="space-y-4 text-sm">
          <li>
            <Link
              className="link flex items-center"
              href={PATHS.dashboard.root}
            >
              <LayoutDashboard className="w-4 h-4 mr-1" /> Dashboard
            </Link>
          </li>
          <li>
            <Link
              className="link flex items-center"
              href={PATHS.dashboard.tasks}
            >
              <ListTodo className="w-4 h-4 mr-1" /> Tasks
            </Link>
          </li>
          <li>
            <Link
              className="link flex items-center"
              href={PATHS.dashboard.categories}
            >
              <PanelTop className="w-4 h-4 mr-1" /> Categories
            </Link>
          </li>
          <li>
            <Link
              className="link flex items-center"
              href={PATHS.dashboard.profile}
            >
              <User className="w-4 h-4 mr-1" /> Profile
            </Link>
          </li>
        </ul>
      </div>
      <div className="w-full py-8">{children}</div>
    </div>
  );
}
