"ue client";

export default function NewsletterModal({ open, setOpen }) {
  return (
    <div
      className={`${
        open ? "h-news-show border-t-[2px]" : "h-news-hidden"
      } fixed bottom-0 bg-white overflow-hidden duration-300 flex items-center justify-center z-50 gap-10 rounded-lg w-screen`}
      data-aos="fade-up"
    >
      <div className="flex flex-col justify-between gap-5">
        <h2 className="text-lg md:text-3xl font-bold">
          Subscribe to our newsletter
        </h2>
        <p className="text-gray-500">
          Get the latest news and updates from Mercato and Company
        </p>
      </div>

      <form className="flex gap-5">
        <input
          type="email"
          placeholder="Enter your email"
          className="p-3 focus:border-[#486C5C] duration-300 w-96 border-[1px] rounded-md"
        />
        <button className="border-[1px] hover:border-[#486C5C] duration-200 bg-[#486C5C] hover:bg-white hover:text-black text-white p-3 rounded-md">
          Subscribe
        </button>
      </form>
      <button className="absolute top-4 right-4" onClick={() => setOpen(false)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </button>
    </div>
  );
}
