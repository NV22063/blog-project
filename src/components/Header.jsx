import React, { useState, useSyncExternalStore } from 'react'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { images } from '../constants'
import { unstable_renderSubtreeIntoContainer } from 'react-dom';


const NavItemInfo = [
  {name: "Home", type: "link" },
  {name: "Articles", type: "link" },
  {name: "Pages", type: "dropdown", items: ["About us", "Contact us"] },
  {name: "Pricing", type: "link" },
  {name: "FAQ", type: "link" },
]

const NavItem = ({ item }) => {
const [dropdown, setDropdown] = useState(false);

const toggleDropdownHandler = () => {
  setDropdown((curState) => {
    return !curState;
  });
};

  return (
    <li className="relative group">
      {item.type === "link" ? (
        <>
          <a href="/" className="px-4 py-2">
            {item.name}
          </a>
          <span className="cursor-pointer text-blue-500 absolute transition-all duration-500 font-bold right-0 top-0 group-hover:right-[90%] opacity-0 group-hover:opacity-100">/</span>
        </>
      ) : (
        <div className='flex flex-col items-center'>
        <button className="px-4 py-2 flex gap-x-1 items-center"><span>{item.name}</span>
        <MdKeyboardArrowDown />
        </button>
        <div className='lg:hidden transition-all duration-500 pt-4 lg:absolute bottom-0 right-0 transform translate-y-full group-hover:block w-max'>
          <ul className='flex flex-col shadow-lg rounded-lg overflow-hidden'>
            {item.items.map((page) => (
              <a href="/" className='hover:bg-dark-hard hover:text-white px-4 py-2 text-white lg:text-dark-soft'
              >
               {page}
              </a>
            ))}
          </ul>
        </div>
        </div>
      )}
    </li>
  );
};


const Header = () => {
  const [NavIsVisible, setNavIsVisible] = useState(false);

const NavVisibilityHandler = () => {
  setNavIsVisible((curState) => {
    return !curState;
  });
};

  return (
    <section>
        <header className="container mx-auto px-5 flex justify-between py-4 items-center">
            <div>
              <img className="w-16" src={images.Logo} alt="logo" />
            </div>
            <div className='lg:hidden z-50'>{NavIsVisible ? <AiOutlineClose className='w-6 h-6' onClick={NavVisibilityHandler} /> : <AiOutlineMenu className='w-6 h-6' onClick={NavVisibilityHandler} />}</div>
            <div className={`${NavIsVisible ? "right-0" : "-right-full"} transition-all duratio-300 mt-[56px] lg:mt-0 bg-dark-hard lg:bg-transparent z-[49] flex  flex-col w-full lg:w-auto justify-center lg:justify-end lg:flex-row fixed top-0 bottom-0 lg:static  gap-x-9 items-center`}>
             <ul className="text-white items-center gap-y-5 lg:text-dark-soft flex flex-col lg:flex-row gap-x-2 font-semibold">
               {NavItemInfo.map((item) => (
                <NavItem Key={item.name} item={item}/>
               ))}
             </ul>
             <button className="mt-5 lg:mt-0 border-2 border-blue-500 px-6 py-2 rounded-full text-blue-500 font-semibold hover:bg-blue-500 hover:text-white transation-all duration-300">Sign in</button>
            </div>
        </header>
    </section>
  )
}

export default Header