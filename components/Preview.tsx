"use client";

import { Button } from "antd";
import Image from "next/image";
import React from "react";

const Preview = () => {
  return (
    <div className="flex flex-col w-[75rem] mx-auto my-12 justify-between bg-[#EEFCF9] rounded-3xl">
      <div className="flex justify-between">
        <div className="flex flex-col px-[3.37rem] pt-[3.63rem] pb-[8.31rem]">
          <Image src="/logov1.png" width={85} height={85} alt="deskto-log" />
          <h1 className="text-[#085C60] text-5xl font-bold leading-[3.9rem]">
            Get more work
            <br /> done, wherever
            <br /> you are.
          </h1>
          <p className="text-[#556F71] text-xl font-[400] leading-[131.687%]">
            Our guaranteed top-tier service and industry-
            <br />
            leading worldwide coverage provide peace of
            <br /> mind for any global team.
          </p>
        </div>
        <div className="relative w-[40rem] h-[34rem]">
          <Image src="/desktopv1.png" fill alt="desktop" />
        </div>
      </div>
      <Button
        style={{
          background: "#e2f4f1",
          color: "#085C60",
          fontSize: "1rem",
          fontWeight: "600",
          lineHeight: "1.5rem",
          border: "none",
          borderRadius: "0rem 0rem 1.25rem 1.25rem",
        }}
        block
        className="h-[5.875rem]"
      >
        Get started
      </Button>
    </div>
  );
};

export default Preview;
