import SocialMediaItem from "./SocialMediaItem";

export default function Footer() {
  return (
    <footer className="flex flex-col gap-5 bg-black text-white p-5 text-2xl">
      <div>
        A <span className="font-bold text-[#B4DCC8] ">fresh</span> stop in your
        everyday journey.
      </div>

      <span className="bg-white h-[1px] w-full"></span>

      <div className="flex flex-col md:flex-row lg:justify-center lg:py-5 lg:px-10 w-full gap-5 lg:gap-10">
        <div className="md:flex items-center hidden md:w-[20%] lg:w-[15%]">
          <img src="/logo.webp" alt="logo" className="w-full" />
        </div>

        <span className="bg-white w-[1px]"></span>

        <div className="flex flex-col justify-center">
          <div className="flex items-center gap-2 mb-2">
            <p className="md:text-base lg:text-2xl">Mercato & Company</p>
            <img src="/logo.webp" alt="logo" width={32} height={32} />
          </div>

          <div className="flex gap-5 pl-4">
            <ul className="list-disc text-xs xl:text-base">
              <li className="underline">Home</li>
              <li className="underline">Categories</li>
              <li className="underline">Best Sellers</li>
              <li className="underline">Shop</li>
            </ul>
            <ul className="list-disc text-xs xl:text-base">
              <li className="underline">About Us</li>
              <li className="underline">Our Mission</li>
              <li className="underline">Our Story</li>
              <li className="underline">Our Store</li>
            </ul>
          </div>

          <div className="text-[12px] mt-5">
            <p>
              Copyright 2024. Mercato & Company LLC. All Rights are Reserved.
            </p>

            <a href="#" className="text-[#B4DCC8]">
              Privacy Policy
            </a>
          </div>
        </div>

        <span className="bg-white w-[1px] h-auto"></span>

        <div className="flex flex-col justify-evenly items-center lg:text-lg">
          <p className="text-center text-sm md:text-base">
            {"Don't miss out on our news and discounts"}
          </p>
          <div className="flex mb-5 w-full">
            <input
              type="email"
              name=""
              id=""
              placeholder="Email"
              className="w-[87%] rounded-l-2xl text-sm p-2 lg:p-4 text-black"
            />
            <button className="w-[13%] bg-[#486C5C] text-sm p-2 rounded-r-2xl lg:p-3">
              ↑
            </button>
          </div>

          <div className="flex gap-5 justify-evenly">
            <SocialMediaItem
              url="https://www.tiktok.com/@mercatoandcompany"
              image={"/tik-tok.png"}
            />
            <SocialMediaItem
              url="https://www.instagram.com/mercatoandcompany/"
              image={"/instagram.png"}
            />
            <SocialMediaItem
              url="https://www.facebook.com/mercatoandco"
              image={"/facebook.png"}
            />
            <SocialMediaItem url="#" image={"/pinterest.png"} />
            <SocialMediaItem
              url="https://open.spotify.com/playlist/3UwWFr2Kl8KPmoHu9D2hCl?si=YZrx3F8_TuKH2f2DIjAWgQ&flow_ctx=cbca70b9-ed22-4f39-a37d-3595afefeba1%3A1708053401&pt_success=1&nd=1&dlsi=379be0bd48d04009"
              image={"/spotify.svg"}
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
