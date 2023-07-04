"use client";
import { Button } from "antd";
import React from "react";

const StanderdPricingCard = () => {
  const Plans = [
    { id: "p1", title: "Platform Fee", amount: "N50,000" },
    { id: "p2", title: "Payout", amount: "N100 per tx" },
    { id: "p3", title: "Funding", amount: "N150 per tx" },
  ];
  return (
    <div className="w-[42.125rem] bg-[#085C60] rounded-[1.25rem] px-[2.19rem] py-[3.13rem]">
      <h1 className="text-white text-[4rem] font-bold tracking-[-0.03125rem] leading-normal">
        Standard
      </h1>
      <ul>
        {Plans.map((item) => (
          <>
            <li className="px-[1rem] flex justify-between pb-[2.87rem] pt-[4rem]">
              <h2 className="text-[#9cbebf] text-[2.1875rem] font-semibold leading-6 uppercase">
                {item.title}
              </h2>
              <h2 className="text-white text-[2.1875rem] font-semibold leading-6 uppercase whitespace-nowrap">
                {item.amount}
              </h2>
            </li>
            <hr />
          </>
        ))}
      </ul>
      <div className="flex justify-end pt-[1.56rem]">
        <Button
          style={{
            background: "white",
            padding: "1.03125rem 1.81594rem 0.96875rem 1.5rem",
            color: "#085C60",
            fontSize: "1rem",
            fontWeight: "600",
            lineHeight: "1.5rem",
            borderWidth: "1px",
            borderColor: "white",
            height: "3.5rem",
          }}
        >
          Get started
        </Button>
      </div>
    </div>
  );
};

export default StanderdPricingCard;
