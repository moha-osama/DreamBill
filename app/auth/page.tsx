"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Button } from "antd";
import { useRouter } from "next/navigation";

const AuthPage = ({}) => {
  const router = useRouter();

  const [activeButton, setActiveButton] = useState("company");
  const handleClick = (btn: string) => {
    setActiveButton(btn);
  };

  return (
    <>
      <header className="flex items-center h-[6.3125rem]  justify-between  py-6 px-[7.5rem] border-[#085C60] border-b-[0.0625rem]">
        <div className="relative w-[12.24994rem] h-[2.625rem]">
          <Image
            src="/logo.png"
            style={{ objectFit: "contain" }}
            fill
            alt="logo"
          />
        </div>
        {activeButton === "emoloyee" && (
          <div>
            <Button
              style={{
                background: "transparent",
                color: "#085C60",
                fontSize: "1rem",
                fontWeight: "600",
                lineHeight: "1.5rem",
                border: "none",
                boxShadow: "none",
              }}
              className="h-[3.5rem]"
            >
              Sign In
            </Button>
            <Button
              style={{
                background: "#085C60",
                color: "white",
                fontSize: "1rem",
                fontWeight: "600",
                lineHeight: "1.5rem",
              }}
              className="h-[3.5rem]"
            >
              Get Started
            </Button>
          </div>
        )}
      </header>
      <div className="flex flex-col gap-[1.5rem] w-[28.5rem] h-[25.50563rem] mx-auto mt-[4rem]">
        <div className="flex flex-col gap-[0.63rem]">
          <h1 className="text-xl leading-6 font-medium text-[#17191C]">
            Let's get You started
          </h1>
          <p className="text-[#01090F] text-sm font-normal leading-5">
            Please select an option below
          </p>
        </div>
        <div className="flex">
          <Button
            style={{
              color: `${activeButton === "company" ? "black" : "#7C8286"}`,
              borderColor: `${
                activeButton === "company" ? "#2C71F0" : "#E8EBF2"
              }`,
              background: `${
                activeButton === "company" ? "#EAF1FE" : "transparent"
              }`,
              fontSize: "0.875rem",
              fontWeight: "500",
              lineHeight: "1.225rem",
            }}
            onClick={() => handleClick("company")}
            type="default"
            block
            className="h-[2.5rem]"
          >
            I'm A Company
          </Button>
          <Button
            style={{
              color: `${activeButton === "emoloyee" ? "black" : "#7C8286"}`,
              borderColor: `${
                activeButton === "emoloyee" ? "#2C71F0" : "#E8EBF2"
              }`,
              background: `${
                activeButton === "emoloyee" ? "#EAF1FE" : "transparent"
              }`,
              fontSize: "0.875rem",
              fontWeight: "500",
              lineHeight: "1.225rem",
            }}
            onClick={() => handleClick("emoloyee")}
            type="default"
            block
            className="h-[2.5rem]"
          >
            I'm An Employee
          </Button>
        </div>
        <div className="flex justify-between border-[#EAF1FE] border p-[1.5625rem] gap-[1.18rem]">
          <div className="flex flex-col gap-[0.5rem]">
            <h2 className="text-[#01090F] text-[1rem] font-medium leading-8">
              {activeButton === "company"
                ? " Sign up as an company"
                : "Keep an eye on your inbox!"}
            </h2>
            <div className="flex items-center gap-[0.38rem]">
              {activeButton === "company" && (
                <Image
                  src="/sucess-sign.png"
                  width={14}
                  height={14}
                  alt="true"
                />
              )}
              <p
                className={`text-xs text-gray-400 leading-4 tracking-[-0.00375rem] ${
                  activeButton === "company" ? "whitespace-nowrap" : ""
                }`}
              >
                {activeButton === "company"
                  ? "Pay your global team with one bulk payment"
                  : "Please sign up to dreambill via the link in the email invitation from your client. We're looking forward to seeing you soon."}
              </p>
            </div>
          </div>
          {activeButton === "company" && (
            <Image width={82} height={82} alt="frame" src="/frame.png" />
          )}
        </div>
        {activeButton === "company" && (
          <Button
            onClick={() => router.push("/auth/signup")}
            block
            style={{
              background: "#085C60",
              fontSize: "0.875rem",
              lineHeight: "1.25rem",
              color: "white",
              fontWeight: "700",
            }}
            className="h-[2.5rem]"
          >
            Continue
          </Button>
        )}
      </div>
    </>
  );
};

export default AuthPage;
