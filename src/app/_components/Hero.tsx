import Link from "@/components/custom_link";
import { buttonVariants } from "@/components/ui/button";
import { Routes } from "@/constants/enums";
import Image from "next/image";
import React from "react";
import { IoArrowForwardCircleOutline } from "react-icons/io5";

const Hero = () => {
  return (
    <section className="section-gap">
      <div className="container grid grid-cols-1 md:grid-cols-2">
        <div className="md:py-12">
          <h1 className="text-4xl font-semibold">A Slice of happiness</h1>
          <p className="text-accent my-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error iste
            earum, ducimus odit laborum modi ratione recusandae placeat alias
            eos?
          </p>
          {/* hero btns */}
          <div className="flex items-center gap-4">
            <Link
              href={`/${Routes.MENU}`}
              className={`${buttonVariants({
                size: "lg",
              })} space-x-2 !px-4 !rounded-full uppercase`}
            >
              order now <IoArrowForwardCircleOutline />
            </Link>
            <Link
              href={`/${Routes.ABOUT}`}
              className="flex gap-2 items-center text-black hover:text-primary duration-200 transition-colors font-serif"
            >
              <span>learn more</span> <IoArrowForwardCircleOutline />
            </Link>
          </div>
        </div>
        <div className="relative hidden md:block">
          <Image
            src="/assets/imgs/pizza.png"
            alt="pizza"
            fill
            loading="eager"
            priority
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
