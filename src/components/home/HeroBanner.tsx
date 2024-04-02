import { FaLongArrowAltRight } from "react-icons/fa";

const HeroBanner = () => {
  return (
    <section className="">
      <div className="bg-lime-950  h-[500px] w-full relative mt-20 rounded-[32px] overflow-hidden mx-auto">
        <img
          className="z-0 w-full h-full object-cover shadow-xl "
          src="/images/paintshop.jpg"
          alt="paintshop"
        />
        <div className="absolute w-full h-full top-0 left-0 flex justify-center items-center">
          <div className="z-1 w-2/3 h-1/2 text-lime-800 flex flex-col justify-between text-center drop-shadow-2xl bg-white/70 rounded-[32px] px-10 pt-10">
            <div>
              <h1 className="text-5xl font-bold ">
                Welcome to <span className="">Green House</span>
              </h1>
              <div className="text-2xl pt-4 font-bold">
                School and University Supplies, Projects, and Models
              </div>
            </div>
            <button className="flex items-center gap-2 mt-10 mb-6 mx-auto py-2 px-6 bg-orange-700 text-white mr-auto rounded-lg">
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
