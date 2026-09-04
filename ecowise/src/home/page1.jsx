import ecowise from "../assets/ecowise.jpg";

export default function Page1() {
  return (
    <>
      <div className=" sm:pt-15 flex justify-center items-center flex-col  bg-main">
        <div className=" w-[85%]   ">
          <img
            src={ecowise}
            alt="ecowise feature pic"
            className="w-full max-w-full md:w-full md:max-w-full h-auto rounded-md object-cover transition-transform duration-300 ease-in-out hover:scale-105 hover:brightness-110 hover:rotate-1"
          />
        </div>
      </div>
    </>
  );
}
