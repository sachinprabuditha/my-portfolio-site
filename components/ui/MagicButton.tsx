import React from 'react'

const MagicButton = ({
    title,
    icon,
    position,
    handleClick,
    otherClasses,
  }: {
    title: string;
    icon: React.ReactNode;
    position: string;
    handleClick?: () => void;
    otherClasses?: string;
  }) => {
  return (
    <button className="relative inline-flex h-12 md:h-14 lg:h-16 overflow-hidden rounded-lg p-[1px] focus:outline-none" 
    onClick={handleClick}
    >
  <span className=" " />
  <span
        className={`hover:bg-black-200 transition border border-x-pink-500 border-y-purple border-t-purple duration-300 inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-800 px-5 md:px-7 lg:px-10 text-xs md:text-sm lg:text-base font-medium text-white backdrop-blur-3xl gap-2 ${otherClasses}`}
      >
        {position === "left" && icon}
        {title}
        {position === "right" && icon}
      </span>
</button>
  )
}
export default MagicButton;
