// components/NavBar.js

import Link from 'next/link';
// import { signIn, signOut, useSession } from 'next-auth/react';

const NavBar = () => {
  // const { data: session } = useSession();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-10 bg-white shadow-lg md:relative md:bottom-auto md:top-0">
      <div className="flex justify-around items-center p-4">
        {/* SignIn/Out Link */}
        {/* {session ? (
          <button onClick={() => signOut()} className="text-blue-500">Sign Out</button>
        ) : (
          <button onClick={() => signIn()} className="text-blue-500">Sign In</button>
        )} */}

        {/* Navigation Links */}
        <Link href="/tricks" className="text-gray-700">
          All Tricks
        </Link>

        <Link href="/profile " className="text-gray-700">
          My Profile
        </Link>

        <Link href="/settings" className="text-gray-700">
          Settings
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
