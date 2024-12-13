import React from 'react';

const Navbar = () => {
  return (
    <nav className="flex justify-between p-4 bg-gray-800 text-white">
      <div className="font-bold">Stonepedia</div>
      <ul className="flex space-x-4">
        <li><a href="#about">About</a></li>
        <li><a href="#products">Products</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
