import { Container } from "../Container";
import Logo from "./Logo";
import Search from "./Search";
import UserMenu from "./UserMenu";
import { NavButton } from "./NavButton";

const Navbar = () => {
  return (
    <div className="w-full bg-white z-10">
      <div
        className="
                    py-5
                    px-12
                "
      >
        <div
          className="
                    flex
                    flex-row
                    items-centered
                    justify-between
                    gap-3
                    md:gap-0
                "
        >
          <div
            className="
              flex
              flex-row
              items-centered
              justify-around
              gap-3
              md:gap-8
          ">
            <Logo />
            <NavButton label="Horse Racing" />
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
