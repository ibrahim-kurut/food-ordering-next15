"use client";
import Link from "../custom_link";
import { Pages, Routes } from "@/constants/enums";
import { buttonVariants } from "../ui/button";
import { useState } from "react";
import { IoMenu, IoClose } from "react-icons/io5";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const links = [
    {
      id: crypto.randomUUID(),
      title: "menu",
      url: Routes.MENU,
    },
    {
      id: crypto.randomUUID(),
      title: "about",
      url: Routes.ABOUT,
    },
    {
      id: crypto.randomUUID(),
      title: "contact",
      url: Routes.CONTACT,
    },
    {
      id: crypto.randomUUID(),
      title: "login",
      url: `${Routes.AUTH}/${Pages.LOGIN}`,
    },
  ];
  return (
    <nav className="flex flex-1 justify-end">
      {/* burger icon open menu*/}
      <div
        className="lg:hidden bg-gray-200 p-1 rounded-sm"
        onClick={() => setOpenMenu(true)}
      >
        <IoMenu size={25} />
      </div>

      <ul
        className={`fixed lg:static ${
          openMenu ? "left-0 z-50" : "-left-full"
        } top-0 px-10 py-20 lg:p-0 bg-background lg:bg-transparent transition-all duration-200 h-full lg:h-auto flex-col lg:flex-row w-full lg:w-auto flex items-start lg:items-center gap-10`}
      >
        {/* X icon close menu*/}

        <div
          className="bg-gray-200 p-1 rounded-sm absolute top-10 right-10 lg:hidden"
          onClick={() => setOpenMenu(false)}
        >
          <IoClose size={25} />
        </div>

        {links.map((link) => {
          return (
            <li key={link.id}>
              <Link
                href={`/${link.url}`}
                onClick={() => setOpenMenu(false)}
                className={`${
                  link.url === `${Routes.AUTH}/${Pages.LOGIN}`
                    ? `${buttonVariants({
                        variant: "destructive",
                      })} !rounded-full`
                    : "text-accent hover:text-primary duration-200 transition-colors "
                } font-semibold capitalize `}
              >
                {link.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
