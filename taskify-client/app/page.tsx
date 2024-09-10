import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import Image from "next/image";
import { Copyright } from "lucide-react";

import { authOptions } from "./api/auth/[...nextauth]/route";
import { PATHS } from "@/lib/paths";
import appImage from "@/public/app-image.png";

const Wrapper = ({ children }: { children: React.ReactElement }) => {
  return <div className="w-[70%] mx-auto">{children}</div>;
};

export default async function Home() {
  const session = await getServerSession(authOptions);

  if (session?.user) {
    redirect(PATHS.dashboard.root);
  }

  return (
    <div>
      <div className="bg-gradient-to-r from-cyan-500 to-blue-500 relative">
        <div className="h-[60vh] flex justify-center">
          <div className="flex flex-col items-center space-y-4 mt-32">
            <h2 className="text-white text-7xl">Plan. Execute. Accomplish.</h2>
            <div className="text-2xl text-white">
              <p>Streamline Your Day, Stay Organized, and Achieve More.</p>
              <p>Your Personal Task Manager for Effortless Productivity!</p>
            </div>
          </div>
        </div>
        <div className="w-[50%] absolute -bottom-[35%] right-[25%] shadow-lg">
          <Image
            src={appImage}
            alt="An image of the taskify application"
            className="rounded-lg"
          />
        </div>
      </div>

      <div className="mt-64">
        <Wrapper>
          <div className="flex space-x-12">
            <div className="space-y-2">
              <p className="text-xl text-cyan-500 font-semibold">
                300k Users Worlwide
              </p>
              <p className="text-cyan-900">
                Join a thriving community of 300 thousand users across the
                globe.
              </p>
            </div>
            <div className="space-y-2">
              <p className="text-xl text-cyan-500 font-semibold">
                99% Task Completion Rate
              </p>
              <p className="text-cyan-900">
                Experience unparalleled efficiency with a 99% task completion
                rate.
              </p>
            </div>
            <div className="space-y-2">
              <p className="text-xl text-cyan-500 font-semibold">24/7 Uptime</p>
              <p className="text-cyan-900">
                Enjoy uninterrupted productivity with our 24/7 uptime.
              </p>
            </div>
            <div className="space-y-2">
              <p className="text-xl text-cyan-500 font-semibold">
                Top-rated User Satisfaction
              </p>
              <p className="text-cyan-900">
                Rated among the highest for user satisfaction and ease of use.
              </p>
            </div>
          </div>
        </Wrapper>
      </div>

      <div className="mt-12 bg-gray-50 py-8">
        <Wrapper>
          <>
            <div className="flex justify-evenly space-x-8">
              <div className="space-y-2">
                <p className="font-semibold">Company</p>
                <div className="space-y-1 text-sm text-cyan-950">
                  <p>About</p>
                  <p>Leadership</p>
                  <p>Blog</p>
                  <p>Careers</p>
                </div>
              </div>
              <div className="space-y-2">
                <p className="font-semibold">Products</p>
                <div className="space-y-1 text-sm text-cyan-950">
                  <p>Products Overview</p>
                  <p>Droplets</p>
                  <p>Kubernetes</p>
                  <p>Paperspace</p>
                  <p>App Platform</p>
                </div>
              </div>
              <div className="space-y-2">
                <p className="font-semibold">Community</p>
                <div className="space-y-1 text-sm text-cyan-950">
                  <p>Tutorials</p>
                  <p>Q&A</p>
                  <p>Write for Donations</p>
                  <p>Currents Research</p>
                </div>
              </div>
              <div className="space-y-2">
                <p className="font-semibold">Solutions</p>
                <div className="space-y-1 text-sm text-cyan-950">
                  <p>Website Hosting</p>
                  <p>Web & Mobile Apps</p>
                  <p>Streaming</p>
                  <p>Startup Resources</p>
                </div>
              </div>
              <div className="space-y-2">
                <p className="font-semibold">Contact</p>
                <div className="space-y-1 text-sm text-cyan-950">
                  <p>Support</p>
                  <p>Sales</p>
                </div>
              </div>
            </div>
            <div className="flex justify-center text-sm mt-8">
              <p className="flex items-center font-semibold">
                <Copyright className="w-4 h-4 mr-1" /> 2023 Taskify
              </p>
            </div>
          </>
        </Wrapper>
      </div>
    </div>
  );
}
