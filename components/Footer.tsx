"use client";
import React from "react";
import { Button } from "antd";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface FooterPorps {
  CardShown?: boolean;
}

const Footer = ({ CardShown }: FooterPorps) => {
  const router = useRouter();
  return (
    <div className="w-[75rem] mx-auto">
      {CardShown && (
        <div className=" mb-[4rem]   w-full h-[22.8125rem] bg-[#085C60] rounded-[1.25rem]">
          <div className="flex flex-col items-center gap-[3rem] justify-center w-full h-full bg-[url('/footer-vector.png')]">
            <h1 className="text-white text-5xl font-bold leading-[4.2rem]">
              Get started with Dreambill
            </h1>
            <div className="flex gap-[0.5rem]">
              <Button
                onClick={() => router.push("/auth")}
                style={{
                  background: "#FFFFFF",
                  padding: "1.03125rem 1.81594rem 0.96875rem 1.5rem",
                  color: "#085C60",
                  fontSize: "1rem",
                  fontWeight: "600",
                  lineHeight: "1.5rem",
                  height: "3.5rem",
                }}
              >
                Create an account
              </Button>
              <Button
                onClick={() => router.push("/contact?mode=book-a-demo")}
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
                Request a demo
              </Button>
            </div>
          </div>
        </div>
      )}
      <div className="flex justify-between mb-[1.13rem]">
        <div className="relative w-[9.625rem] h-[2.0625rem]">
          <Image src="/logo.png" fill alt="logo" />
        </div>
        <ul className="flex gap-[0.75rem]">
          <li className="footer-nav-item">
            <img src="/fframe.svg" />
          </li>
          <li className="footer-nav-item">
            <img src="/lframe.svg" />
          </li>
          <li className="footer-nav-item">
            <img src="/yframe.svg" />
          </li>
          <li className="footer-nav-item">
            <img src="/tframe.svg" />
          </li>
        </ul>
      </div>
      <div className="flex pt-[1.63rem] mb-[1.88rem] justify-between border-t border-[#085C60]">
        <p className="text-[#556F71] text-[0.75rem] font-[400] leading-[1.05rem]">
          © Copyright 2023. All Rights Reserved.
        </p>
        <ul className="flex gap-[1.19rem]">
          <li className="footer-nav-link">About us</li>
          <li className="footer-nav-link">Privacy Policy</li>
          <li className="footer-nav-link">Privacy Policy</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
