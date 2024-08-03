"use client";

import Image from "next/image";
import Logo from "@/public/assets/logo.png";
import navLinks from "@/utils/navLinks";
import Phone from "@/public/assets/phone.png";
import { useRouter } from "next/navigation";
import Link from "next/link";

const SideNav = () => {
  const router = useRouter();

  return (
    <nav>
      <div className=" bg-[#F7F7F7] rounded-[20px] w-[350px] h-[900px] ml-10 mt-5">
        <div className="flex gap-6 justify-start pt-8 pl-8">
          <div>
            <Image
              src={Logo}
              alt="Synergy Health Logo"
              width={60}
              height={60}
            />
          </div>
          <div className="mt-3.5">
            <h1 className="text-[#3572EF] text-[22px] font-medium">
              Synergy Health
            </h1>
          </div>
        </div>

        <div className="flex justify-center bg-[#353532] w-[340px] border mt-5" />
        <div className="text-[#3572EF] text-[18px] font-medium mt-12 ">
          {navLinks.map((link, index) => (
            <div
              key={index}
              className={`flex items-center pl-10 py-5 gap-6 w-full rounded-md transition-colors duration-300 ${
                router.pathname === link.path
                  ? "bg-[#DFE0E2] font-semibold"
                  : "hover:bg-[#DFE0E2]"
              }`}
            >
              <Image
                src={link.icon}
                alt={`${link.name} icon`}
                width={24}
                height={24}
              />
              <Link href={link.path}>
                <ul>
                  <li>{link.name}</li>
                </ul>
              </Link>
            </div>
          ))}
        </div>

        <div className="relative mt-[12.2rem] ml-16">
          <div className="w-[220px] h-[140px] bg-[#3572EF] rounded-[20px] text-white relative">
            <div className="absolute top-[-35px] left-1/2 transform -translate-x-1/2">
              <div className="bg-blue-500 border-[12px] border-white rounded-full w-[63px] h-[63px]" />
            </div>
            <div className="pt-[35px] px-4 text-center">
              <h2 className="text-[18px] font-medium leading-5">Help Center</h2>
              <p className="text-[12px] font-normal mt-1">Having trouble?</p>

              <div className="flex justify-center gap-2 mt-3">
                <Image src={Phone} alt="Phone" width={20} height={20} />
                <span className="text-[12px]">+234 902 928 2891</span>
              </div>

              <div className="flex justify-center gap-2 mt-1">
                <h1 className="text-[11px]">Email</h1>
                <span className="text-[11px]">synergyhealth@gmail.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default SideNav;
