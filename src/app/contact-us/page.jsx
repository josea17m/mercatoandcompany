import Form from "../components/Form";

const page = () => {
  return (
    <div className="flex flex-col gap-14 items-center py-10 bg-mural-light ">
      <h1 className="font-bold text-4xl text-left">Get in Touch with Us</h1>
      <div className="flex gap-10">
        <Form />
      </div>
    </div>
  );
};

export default page;
