import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";

import welcomeImage from "@/public/welcome.svg";
import RegisterForm from "@/components/register/register-form";
import { PATHS } from "@/lib/paths";
import { authOptions } from "../api/auth/[...nextauth]/route";

export default async function RegisterPage() {
  const session = await getServerSession(authOptions);

  if (session?.user) {
    redirect(PATHS.dashboard.root);
  }

  return (
    <div className="h-[calc(100vh-70px)] bg-gradient-to-r from-cyan-500 to-blue-500">
      <div className="flex">
        <div className="flex-1 h-[calc(100vh-70px)] flex flex-col justify-center items-center">
          <div className="bg-white w-[70%] mx-auto rounded-md shadow-lg p-6 space-y-4">
            <h2 className="font-semibold text-lg">
              Register a new taskify user
            </h2>
            <RegisterForm />
            <p className="text-sm text-center">
              Already have an account?{" "}
              <Link href={PATHS.login} className="link underline font-semibold">
                Login
              </Link>{" "}
              instead.
            </p>
          </div>
        </div>
        <div className="flex-1 h-[calc(100vh-70px)] flex flex-col justify-center items-center">
          <Image
            src={welcomeImage}
            alt="A man and a woman logging their tasks on a white board"
          />
        </div>
      </div>
    </div>
  );
}
