import React from "react";

interface props {
  title: string;
  onClick?: () => void;
  children?: React.ReactNode;
  inverse?: boolean;
  bgColor?: string;
  textColor?: string;
  bgHover?: string;
  textHover?: string;
}

const ButtonPrimary = ({
  title,
  onClick,
  children,
  inverse,
  bgColor,
  textColor,
  bgHover,
  textHover,
}: props) => {
  return (
    <button
      onClick={onClick}
      className={`${inverse && "flex-row-reverse"}  ${
        bgColor ? "bg-" + bgColor : "bg-primary"
      }  ${textColor ? "text-" + textColor : "text-white"} 
      ${textHover ? "hover:text-" + textHover : "hover:text-black"} ${
        bgHover ? "hover:bg-" + bgHover : "hover:bg-lime-300"
      }  rounded-xl w-full p-4 flex gap-4 items-center justify-center transition-all hover:scale-105`}
    >
      {children}
      <p className="text-xl font-semibold">{title}</p>
    </button>
  );
};

export default ButtonPrimary;
