"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import {
  InstagramLogo,
  List,
  TiktokLogo,
  TwitterLogo,
  YoutubeLogo,
} from "@phosphor-icons/react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white bg-opacity-80">
      <div className="flex items-center justify-between px-11 py-4">
        <div className="flex items-center">
          <Link href="/">
            <Image
              src="/assets/osmigc.svg"
              alt="logo"
              className="w-24 h-auto"
              width={96}
              height={40}
            />
          </Link>
        </div>

        <button
          className="text-black lg:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <List size={32} />
        </button>

        <div
          className={`${
            isOpen ? "flex" : "hidden"
          } flex-col lg:flex lg:flex-row items-center gap-6 lg:gap-4 text-black absolute lg:relative top-14 lg:top-0 left-0 w-full lg:w-auto bg-white lg:bg-transparent lg:backdrop-blur-md lg:border-2 border-black px-4 py-2 rounded-md text-md`}
        >
          <Link href="/" className="hover:underline">
            Home
          </Link>
          <Link href="/blog" className="hover:underline">
            Blog
          </Link>
          <Link href="/gallery" className="hover:underline">
            Gallery
          </Link>
          <Link href="/about" className="hover:underline">
            About
          </Link>
        </div>

        <div className="hidden lg:flex items-center gap-3 text-black">
          <Link href="#">
            <InstagramLogo size={22} />
          </Link>
          <Link href="#">
            <TwitterLogo size={22} />
          </Link>
          <Link href="#">
            <TiktokLogo size={22} />
          </Link>
          <Link href="#">
            <YoutubeLogo size={22} />
          </Link>
        </div>
      </div>

      {isOpen && (
        <div className="flex lg:hidden items-center justify-center gap-3 mt-4 text-black">
          <Link href="#">
            <InstagramLogo size={22} />
          </Link>
          <Link href="#">
            <TwitterLogo size={22} />
          </Link>
          <Link href="#">
            <TiktokLogo size={22} />
          </Link>
          <Link href="#">
            <YoutubeLogo size={22} />
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
