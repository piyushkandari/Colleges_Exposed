import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import {FaUserAlt} from 'react-icons/fa';


import { useSession, signIn, signOut } from "next-auth/react"
import Image from 'next/image';




type Props = {
  userName: string;
}

const Navbar: React.FC<Props> = ({userName},props: Props) => {
  const [nav, setNav] = useState<boolean>(false);
  const [color, setColor] = useState<string>('transparent');
  const [textColor, setTextColor] = useState<string>('white');


  const {data: session } = useSession();


  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setColor('#1f2937');
        setTextColor('#ffffff');
      } else {
        setColor('transparent');
        setTextColor('#ffffff');
      }
    };
    window.addEventListener('scroll', changeColor);
    return () => window.removeEventListener('scroll', changeColor);
  }, []);

  return (
    <div
      style={{ backgroundColor: `${color}` }}
      className='fixed left-0 top-0 w-full z-30 ease-in duration-300'
    >
      <div className='max-w-[1240px] m-auto flex  justify-between items-center p-2 text-white'>
        <Link href='/'>
          <Image alt='logo' src={'/assets/images/logo2.png'} height={300} width={300} />
        </Link>
        <ul style={{ color: `${textColor}` }} className='hidden sm:flex'>
          <li className='p-4 hover:underline'>
            <Link className='' href='/'>Home</Link>
          </li>
          
          {/* <li className='p-4'>
            <Link href='#colleges'>Colleges</Link>
          </li> */}
          {/* <li>
                <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar" className="flex justify-between mt-4 mx-2 hover:underline">Dropdown<svg className="w-4 h-4 ml-1 mt-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></button>
                <div id="dropdownNavbar" className="hidden bg-white text-base z-10 list-none divide-y divide-gray-100 rounded shadow my-4 w-44">
                    <ul className="py-1" aria-labelledby="dropdownLargeButton">
                    <li>
                        <a href="#" className="text-sm hover:bg-gray-100 text-black block px-4 py-2 ">Dashboard</a>
                    </li>
                    <li>
                        <a href="#" className="text-sm hover:bg-gray-100 text-black block px-4 py-2 ">Settings</a>
                    </li>
                    <li>
                        <a href="#" className="text-sm hover:bg-gray-100 text-black block px-4 py-2 ">Earnings</a>
                    </li>
                    </ul>
                    <div className="py-1">
                    <a href="#" className="text-sm hover:bg-gray-100 text-black block px-4 py-2 ">Sign out</a>
                    </div>
                </div>
            </li> */}
          <li className='p-4 hover:underline'>
            <Link href='/about'>AboutUs</Link>
          </li>
          <li className='p-4 hover:underline'>
            <Link href='/contact'>ContactUs</Link>
          </li>
          <li className='p-4 hover:underline'>
            <Link className= "flex justify-between" href='/login'><FaUserAlt className="mr-2 mt-1"/>{userName}</Link>
          </li>
          {/* <li className='p-3'>
            <div className="relative mx-auto text-gray-600">
            <input className="bg-white h-8 px-2 w-20 pr-10 rounded-full text-sm focus:outline-none"
              type="search" name="search" placeholder="Search" />
            <button type="submit" className="absolute right-0 top-0 mt-2 mr-4">
              <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M9 16a7 7 0 100-14 7 7 0 000 14zM18.707 18.707a1 1 0 01-1.414 0l-4.427-4.427a7 7 0 111.414-1.414l4.427 4.427a1 1 0 010 1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
          </li> */}
        </ul>

        {/* Mobile Button */}
        <div onClick={handleNav} className='block sm:hidden z-10'>
          {nav ? (
            <AiOutlineClose size={20} style={{ color: `${textColor}` }} />
          ) : (
            <AiOutlineMenu size={20} style={{ color: `${textColor}` }} />
          )}
        </div>
        {/* Mobile Menu */}
        <div
          className={
            nav
              ? 'sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-gray-900 text-center ease-in duration-300'
              : 'sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-gray-900 text-center ease-in duration-300'
          }
        >
          <ul>
            <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-500'>
              <Link href='/'>Home</Link>
            </li>
            <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-500'>
              <Link href='/login'>{userName}</Link>
            </li>
            <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-500'>
              <Link href='/about'>AboutUs</Link>
            </li>
            {/* <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-500'>
              <Link href='/about'>Work</Link>
            </li> */}
            <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-500'>
              <Link href='/contact'>ContactUs</Link>
            </li>
          </ul>
        </div>
      </div>
          <script src="https://unpkg.com/@themesberg/flowbite@1.1.1/dist/flowbite.bundle.js"></script>

    </div>
  );
};

export default Navbar;
