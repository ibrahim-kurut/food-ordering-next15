import MenuItem from "./MenuItem";

interface MenuItemType {
  id: string;
  name: string;
  image: string;
  basePrice: number;
  description: string;
}

const Menu = ({ items }: { items: MenuItemType[] }) => {
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-3 gap-3">
      {items.map((item) => (
        <MenuItem key={item.id} item={item} />
      ))}
    </ul>
  );
};

export default Menu;
