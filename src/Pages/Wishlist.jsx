import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Wishlist = () => {
  const wishlist = useSelector((state) => state.wishlist);
  const dispatch = useDispatch()

  return (
    <div className='mt-16 px-12 py-4'>
        <div className="-z-100  absolute bg-blue-500 rounded-full translate-x-10 translate-y-10 opacity-5 mix-blend-multiply w-80 h-80 filter blur-xl"></div>

      {/* render your wishlist items here */}
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 gap-4">
      {wishlist.map((items)=>{
        return(
          <div className='p-4  duration-700 flex justify-between border rounded-md' key={items.id}>
            <div>
            <i class='bx bxs-quote-left'></i>
            <p className='font-bold text-lg'>{items.author}</p>
            <p className='font-light text-[13px]'>{items.quote}</p>
            </div>
            <div>
              <i 
              onClick={(id)=>{
                dispatch({type:'removeFromWishlist',payload:items.id})
              }}
              className='bx bx-x'></i>
            </div>
          </div>
        )
      })}
      </div>
    </div>
  );
};

export default Wishlist;
