"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";

const Navbar = () => {
  const { data: session } = useSession();
  const [providers, setProviders] = useState(null);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    const setupProviders = async () => {
      const response = await getProviders();

      setProviders(response);
    };
    setupProviders();
  }, []);

  return (
    <nav className="pt-3 w-full mb-16 flex-between">
      <Link className="flex gap-2 flex-center" href="/">
        <Image
          className="object-contain"
          src="/assets/images/logo.svg"
          width={30}
          height={30}
          alt="logo"
        />

        <p className="logo_text">Incite Prompts</p>
      </Link>

      {/* desktop navbar */}
      <div className="sm:flex hidden">
        {session?.user ? (
          <div className="flex gap-3 md:gap-5">
            <Link href="/create-prompt" className="black_btn">
              Create Post
            </Link>

            <button type="button" className="outline_btn" onClick={signOut}>
              Sign Out
            </button>

            <Link href="/profile">
              <Image
                src={session?.user.image}
                className="rounded-full"
                width={37}
                height={37}
                alt="profile"
              />
            </Link>
          </div>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider) => (
                <button
                  type="button"
                  key={provider.name}
                  onClick={() => signIn(provider.id)}
                  className="black_btn"
                >
                  Sign In
                </button>
              ))}
          </>
        )}
      </div>

      {/* Mobile navbar */}
      <div className="sm:hidden flex relative">
        {session?.user ? (
          <div className="flex">
            <Image
              src={session?.user.image}
              className="rounded-full"
              width={37}
              height={37}
              alt="profile"
              onClick={() => {
                setToggle((prev) => !prev);
              }}
            />

            {toggle && (
              <div className="dropdown">
                <Link
                  className="dropdown_link"
                  href="/profile"
                  onClick={() => setToggle(false)}
                >
                  My profile
                </Link>

                <Link
                  className="dropdown_link"
                  href="/create-prompt"
                  onClick={() => setToggle(false)}
                >
                  Create Prompt
                </Link>

                <button
                  type="button"
                  className="mt-5 w-full black_btn"
                  onClick={() => {
                    setToggle(false);
                    signOut();
                  }}
                >
                  Sign Out
                </button>
              </div>
            )}
          </div>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider) => (
                <button
                  type="button"
                  key={provider.name}
                  onClick={() => signIn(provider.id)}
                  className="black_btn"
                >
                  Sign In
                </button>
              ))}
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
