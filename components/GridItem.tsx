import React from "react";

interface GridItemProps {
  title: string;
  description: string;
}

const GridItem = ({ title, description }: GridItemProps) => {
  return (
    <div className="flex flex-col text-center gap-[1.37rem] w-[14.42363rem]">
      <h1 className="text-[#085C60] text-5xl font-bold leading-[3.9rem]">
        {title}
      </h1>
      <p className="text-[#69727A] leading-5 font-[400]">{description}</p>
    </div>
  );
};

export default GridItem;
