import React, { useEffect, useState } from "react";
import "boxicons/css/boxicons.min.css";
import axios from "axios";
import { useDispatch } from 'react-redux';

const Home = () => {
  const [data, setData] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  const dispatch = useDispatch();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("https://dummyjson.com/quotes");
        setData(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const filteredQuotes = data.quotes?.filter((item) =>
    item.quote.toLowerCase().includes(searchInput.toLowerCase())
  );

  const sortedQuotes = filteredQuotes?.sort((a, b) =>
    a.author.toLowerCase() > b.author.toLowerCase() ? 1 : -1
  );

  return (
    <>
      <div className="w-full mt-12 h-full px-12  py-4">
        <div className="-z-100  absolute bg-blue-500 rounded-full translate-x-60 translate-y-60 bg-opacity-10 opacity-60 mix-blend-multiply w-80 h-80 filter blur-3xl"></div>
        <div className="my-8">
          <input
            type="text"
            onChange={(e) => setSearchInput(e.target.value)}
            className="p-2 w-1/2 bg-gray-50 rounded-sm font-semibold focus:outline-none"
            placeholder="Search Quotes"
          />
        </div>
            <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 gap-4">
            {sortedQuotes?.map((items) => (
              // 
              <div className='p-4  duration-700 flex justify-between  rounded-md' key={items.id}>
                <div>
                <i class='bx bxs-quote-left'></i>
                <p className="">{items.author}</p>
                <p className="">{items.quote}</p>
                </div>
                <div className="">
                <i 
                onClick={()=>{
                  dispatch({
                    type: 'addtoWishlist',
                    payload: items
                  });
                }}
                className='bx bx-bookmark'></i></div>
              </div>
            ))}
            </div>
      </div>
    </>
  );
};

export default Home;
