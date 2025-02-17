import { formatCurrency } from "@/lib/formatters";
import Image from "next/image";
import AddToCardBtn from "./AddToCardBtn";

interface MenuItemType {
  id: string;
  name: string;
  image: string;
  basePrice: number;
  description: string;
}

const MenuItem = ({ item }: { item: MenuItemType }) => {
  return (
    <li className="bg-gray-100 p-5 rounded-lg hover:bg-transparent hover:shadow-xl ">
      <div className="relative w-48 h-48 mx-auto ">
        <Image
          src={item.image}
          alt={item.name}
          className="object-cover rounded-full"
          fill
        />
      </div>
      <div className="flex items-center justify-between my-3">
        <h4 className="text-xl font-semibold">{item.name}</h4>
        <strong className="text-accent">
          {formatCurrency(item.basePrice)}
        </strong>
      </div>
      <p className="text-gray-500 text-sm line-clamp-3">{item.description}</p>
      {/* add to card btn */}
      <div className="text-center">
        <AddToCardBtn item={item} />
      </div>
    </li>
  );
};

export default MenuItem;
