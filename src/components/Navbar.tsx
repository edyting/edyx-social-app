import React from 'react'
import MobileMenu from './MobileMenu';
import Link from 'next/link';

const Navbar = () => {
    return (
      <div className="flex items-center justify-between h-24">
        {/* // left */}
        <div className="">
          <Link href="/" className="font-bold text-2xl text-blue-600">
            <span>edyXcode</span>
          </Link>
        </div>
        {/* // middle */}
        <div className="hidden"></div>
        {/* // right */}
        <div className="">
          <MobileMenu />
        </div>
      </div>
    );
}

export default Navbar
