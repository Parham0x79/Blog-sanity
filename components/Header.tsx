import { ModeToggle } from "../components/ui/ModeToggle";
import Link from "next/link";
import { Button } from "../components/ui/button";
import icon from "../public/icon.png";
import Image from "next/image";

const Header = () => {
  return (
    <header
      className="width shadow-md rounded-xl flex flex-row justify-between
        lg:justify-around items-center dark:shadow-emerald-50"
    >
      <h1 className="text-5xl italic">
        <Image src={icon} className="icon" alt="" aria-hidden="true" />
        <Link href={"/"}>
          Blog<span className="text-emerald-600 font-bold">Life</span>
        </Link>
      </h1>

      <div className="flex flex-row justify-evenly w-xl items-center">
        <Button variant={"link"} className="button">
          <Link href={"/sign-in"}>Sign In</Link>
        </Button>

        <Button variant={"link"} className="button">
          <Link href={"/sign-in"}>Sign In</Link>
        </Button>

        <Button variant={"link"} className="button">
          <Link href={"/sign-in"}>Sign In</Link>
        </Button>
      </div>

      <ModeToggle />
    </header>
  );
};

export default Header;
