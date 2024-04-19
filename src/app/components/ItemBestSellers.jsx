"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { roboto } from "../../fonts";
const ItemBestSeller = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("api/items")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  const redirect = (id) => {
    window.location.href = `http://localhost:3000/items/${id}`;
  };
  return (
    <div className="flex justify-between gap-10 mt-10">
      {data.length > 1 ? (
        data.map((i) => {
          console.log(i.price);
          return (
            <div
              key={i._id}
              className="flex flex-col gap-1 hover:scale-105 duration-200 cursor-pointer"
              onClick={() => redirect(i._id)}
            >
              <img loading="lazy" src={`/${id}`} width={200} height={200} alt="img"/>
              <span className="text-[16px]">{i.name}</span>
              <span>{i.price}</span>

              {/* <span className={`${roboto.className} text-[16px] `}>
                ${i.price.length == 3 ? i.price[0] : i.price[0] + i.price[1]}
                <sup className="text-[10px]">
                  {i.price.length == 3
                    ? i.price[1] + i.price[2]
                    : i.price[2] + i.price[3]}
                </sup>
              </span> */}
            </div>
          );
        })
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default ItemBestSeller;
