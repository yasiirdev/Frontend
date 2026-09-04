import { useNavigate } from "react-router";

export default function Input() {

  const navigation = useNavigate();
  
  const HandlerSubmit = () => {
    navigation("/auth");
  }

  return (
    <label htmlFor="Search" className="pt-4 pl-4 foot-Inter pr-4">
      <span className="sr-only"> Search </span>
      <div className="flex border-2 rounded-2xl border-[#F1F8E9]  shadow-2xl focus-within:ring-2 focus-within:ring-[#4CAF50]">
        <input
          type="search"
          id="Search"
          className="w-full border-none rounded-l-2xl text-xs  outline-0 p-3 bg-white h-13   text-black focus:ring-0 sm:text-xl font-Mon"
          placeholder="Paste Product link"
        />

        <button
          type="submit"
          onClick={HandlerSubmit}
          className="bg-[#185E20] font-Inter  w-[30%] rounded-2xl px-4 py-2   text-white  tracking-wide capitalize hover:bg-[#4CAF50] focus:bg-[#4CAF50] focus:outline-0 z-100  flex justify-center items-center"
        >
          <span className="sm:text-2xl/none  text-xs/none ">Analyze</span>
        </button>
      </div>
    </label>
  );
}
