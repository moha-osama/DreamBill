"use client";
import React from "react";
import { DollarOutlined } from "@ant-design/icons";
import Image from "next/image";

interface CardProps {
  title: string;
  description: string;
  icon: string;
}

const Card = ({ title, description, icon }: CardProps) => {
  return (
    <div className="h-[21.5rem] w-[21.24875rem] card-box pt-[2.5rem] pl-[2.5rem] pr-[3.2rem] pb-[5.62rem]">
      <div className=" w-[15.53125rem] text-left ">
        <span
          className={`text-white flex text-3xl w-fit stroke-black items-center p-[0.85rem] ${
            icon === "/dollar-icon.png"
              ? "bg-[#DBF3FA]"
              : icon === "/user-icon.png"
              ? "bg-[#FFF1EA]"
              : icon === "/bookmark-icon.png"
              ? "bg-[#FBE9EF]"
              : ""
          } rounded-full mb-[1.87rem]`}
        >
          <Image src={icon} width={32} height={32} alt="title" />
        </span>
        <h1 className="text-[#2C2E31] text-2xl font-bold leading-8">{title}</h1>
        <p className=" text-[#69727A] text-lg font-[400] leading-7">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Card;
