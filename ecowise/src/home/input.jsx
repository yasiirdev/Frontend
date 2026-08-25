import { useNavigate } from "react-router";

export default function Input() {

  const navigation = useNavigate();
  
  const HandlerSubmit = () => {
    console.log("submit ");
    navigation("/auth");
  }

  return (
    <label htmlFor="Search" className="pt-4 pl-4 foot-Inter pr-4">
      <span className="sr-only"> Search </span>
      <div className="flex border-2 rounded-2xl border-[#F1F8E9]  shadow-2xl focus-within:ring-2 focus-within:ring-[#4CAF50]">
        <input
          type="search"
          id="Search"
          className="w-full border-none rounded-2xl  outline-0 p-2 bg-white h-13   text-black focus:ring-0 sm:text-sm font-Mon"
          placeholder=" Paste Product link"
        />

        <button
          type="submit"
          onClick={HandlerSubmit}
          className="bg-[#185E20] font-Inter  w-[30%] rounded-2xl px-4 py-2 text-xl/none  text-white  tracking-wide capitalize hover:bg-[#4CAF50] focus:bg-[#4CAF50] focus:outline-0"
        >
           Analyze
        </button>
      </div>
    </label>
  );
}
