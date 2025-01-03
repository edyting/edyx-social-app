import React from 'react'
import MobileMenu from './MobileMenu';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
    return (
      <div className="flex items-center justify-between h-24">
        {/* // left */}
        <div className="md:hidden lg:block w-[20%]">
          <Link href="/" className="font-bold text-2xl text-blue-600">
            <span>edyXcode</span>
          </Link>
        </div>
        {/* // middle */}
        <div className="hidden md:flex text-sm w-[50%]">
          {/* links */}
          <div className="flex gap-6 text-gray-600">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/home.png"
                alt="home"
                width={16}
                height={16}
                className="w-4 h-4"
              />
              <span>HomePage</span>
            </Link>
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/friends.png"
                alt="home"
                width={16}
                height={16}
                className="w-4 h-4"
              />
              <span>Friends</span>
            </Link>
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/stories.png"
                alt="home"
                width={16}
                height={16}
                className="w-4 h-4"
              />
              <span>Stories</span>
            </Link>
          </div>
        </div>
        {/* // right */}
        <div className="w-[30%] flex items-center justify-end gap-4 xl:gap-8">
          <MobileMenu />
        </div>
      </div>
    );
}

export default Navbar
