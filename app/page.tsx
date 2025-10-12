import Link from "next/link";
import { Button } from "./components/ui/button";
import { ModeToggle } from "./components/ui/ModeToggle";

const Home = async () => {
  return (
    <>
      <header
        className="width shadow-md rounded-xl p-5 my-5
          flex flex-row justify-between lg:justify-around
          items-center dark:shadow-emerald-50"
      >
        <h1 className="text-5xl italic">
          <Link href={"/"}>
            Blog<span className="text-emerald-600 font-bold">Life</span>
          </Link>
        </h1>

        <div className="flex flex-row justify-evenly w-xl items-center">
          <Button variant={"link"} className="button">
            Sign In
          </Button>

          <Button variant={"link"} className="button">
            Sign In
          </Button>

          <Button variant={"link"} className="button">
            Sign In
          </Button>
        </div>
        <ModeToggle />
      </header>
    </>
  );
};

export default Home;
