'use client';

import Logo from "./Logo";
import UserMenu from "./UserMenu";
import { NavButton } from "./NavButton";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();

  return (
    <div className="w-full z-10">
      <div className="py-5 px-12">
        <div className="
          flex
          flex-row
          items-centered
          justify-between
          gap-3
           md:gap-0
        ">
          <div className="
            flex
            flex-row
            items-centered
            justify-around
            gap-3
            md:gap-8
          ">
            <Logo />
            <NavButton label="Horse Racing" onClick={() => router.push('/horseracing')} />
            <NavButton label="Poker" />
            <NavButton label="BlackJack" />
          </div>
          <UserMenu />
        </div>
      </div>
    </div>
  );
};

export default Navbar;