"use client";

import React from "react";
import { Button } from "antd";

const CustomPricingCard = () => {
  return (
    <div className="flex flex-col justify-between w-[30.375rem] bg-[#085C60] rounded-[1.25rem] px-[2.19rem] py-[3.13rem]">
      <h1 className="text-white text-[4rem] font-bold tracking-[-0.03125rem] leading-normal">
        Custom
      </h1>
      <div className="flex flex-col gap-[3.81rem]">
        <h2 className="text-white text-lg font-medium leading-normal">
          Get in touch for tailored pricing
          <br /> based on your volume and business model.
        </h2>
        <h2 className="text-white text-lg font-medium leading-normal">
          Available for businesses
          <br /> processing more than N9,000,000
          <br /> per month.
        </h2>
        <ul className="list-disc text-white text-lg font-medium pl-[1.2rem]">
          <li>Customized pricing offers</li>
          <li>Volume-based discounts</li>
          <li>Access exclusive features</li>
        </ul>
      </div>
      <div className="flex items-end justify-end pt-[1.56rem]">
        <Button
          style={{
            background: "#085C60",
            padding: "1.03125rem 1.81594rem 0.96875rem 1.5rem",
            color: "white",
            fontSize: "1rem",
            fontWeight: "600",
            lineHeight: "1.5rem",
            borderWidth: "1px",
            borderColor: "white",
            height: "3.5rem",
          }}
        >
          Contact sales
        </Button>
      </div>
    </div>
  );
};

export default CustomPricingCard;
