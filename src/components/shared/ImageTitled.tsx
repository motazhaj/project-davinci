const ImageTitled = ({ title, image }: { title: string; image: string }) => {
  return (
    <div className="h-[400px] w-full overflow-hidden relative rounded-[16px] mx-auto drop-shadow-md cursor-pointer">
      <div className="w-full h-full">
        <img className="z-0 w-full h-full object-cover shadow-xl" src={`/images/${image}`} alt="paintshop" />
      </div>
      <div className="w-full h-2/3 absolute bottom-0 bg-gradient-to-t from-white/70 to-transparent">
        <h1 className="absolute bottom-6 left-6 text-2xl font-bold text-lime-900 drop-shadow-xl">{title}</h1>
      </div>
    </div>
  );
};

export default ImageTitled;
