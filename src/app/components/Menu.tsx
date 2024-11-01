import React from 'react';

interface MenuProps {
  menuItems: Array<string>;
}

const Menu: React.FC<MenuProps> = ({ menuItems }) => {
  return (
    <nav className="text-white">
      <ul className="flex space-x-4">
        {menuItems.map((item, index) => (
          <li key={index}>
            <a href={`#${item}`} className="hover:underline">
              {item}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Menu;