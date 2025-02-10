import { Routes } from "@/constants/enums";
import Link from "../custom_link";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <header className="shadow-md py-4 md:py-6">
      <div className="container flex justify-between items-center">
        <Link
          href={Routes.ROOT}
          className="text-primary font-semibold text-2xl capitalize"
        >
          pizza
        </Link>
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
