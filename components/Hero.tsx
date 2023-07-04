"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Button } from "antd";
import Image from "next/image";

const Hero = () => {
  const router = useRouter();
  return (
    <div className="relative w-[75rem] mx-auto h-[40.75rem] mt-[3.75rem]">
      <div className="absolute top-0 bottom-0 left-0 right-0 mx-auto z-0 bg-[url('/vector.png')] w-[40.75rem]" />
      <div className="absolute w-full z-1">
        <div className="flex justify-between">
          <div className="flex flex-col items-start gap-[1.5]">
            <h1 className="text-[#085C60] text-[4rem] font-bold leading-[4.8rem] tracking-[-0.03125rem]">
              Empower Your
              <br /> Workforce, Unlock <br /> Africa's Potential
            </h1>
            <p className="text-[#556F71] text-xl font-[400] leading-[131.687%]">
              Empower your business with our comprehensive payroll platform
              <br />
              tailored for the African market. Streamline your Payroll <br />
              Processes, Ensure Compliance, and Focus on Growth
            </p>
            <div className="mt-[3.12rem] flex gap-[1.5rem]">
              <Button
                onClick={() => router.push("/auth")}
                style={{
                  background: "#085C60",
                  padding: "1.03125rem 1.81594rem 0.96875rem 1.5rem",
                  color: "white",
                  fontSize: "1rem",
                  fontWeight: "600",
                  lineHeight: "1.5rem",
                }}
                className="h-[3.5rem]"
              >
                Get Started
              </Button>
              <Button
                onClick={() => router.push("/contact?mode=book-a-demo")}
                style={{
                  background: "transparent",
                  padding: "1.03125rem 1.81594rem 0.96875rem 1.5rem",
                  color: "#085C60",
                  fontSize: "1rem",
                  fontWeight: "600",
                  lineHeight: "1.5rem",
                  borderColor: "#085C60",
                  borderWidth: "1px",
                  borderRadius: "0.5rem",
                }}
                className="h-[3.5rem]"
              >
                Request a demo
              </Button>
            </div>
            <p className="mt-[1.5rem] text-[#556F71] text-xl font-[400] leading-[131.687%]">
              Setup in 5 minutes.
            </p>
          </div>
          <div className="relative w-[33.8125rem] h-[33.6875rem]">
            <Image src="/bg.png" fill alt="bg" />
            <Image src="/bg-vector.png" fill alt="vector" />
            <Image
              src="/img1.png"
              alt="desltop"
              width={467}
              height={327}
              className="absolute top-[1.56rem] left-1/2 transform -translate-x-1/2 z-1"
            />
            <Image
              src="/img2.png"
              alt="desltop"
              width={221}
              height={122}
              className="absolute bottom-[2.25rem] left-[2.31rem] z-2 "
            />
            <Image
              src="/img2.png"
              alt="desltop"
              width={221}
              height={122}
              className="absolute bottom-[2.25rem] right-[2.31rem] z-2 "
            />
            <Image
              src="/face1.png"
              alt="user"
              width={100}
              height={100}
              className="absolute right-[-2rem] top-[-2rem] z-3 "
            />
            <Image
              src="/face2.png"
              alt="user"
              width={100}
              height={100}
              className="absolute left-[-3rem] top-1/3 z-3 -translate-y-1/2"
            />
            <Image
              src="/face3.png"
              alt="user"
              width={100}
              height={100}
              className="absolute right-[-3rem] bottom-[7.75rem] z-3 "
            />
            <Image
              src="/face4.png"
              alt="user"
              width={100}
              height={100}
              className="absolute left-[6.56rem] bottom-[-3rem] z-3 "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
