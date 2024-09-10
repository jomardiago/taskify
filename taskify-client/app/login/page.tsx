import Link from "next/link";
import Image from "next/image";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

import LoginForm from "@/components/login/login-form";
import { PATHS } from "@/lib/paths";
import welcomeImage from "@/public/welcome.svg";
import { authOptions } from "../api/auth/[...nextauth]/route";

export default async function LoginPage() {
  const session = await getServerSession(authOptions);

  if (session?.user) {
    redirect(PATHS.dashboard.root);
  }

  return (
    <div className="h-[calc(100vh-70px)] bg-gradient-to-r from-cyan-500 to-blue-500">
      <div className="flex">
        <div className="flex-1 h-[calc(100vh-70px)] flex flex-col justify-center items-center">
          <div className="bg-white w-[70%] mx-auto rounded-md shadow-lg p-6 space-y-4">
            <h2 className="font-semibold text-lg">Login with your taskify user</h2>
            <LoginForm />
            <p className="text-sm text-center">
              Need a new account?{" "}
              <Link href={PATHS.register} className="link underline font-semibold">
                Register
              </Link>{" "}
              instead.
            </p>
          </div>
        </div>
        <div className="flex-1 h-[calc(100vh-70px)] flex flex-col justify-center items-center">
          <Image src={welcomeImage} alt="A man and a woman logging their tasks on a white board" />
        </div>
      </div>
    </div>
  );
}
