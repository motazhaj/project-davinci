import React from "react";

const ImageTitled = () => {
  return (
    <div className="h-[400px] w-full overflow-hidden relative rounded-[16px] mx-auto">
      <div>
        <img
          className="z-0 w-full h-full object-cover shadow-xl"
          src="/images/herobanner.jpg"
          alt="paintshop"
        />
      </div>
      <h1 className="absolute top-6 left-6 text-4xl font-bold text-lime-900 drop-shadow-md">Some Title </h1>
    </div>
  );
};

export default ImageTitled;
