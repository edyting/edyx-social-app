import React from 'react'
import MobileMenu from './MobileMenu';
import Link from 'next/link';
import Image from 'next/image';
import { ClerkLoaded, ClerkLoading, SignedOut, SignedIn, UserButton } from "@clerk/nextjs";

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
          {/* check if authentication is loading */}
          <ClerkLoading>
            {/* spinner from tw-elements.com */}
            <div
              className="inline-block bg-blue-600 h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white"
              role="status"
            >
              <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                Loading...
              </span>
            </div>
          </ClerkLoading>
          {/* check if loading is completed */}
          <ClerkLoaded>
            <SignedIn>
              <div className="cursor-pointer">
                <Image
                  src="/people.png"
                  alt="people"
                  width={20}
                  height={20}
                />
              </div>
              <div className="cursor-pointer">
                <Image
                  src="/messages.png"
                  alt="messages"
                  width={20}
                  height={20}
                />
              </div>
              <div className="cursor-pointer">
                <Image
                  src="/notifications.png"
                  alt="notifications"
                  width={20}
                  height={20}
                />
                        </div>
                <UserButton/>
            </SignedIn>
                    <SignedOut>
                        <div className="flex items-center gap-2 cursor-pointer text-sm">
                            <Image src="/login.png" alt="login" width={20} height={20} />
                            <Link href='/sign-in'>Login/Register</Link>
                        </div>
                    </SignedOut>
          </ClerkLoaded>
          <MobileMenu />
        </div>
      </div>
    );
}

export default Navbar
