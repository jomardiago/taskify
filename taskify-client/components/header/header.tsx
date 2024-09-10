import Link from "next/link";
import { getServerSession } from "next-auth";

import { PATHS } from "@/lib/paths";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export default async function Header() {
  const session = await getServerSession(authOptions);

  return (
    <div className="flex justify-between items-center h-[70px] px-12 shadow-md">
      <Link href={PATHS.root}>
        <h1 className="text-2xl font-semibold text-cyan-500">taskify</h1>
      </Link>
      <div className="space-x-4">
        {session?.user ? (
          <Link href={PATHS.logout} className="link">
            Logout
          </Link>
        ) : (
          <>
            <Link href={PATHS.register} className="link">
              Register
            </Link>
            <Link href={PATHS.login} className="link">
              Login
            </Link>
          </>
        )}
      </div>
    </div>
  );
}
