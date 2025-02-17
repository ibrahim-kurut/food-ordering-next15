"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";

interface MenuItemType {
  id: string;
  name: string;
  image: string;
  basePrice: number;
  description: string;
}
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { formatCurrency } from "@/lib/formatters";

const sizes = [
  {
    id: crypto.randomUUID(),
    name: "small",
    price: 0,
  },
  {
    id: crypto.randomUUID(),
    name: "medium",
    price: 4,
  },
  {
    id: crypto.randomUUID(),
    name: "large",
    price: 8,
  },
];
const extras = [
  {
    id: crypto.randomUUID(),
    name: "totmato",
    price: 2,
  },
  {
    id: crypto.randomUUID(),
    name: "onion",
    price: 4,
  },
  {
    id: crypto.randomUUID(),
    name: "cheese",
    price: 6,
  },
];
const AddToCardBtn = ({ item }: { item: MenuItemType }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          type="button"
          size="lg"
          className="mt-4 text-white rounded-full !px-8"
        >
          <span>Add to Card</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="  sm:max-w-[425px] max-h-[80vh] overflow-y-auto">
        <DialogHeader className="flex flex-col items-center justify-center">
          <Image
            src={item.image}
            alt={item.name}
            width={200}
            height={200}
            className="rounded-full"
          />
          <DialogTitle>{item.name}</DialogTitle>
          <DialogDescription className="text-center">
            {item.description}
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-10">
          <div className="space-y-4 text-center">
            <Label className="capitalize text-lg">pick your size</Label>
            <PickSize sizes={sizes} item={item} />
          </div>
          <div className="space-y-4 text-center">
            <Label className="capitalize text-lg">any extra ?</Label>
            <Extras extras={extras} />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit" className="w-full capitalize">
            add to cart
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default AddToCardBtn;

// PickSize component
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function PickSize({ sizes, item }: { sizes: any; item: any }) {
  return (
    <RadioGroup defaultValue="comfortable">
      {sizes.map((size) => (
        <div
          key={size.id}
          className="flex items-center space-x-2 border border-gray-200 rounded-md py-4 px-2"
        >
          <RadioGroupItem value={size.name} id={size.id} />
          <Label htmlFor={size.id} className="capitalize cursor-pointer">
            {size.name} {formatCurrency(size.price + item.basePrice)}
          </Label>
        </div>
      ))}
    </RadioGroup>
  );
}

// extras copmponent

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function Extras({ extras }: { extras: any }) {
  return (
    <div>
      {extras.map((extra) => (
        <div
          key={extra.id}
          className="flex items-center space-x-2 border border-gray-200 rounded-md py-4 px-2 my-2"
        >
          <Checkbox id={extra.id} />
          <Label
            htmlFor={extra.id}
            className="text-sm font-medium cursor-pointer uppercase"
          >
            {extra.name} {formatCurrency(extra.price)}
          </Label>
        </div>
      ))}
    </div>
  );
}
