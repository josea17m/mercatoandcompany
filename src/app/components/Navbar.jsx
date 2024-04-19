"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [path, setPath] = useState("");
  useEffect(() => {
    setPath(window.location.pathname);
  }, [path]);

  return (
    <nav className="flex justify-between items-center px-5 h-[10dvh] bg-black text-white shadow-xl">
      <Link href="/">
        <img
          src="/mercatoandcompany-logo.svg"
          alt="logo"
          className="w-auto h-auto"
        />
      </Link>
      
      <div className=" gap-10 hidden md:flex">
        <Link
          className={`hover:text-[#B4DCC8] duration-200 rounded-2xl p-1 px-2 hover:scale-110 text-xl ${
            path === "/shop" ? "text-[#B4DCC8] scale-110" : ""
          }`}
          href="/shop"
        >
          Shop
        </Link>
        <Link
          className={`hover:text-[#B4DCC8] duration-200 rounded-2xl p-1 px-2 hover:scale-110 text-xl ${
            path === "/about-us" ? "text-[#B4DCC8] scale-110" : ""
          }`}
          href="/about-us"
        >
          About us
        </Link>
        <Link
          className={`hover:text-[#B4DCC8] duration-200 rounded-2xl p-1 px-2 hover:scale-110 text-xl ${
            path === "/our-stores" ? "text-[#B4DCC8] scale-110" : ""
          }`}
          href="/our-stores"
        >
          Our Store
        </Link>
        <Link
          className={`hover:text-[#B4DCC8] duration-200 rounded-2xl p-1 px-2 hover:scale-110 text-xl ${
            path === "/contact-us" ? "text-[#B4DCC8] scale-110" : ""
          }`}
          href="/contact-us"
        >
          Contact Us
        </Link>
      </div>
    </nav>
  );
}
