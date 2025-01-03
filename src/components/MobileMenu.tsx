"use client";
import Link from 'next/link';
import React, { useState } from 'react'

const MobileMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      {/* humburger-icon */}
      <div
        className="flex md:hidden flex-col gap-[4.5px] cursor-pointer"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <div
          className={`w-6 bg-blue-500 rounded-sm h-1 ${
            isOpen ? "rotate-45 origin-left ease-in-out duration-500" : ""
          } `}
        ></div>
        <div
          className={`w-6 bg-blue-500 rounded-sm h-1 ${
            isOpen ? "opacity-0" : ""
          }  ease-in-out duration-500`}
        ></div>
        <div
          className={`w-6 bg-blue-500 rounded-sm h-1 ${
            isOpen ? "-rotate-45" : ""
          } origin-left ease-in-out duration-500`}
        ></div>
      </div>
      {/* mobile menu */}
      {isOpen && (
        <div className="absolute top-24 right-0 bg-blue-100 w-full h-[calc(100dvh-96px)] p-4 shadow-lg flex flex-col items-center justify-center gap-8 font-medium text-xl z-10">
          <Link href="/"> Home</Link>
          <Link href="/"> Friends</Link>
          <Link href="/"> Groups</Link>
          <Link href="/"> Stories</Link>
          <Link href="/"> Login</Link>
        </div>
      )}
    </div>
  );
}

export default MobileMenu
