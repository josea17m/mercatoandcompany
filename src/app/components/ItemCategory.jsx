import React from "react";

const ItemCategory = ({ image, tile }) => {
  return (
    <a
      href="#"
      className="flex flex-col group gap-2 md:gap-5 items-center"
    >
      <div className="border-2 active:border-[#486C5C] duration-200 rounded-2xl h-[100px] w-[100px] lg:h-[150px] lg:w-[150px] md:p-5 hover:shadow-md">
        <img
          loading="lazy"
          src={image}
          className="group-hover:scale-110 duration-200 p-2 md:p-1"
          alt="item"
        />
      </div>
      <span className="text-xs lg:text-lg group-hover:text-[#486C5C]">
        {tile}
      </span>
    </a>
  );
};

export default ItemCategory;
