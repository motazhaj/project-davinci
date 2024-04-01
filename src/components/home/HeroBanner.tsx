const HeroBanner = () => {
  return (
    <section className="bg-lime-950 h-[500px] relative">
      <img
        className="z-0 w-full h-full object-cover absolute blur-sm shadow-xl"
        src="/images/paintshop.jpg"
        alt="paintshop"
      />
      <div className="z-1 w-full h-full absolute text-white top-0 flex flex-col justify-center items-center text-center drop-shadow-2xl">
        <h1 className="text-6xl font-bold">
          Welcome to <span className="text-lime-400">Green House</span>
        </h1>
        <div className="text-2xl pt-4 font-bold">School and University Supplies, Projects, and Models</div>
      </div>
    </section>
  );
};

export default HeroBanner;
