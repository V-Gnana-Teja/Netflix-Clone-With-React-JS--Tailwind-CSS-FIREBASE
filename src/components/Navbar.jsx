import React from 'react';

const Navbar = () => {
  return (
    <div className='flex items-center justify-between p-4 z-[100] w-full fixed top-0 bg-black'>
      <h1 className='text-red-600 text-4xl font-bold cursor-pointer '>NETFLIX</h1>
      <ul className='text-white flex items-center '>
        <li className="mr-4">HOME</li>
        <li className="mr-4">TV-SHOWS</li>
        <li className="mr-4">MOVIES</li>
        <li className="mr-4">NEW</li>
        <li className="mr-0">POPULAR</li> 
      </ul>
      <input
        type="text"
        placeholder="Search"
        className="border-2 border-white-100 bg-black rounded-full text-white px-2 py-1 h-7 w-80"
      />
    </div>
  );
};

export default Navbar;
