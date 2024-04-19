export default function AboutUsTemplate({
  aboutUs,
  content,
  image,
  button,
  tile,
}) {
  return (
    <div className="flex flex-col">
      <div className={`${aboutUs ? "bg-[#000]" : "bg-[#B4DCC8]"}  p-5`}>
        <h2
          className={`${
            aboutUs ? "text-[#B4DCC8]" : "text-[#000]"
          } text-3xl font-bold pl-[112px]`}
        >
          {tile}
        </h2>
      </div>
      <div className="flex">
        <div
          className={`${
            aboutUs ? "bg-[#B4DCC8]" : "bg-[#000]"
          } w-[50px] md:w-[100px] p-5 text-3xl justify-center flex`}
        >
          <h2
            className={`${
              aboutUs ? "text-[#000]" : "text-[#B4DCC8]"
            } vertical-text text-center font-bold`}
          >
            Gourmet To Go
          </h2>
        </div>
        <div className="px-14 py-10">
          <p className="text-[30px]">
            Our <span className="font-bold text-[#B9313B]">passion</span> for
            good food drives everything we do.
          </p>
          <br />
          <p className="text-[30px]">
            We are constantly on the lookout for{" "}
            <span className="font-bold text-[#B9313B]">new</span> and{" "}
            <span className="font-bold text-[#B9313B]">exciting</span> local and
            international flavors to bring to your table, ensuring that your
            taste buds are always surprised and delighted. We offer a wide range
            of carefully selected products and packaged snacks.
          </p>
          <br />
          <div className="flex gap-5">
            <div className="pr-5">
              <p className="text-[30px]">
                We believe in the importance of regional produce. This not only
                helps to reduce our carbon footprint but allows us to embrace
                supporting local vendors.
              </p>
              <br />
              <p className="text-[30px]">
                We have handpicked local vendors with a simple mission: to bring
                a love for{" "}
                <span className="font-bold text-[#B9313B]">quality</span>,{" "}
                <span className="font-bold text-[#B9313B]">
                  organic ingredients
                </span>{" "}
                , and{" "}
                <span className="font-bold text-[#B9313B]">sustainably</span>{" "}
                produced food to you.
              </p>
            </div>
            <img src={image} className=" lg:w-3/12" alt="image" />
          </div>
        </div>
      </div>
    </div>
  );
}
