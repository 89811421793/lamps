import React from 'react';
import Link from 'next/link';
interface MenuProps {
  menuItems: Array<{ name: string; href: string }>;
}
const Menu: React.FC<MenuProps> = ({ menuItems }) => {
  return (
    <nav className="text-white">
      <ul className="flex space-x-4">
        {menuItems.map((item, index) => (
          <li key={index}>
            <Link href={item.href} className="hover:underline">
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
export default Menu;
