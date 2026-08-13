import Input from "./input";
export default function Hero() {
  return (
    <>
      <div className="bg-[#F1F8E9]">
             <div className="relative isolate px-6 lg:px-8">
               <div
                 aria-hidden="true"
                 className="absolute inset-x-0 -top-10 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-50"
               >
                 <div
                   style={{
                     clipPath:
                       "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                   }}
                   className="relative left-[calc(50%-11rem)] aspect-1155/678 w-144.5 -translate-x-1/2 rotate-30  opacity-30 sm:left-[calc(50%-30rem)] sm:w-288.75"
                 />
               </div>
               <div className="mx-auto max-w-2xl py-10 sm:py-10 lg:py-10">
                 <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                   <div className=" capitalize relative rounded-full px-3 py-1 text-sm/6 text-gray-400 ring-1 ring-black/10 hover:ring-black/20">
                     AI-Powered substainability insights .{" "}
                     <a href="#" className="font-semibold text-indigo-400">
                       <span aria-hidden="true" className="absolute inset-0" />
                       Read more <span aria-hidden="true">&rarr;</span>
                     </a>
                   </div>  
                 </div>
                 <div className="text-center">
                   <h1 className="text-4xl font-semibold capitalize tracking-tight text-balance text-[#185E20] sm:text-6xl">
                     shop substainably.
                   </h1>
                   <h1 className="text-4xl font-semibold pt-3 capitalize tracking-tight text-balance text-[#4CAF50] sm:text-5xl">
                     skip the GreenWashing.
                   </h1>
                   <p className="mt-8 text-lg font-medium text-pretty text-gray-600   sm:text-xl/8">
                     Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat
                     commodo. Elit sunt amet fugiat veniam occaecat.
                   </p>
                 </div>
     
                 {/*input analyze*/}
                 <Input />
               </div>
               <div
                 aria-hidden="true"
                 className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
               >
                 <div
                   style={{
                     clipPath:
                       "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                   }}
                   className="relative left-[calc(50%+3rem)] aspect-1155/678 w-144.5 -translate-x-1/2 opacity-30 sm:left-[calc(50%+36rem)] sm:w-288.75"
                 />
               </div>
             </div>
           </div>
    </>
  );
}
