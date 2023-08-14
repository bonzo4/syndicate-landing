import Link from "next/link";
import Image from "next/image";
import logo from "@/public/logo.png";
import React from "react";

export function Header() {

  return (
    <header className="flex flex-row items-center justify-between w-full h-24 absolute px-20 py-10 text-black z-10">
      <Link href="/" className="mt-10 -ml-16"><Image src={logo} alt='logo' width={386} height={128} /></Link>
      <div className="hidden lg:flex flex-row items-center space-x-8 text-[18px]">
        <a href="/#premium" className="cursor-pointer hover:underline">
          Premium
        </a>
        <a href="https://discord.com/oauth2/authorize?client_id=1053779815418843166&permissions=268921873&redirect_uri=https%3A%2F%2Fwww.discord.gg%2F2sXPeCTzp6&response_type=code&scope=applications.commands%20bot" target="_blank" rel="noreferrer" className="cursor-pointer hover:underline">
          Newsletter
        </a>
        <a href="https://99ogm8xhhm2.typeform.com/to/Gyeg3lnX" target="_blank" rel="noreferrer" className="cursor-pointer hover:underline">
          Sponsor
        </a>
        <p className="opacity-50">
          TV & Video
        </p>
      </div>
    </header>
  );
}