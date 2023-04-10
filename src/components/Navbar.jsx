import React, { useContext, useEffect, useState } from 'react';
import "boxicons/css/boxicons.min.css";
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';


const Navbar = () => {
  const [NavScrolling, setNavScrolling] = useState(false);
  const wishlist = useSelector((state)=>state.wishlist)
 console.log(wishlist)
useEffect(() => {
  const handleScroll = () => {
    if (window.scrollY > 0) {
      setNavScrolling(true)
    } else {
      setNavScrolling(false)
    }
  };
  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, []);

  return (
    <div className={`fixed top-0 duration-700 bg-black right-0 w-full z-50 py-4 ${
      NavScrolling ? '-translate-y-full opacity-0' : 'translate-y-0 opacity-100'
    }`}>
    
      <div className='flex item-center justify-evenly'>
      <div>
        <NavLink to="/">
          <h1 className='font-bold text-white'>Quatify</h1>
        </NavLink>
      </div>
      <div >
        <NavLink to="/Wishlist">
          <i className='bx relative text-[20px] text-white bxs-bookmark'>
            <div className={`absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full duration-700 opacity-${wishlist.length > 0 ? '100' : '0'}`}></div>

          </i>
        </NavLink>
      </div>
      </div>
    </div>
  );
}

export default Navbar;
