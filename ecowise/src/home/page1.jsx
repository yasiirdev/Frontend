import ecowise from "../assets/ecowise.jpg";

export default function Page1() {
  return (
    <>
      <div className=" h-screen w-screen pt-15 flex justify-center items-center flex-col  bg-main">
        <div className=" w-[85%]   ">
          <img
            src={ecowise}
            alt="ecowise feature pic"
            className="w-full md:w-full h-auto rounded-md object-cover transition-transform duration-300 ease-in-out hover:scale-105 hover:brightness-110 hover:rotate-1"
          />
        </div>
        {/* <div className="flex flex-col items-center h-[40%] w-full ">
          <p className=" font-Inter pt-8 text-lg font-bold text-pretty text-[#185E20]   sm:text-xl/8">
                  Unmask the Truth
        </p>
        <p className=" text-sm font-medium font-Mon text-pretty text-gray-500  sm:text-sm">
                Our AI engine processes thousands of data points to give you the most accurate 
        </p>
        <p className=" text-sm font-medium text-pretty text-gray-500 flex justify-center w-[50%] sm:text-sm">
          environmental impact report in seconds.
          </p>
        </div> */}
      </div>
    </>
  );
}
