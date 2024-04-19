"use client";

import Image from "next/image";
import ItemCategory from "./components/ItemCategory";
import ItemBestSeller from "./components/ItemBestSellers";
import StoreCard from "./components/StoreCard";
import AboutUsTemplate from "./components/AboutUs-Template";
import Link from "next/link";
import NewsletterModal from "./components/NewsletterModal";
import { useEffect, useState } from "react";
import Form from "./components/Form";

export default function Home() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setOpen(true);
    }, 3000);
  }, []);
  return (
    <main>
      <NewsletterModal open={open} setOpen={setOpen} />

      {/* Engage */}
      <div className="h-[90dvh] bg-img flex justify-center items-center text-white">
        <p className="text-4xl md:text-7xl lg:text-8xl">Grab and go or...</p>
        <span
          data-aos="fade-up"
          data-aos-duration="1500"
          className="ml-[1px] font-medium italic text-4xl md:text-7xl lg:text-8xl"
        >
          Stay
        </span>
      </div>

      {/* Shop Entry */}

      {/* Categories */}
      <div className="lg:p-10" data-aos="fade-up">
        <div className="flex justify-between items-center pt-5 px-3 md:px-0">
          <h1 className="text-3xl md:text-5xl">Categories</h1>
          <Link
            href="#"
            className="rounded-2xl bg-[#486C5C] border-[#486C5C] border-[1px] hover:bg-white hover:text-[#486C5C] duration-300 text-sm md:text-lg text-center py-1 md:py-2 md:px-5 lg:px-10 px-5 text-white h-max shadow-2xl"
          >
            Go to shop
          </Link>
        </div>

        <div className="grid-flow-col grid-rows-2 md:grid-rows-1 grid mt-10 gap-5 overflow-x-auto pb-4 px-5 md:px-0 scroll-bar">
          <ItemCategory
            image={"/cheese-and-charcuterie_square.png"}
            tile="Charcuterie"
          />
          <ItemCategory image={"/ice-cream_square.png"} tile="Ice-cream" />
          <ItemCategory image={"/meals.png"} tile="Fresh meals" />
          <ItemCategory image={"/snacks_square.png"} tile="Coffee and Tea" />
          <ItemCategory image={"/wine_square.png"} tile="Dry Goods" />
          <ItemCategory image={"/v2_sweets.png"} tile="Local Vendors" />
          <ItemCategory image={"/wine_square.png"} tile="Home Goods" />
          <ItemCategory image={"/wine_square.png"} tile="Wines" />
          <ItemCategory image={"/v2_sweets.png"} tile="Sweets" />
          <ItemCategory image={"/wine_square.png"} tile="Frozen" />
          <ItemCategory image={"/wine_square.png"} tile="Snacks" />
          <ItemCategory image={"/v2_sweets.png"} tile="Beer" />
          <ItemCategory image={"/v2_sweets.png"} tile="Drinks" />
          <ItemCategory image={"/v2_sweets.png"} tile="Non-Alcoholics" />
        </div>
      </div>

      {/* Best Sellers */}
      {/* <div className="lg:p-10 mt-10" data-aos="fade-up">
        <div className="flex justify-between">
          <h1 className="text-6xl">Best Sellers</h1>
          <div className="rounded-2xl bg-[#486C5C] text-center py-2 text-white min-w-[160px] h-max">
            <a href="#">See more</a>
          </div>
        </div>

        <ItemBestSeller />
      </div>  */}
      {/* Shop Entry */}

      {/* Adds & Promotions */}
      {/* <div></div> */}
      {/* Adds & Promotions */}

      {/* Collage */}
      <section className="flex py-10 md:p-10 bg-mural-light md:h-auto lg:h-[80dvh] xl:h-[90dvh] items-center md:justify-center">
        <h2
          data-aos=""
          className="hidden lg:block vertical-text rounded-2xl text-center text-4xl md:py-10 lg:h-full px-3 font-semibold bg-[#FFBC04]"
        >
          Gourmet To Go
        </h2>
        <div className="flex flex-col md:flex-row gap-5 shadow-2x h-full">
          {/* <div className="bg-[#ffbc04] rounded-2xl shadow-2xl p-5">
          <h2
            data-aos=""
            className="block md:hidden text-center text-xl py-1 font-semibold bg-[#FFBC04"
          >
            Gourmet To Go
          </h2>
          <p className="font-semibold">Lorem ipsum dolor sit amet, consectetia vero illo doloremque!</p>
        </div> */}

          <div className="grid grid-cols-2 gap-5 px-5 h-full">
            <div className="h-full">
              <img
                data-aos="fade-right"
                data-aos-duration="1500"
                src="https://mercatoandcompany.com/wp-content/uploads/honey-cream-spread-320x320.webp"
                alt=""
                className="h-full rounded-2xl object-cover"
              />
            </div>
            <div className="h-full">
              <img
                data-aos="fade-right"
                data-aos-duration="1500"
                src="https://mercatoandcompany.com/wp-content/uploads/local-goods-320x320.webp"
                alt=""
                className="h-full rounded-2xl object-cover"
              />
            </div>
            <div className="h-full">
              <img
                data-aos="fade-right"
                data-aos-duration="1500"
                src="https://mercatoandcompany.com/wp-content/uploads/bumbleberry-honey-320x320.webp"
                alt=""
                className="h-full rounded-2xl object-cover"
              />
            </div>
            <div className="h-full">
              <img
                data-aos="fade-right"
                data-aos-duration="1500"
                src="	https://mercatoandcompany.com/wp-content/uploads/olive-oil-hand-320x320.webp"
                alt=""
                className="h-full rounded-2xl object-cover"
              />
            </div>
            <div className="hidden lg:hidden md:grid h-full md:grid-cols-subgrid md:col-span-2">
              {/* <h2 className="col-span-2 text-center bg-[#FFBC04] rounded-2xl py-2 font-semibold text-2xl ">
                Gourmet To Go
              </h2> */}

              <div className="col-span-2 flex flex-col gap-10">
                <h3 className="text-semibold text-2xl mt-5 bg-white p-1">
                  Try Us!
                </h3>

                <div className="flex justify-around gap-5">
                  <a
                    className="border-[1px] border-[#FFBC04] hover:bg-[#FFBC04] bg-white shadow-2xl duration-200 rounded-2xl py-2 w-1/2 text-center "
                    href="#"
                  >
                    Take to Take
                  </a>

                  <a
                    className="border-[1px] border-[#FFBC04] hover:bg-[#FFBC04] bg-white shadow-2xl duration-200 rounded-2xl py-2 w-1/2 text-center "
                    href="#"
                  >
                    Pick Up
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="h-full px-5">
            <img
              data-aos="fade-up"
              data-aos-duration="1500"
              src="https://mercatoandcompany.com/wp-content/uploads/food-selection-683x1024.webp"
              alt=""
              className="h-full w-full object-cover rounded-2xl"
            />
          </div>
        </div>
      </section>
      {/* Collage */}

      {/* Video */}
      <section className="relative flex justify-start h-dvh border-t-[1px] border-[#e4e4e4]">
        <video
          id="background-video"
          autoPlay
          loop
          muted
          poster=""
          className="absolute z-0 w-full h-full object-cover md:hidden"
        >
          <source src="/welcome-to-mercato.mp4" type="video/mp4" />
        </video>
        <article className="bg-market-image w-full h-full"></article>

      </section>
      {/* Video */}

      {/* Our Stores */}
      <section className="flex flex-col p-10 gap-8 bg-mural-light">
        <h1 className="text-4xl md:text-5xl bg-white w-max">Our Stores</h1>
        <div className="flex flex-col md:flex-row gap-10 md:gap-14 lg:gap-28">
          <StoreCard
            image="/brownsville.png"
            title="Brownsville, TX"
            address="2300 North Expy, Brownsville, TX 78521"
            phone={3214049903}
            mapsAddress="https://www.google.com/maps/place/Mercato+and+Company/@25.9498593,-97.5046264,3a,75y,90t/data=!3m8!1e2!3m6!1sAF1QipPvxEerCiKHsXNs5iB0CXNWIQJBwBp2z48TR5zn!2e10!3e12!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipPvxEerCiKHsXNs5iB0CXNWIQJBwBp2z48TR5zn%3Dw108-h86-k-no!7i1125!8i895!4m16!1m8!3m7!1s0x866f97df390488f3:0x1d740c9854d616b1!2sMercato+and+Company!8m2!3d25.9498804!4d-97.5044414!10e5!16s%2Fg%2F11p5ndj4_x!3m6!1s0x866f97df390488f3:0x1d740c9854d616b1!8m2!3d25.9498804!4d-97.5044414!10e5!16s%2Fg%2F11p5ndj4_x?entry=ttu"
            openHours="7am - 8pm"
            altText="brownsville-img"
          />
          <StoreCard
            image="/brownsville.png"
            title="Houston, TX"
            address="2300 North Expy, Brownsville, TX 78521"
            phone={3214049903}
            mapsAddress="https://www.google.com/maps/place/Mercato+and+Company/@25.9498593,-97.5046264,3a,75y,90t/data=!3m8!1e2!3m6!1sAF1QipPvxEerCiKHsXNs5iB0CXNWIQJBwBp2z48TR5zn!2e10!3e12!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipPvxEerCiKHsXNs5iB0CXNWIQJBwBp2z48TR5zn%3Dw108-h86-k-no!7i1125!8i895!4m16!1m8!3m7!1s0x866f97df390488f3:0x1d740c9854d616b1!2sMercato+and+Company!8m2!3d25.9498804!4d-97.5044414!10e5!16s%2Fg%2F11p5ndj4_x!3m6!1s0x866f97df390488f3:0x1d740c9854d616b1!8m2!3d25.9498804!4d-97.5044414!10e5!16s%2Fg%2F11p5ndj4_x?entry=ttu#"
            openHours="7am - 8pm"
            altText="houston-img"
          />
        </div>
      </section>
      {/* Our Stores */}

      {/* Contact Us */}
      <section className="relative md:h-[90dvh] w-full">
        <div className="absolute z-10 h-full flex justify-center items-center w-full bg-market-image"></div>
        <div className="relative z-20 backdrop-blur-[6px] h-full items-center flex flex-col gap-10 p-5 md:p-10 mt-5">
          <div>
            <h2 className="text-3xl lg:text-5xl text-center font-bold">
              Get in Touch with Us
            </h2>
          </div>
          <div className="flex flex-col md:flex-row gap-10 md:w-max md:p-10 md:bg-[#486C5C] shadow-2xl rounded-2xl bg-mural-dark">
            <Form />
          </div>
        </div>
      </section>
      {/* Contact Us */}

      <div></div>
      <div></div>
    </main>
  );
}
