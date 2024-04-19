export default function Form() {
  return (
    
      <>
      <form
        className="bg-[#3f5f51] rounded-2xl shadow-2xl w-full md:w-6/12 lg:w-7/12 xl:w-7/12 flex flex-col gap-6 p-6"
        action=""
      >
        <input
          className="rounded-lg p-3 focus:bg-[#ebebeb] hover:bg-[#ebebeb] placeholder:text-[#000] duration-300"
          type="text"
          placeholder="Name"
        />
        <input
          className="rounded-lg p-3 focus:bg-[#ebebeb] hover:bg-[#ebebeb] placeholder:text-[#000] duration-300"
          type="email"
          placeholder="Email"
        />
        <textarea
          required
          name=""
          id=""
          cols="30"
          rows="10"
          placeholder="Message"
          className="rounded-lg p-3 outline-none resize-none focus:bg-[#ebebeb] hover:bg-[#ebebeb] placeholder:text-[#000] duration-300"
        ></textarea>
        <button className="hover:bg-[#d0ffe8] bg-[#B4DCC8] hover:font-semibold w-1/2  hover:text-[#486C5C] duration-300 rounded-xl p-2">
          Send
        </button>
      </form>
      <div className="h-max shadow-2xl  bg-[#3f5f51] bg-mural-dar p-5 text-white rounded-2xl">
        <p>Head Office: Houston, Texas 77046 24 Greenway Plaza Suit 1320</p>
        <br />
        <p>Inquires: info@mercatoandcompany.com</p>
        <br />
        <p>
          Contact:{" "}
          <a href="tel:8329175781" className="hover:underline">
            832 917 5781
          </a>
        </p>
      </div></>
   
  );
}
