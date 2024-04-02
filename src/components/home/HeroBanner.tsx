import { FaLongArrowAltRight } from "react-icons/fa";

const HeroBanner = () => {
  return (
    <section className="p-4">
      <div className="bg-lime-950 h-[700px] w-full relative top-0 rounded-[16px] overflow-hidden mx-auto">
        <img
          className="z-0 w-full h-full object-cover shadow-xl"
          src="/images/herobanner.jpg"
          alt="paintshop"
        />
        <div className="absolute w-full h-full top-0 left-0 flex justify-center items-center">
          <div className="z-1 w-full h-2/3 text-lime-950 flex flex-col justify-end text-left drop-shadow-2xl px-14">
            <div>
              <h1 className="text-6xl font-bold ">Welcome to Green House</h1>
              <div className="text-2xl pt-4 font-bold">
                School and University Supplies, Projects, and Models
              </div>
            </div>
            <button className="flex items-center gap-2 mt-24 mb-6 mr-auto py-3 px-6 bg-lime-700 hover:scale-110 hover:bg-lime-400 transition-all text-white hover:text-black text-xl rounded-lg">
              <FaLongArrowAltRight />
              <div>See More!</div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
