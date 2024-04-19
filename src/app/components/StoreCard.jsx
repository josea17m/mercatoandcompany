"use client";

import moment from "moment";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function StoreCard({
  image,
  title,
  address,
  phone,
  mapsAddress,
  openHours,
  altText,
}) {
  //   const actualHour = moment().format("LT");

  //   const [isOpen, setIsOpen] = useState(false);
  //   const MaxHour = moment(openHours.split(" - ")[1], "LT").format("LT");
  //   useEffect(() => {
  //     setIsOpen(actualHour > MaxHour);
  //   }, [actualHour]);

  return (
    <div className="p-4 w-12/12 md:w-6/12 lg:w-3/12 flex flex-col gap-5 overflow-hidden rounded-xl hover:scale-[1.01] duration-300 group hover:bg-white md:bg-white bg-[#ffffffad] hover:shadow-2xl border-2">
      <div className="flex justify-between items-center">
        <h2 className="text-xl md:text-lg lg:text-[20px] text-[#083C74] font-bold">
          {title}
        </h2>
        <div className="flex gap-2">
          <span className="font-semibold text-sm">Open</span>
          <span className="bg-red-500 rounded-full py-[8px] px-[10px]"></span>
        </div>
      </div>
      <div className="p-5">
        <img
          loading="lazy"
          src={image}
          className="transform transition duration-300 rounded-2xl item-card"
          alt={altText}
        />
      </div>
      <div className="rounded-2xl flex flex-col gap-3 duration-300 text-xs lg:text-[12px]">
        <div className="flex gap-2">
          <Link
            href={mapsAddress}
            title="Open in Google Maps"
            className="font-semibold hover:border-b-[1px] border-black duration-200"
          >
            {address}
          </Link>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="duration-200 transform text-[#486C5C] rotate-180 md:text-white md:group-hover:text-[#486C5C]  md:group-hover:rotate-180"
            viewBox="0 0 20 20"
            fill="none"
            width={20}
            height={20}
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </div>
        <div>
          Opening Hours: All days{" "}
          <span className="font-semibold">{openHours}</span>
        </div>
        <div>
          Call:{" "}
          <a
            href={`tel:${phone}`}
            title="Call us!"
            className="font-semibold hover:border-b-[1px] border-black duration-200"
          >
            {phone}
          </a>
        </div>
        <Link
          className="bg-[#486C5C] border-[1px] text-[13px] border-[#486C5C] hover:font-semibold hover:text-[#486C5C] hover:bg-white duration-300 py-[10px] rounded-2xl text-white text-center"
          href={mapsAddress}
        >
          Order to Pickup
        </Link>
      </div>
    </div>
  );
}
