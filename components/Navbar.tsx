"use client";

import React from "react";
import Image from "next/image";
import { Button } from "antd";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center px-[2.81rem] w-[75rem] mx-auto my-0 h-[5.5625rem] rounded-full nav">
      <div className="relative w-[9.625rem] h-[2.0625rem]">
        <Link href="/">
          <Image src="/logo.png" fill alt="logo" />
        </Link>
      </div>
      <nav>
        <ul className="flex gap-[3.125rem]">
          <Link href="/info">
            <li className="nav-item">Why Dreambill</li>
          </Link>
          <Link href="/contact?mode=send-a-message">
            <li className="nav-item">Contact us</li>
          </Link>
          <Link href="/pricing">
            <li className="nav-item">Pricing</li>
          </Link>
          <li className="nav-item">Blog</li>
        </ul>
      </nav>
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
    </div>
  );
};

export default Navbar;
