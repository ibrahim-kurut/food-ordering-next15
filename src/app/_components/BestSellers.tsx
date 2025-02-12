import MainHeading from "@/components/main-heading";
import Menu from "@/components/menu";

import React from "react";

const BestSellers = () => {
  const items = [
    {
      id: crypto.randomUUID(),
      name: "pizza",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit, mollitia.",
      basePrice: 10.99,
      image: "/assets/imgs/pizza.png",
    },
    {
      id: crypto.randomUUID(),
      name: "burger",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit, mollitia.",
      basePrice: 9.99,
      image: "/assets/imgs/pizza.png",
    },
    {
      id: crypto.randomUUID(),
      name: "fries",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit, mollitia.",
      basePrice: 4.99,
      image: "/assets/imgs/pizza.png",
    },
  ];
  return (
    <section className="container">
      <div className="text-center mb-4">
        <MainHeading title="our best sellers" subTitle="check out" />
      </div>
      <Menu items={items} />
    </section>
  );
};

export default BestSellers;
