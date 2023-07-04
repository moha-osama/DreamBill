"use client";

import React from "react";
import Image from "next/image";
import { Button, Form, Input, Select } from "antd";

let marginBottom = "0.85rem";

const page = () => {
  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select style={{ width: 70 }}>
        <Select.Option value="86">+86</Select.Option>
        <Select.Option value="87">+87</Select.Option>
      </Select>
    </Form.Item>
  );
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
      </header>
      <div className="flex flex-col w-[28.5rem] mx-auto mt-[1.5rem] gap-[1.375rem] ">
        <h1 className="text-[#17191C] text-xl leading-7 font-medium">
          Create a company account
        </h1>
        <Form layout="vertical">
          <Form.Item
            style={{ marginBottom: marginBottom }}
            name="companyName"
            label="Company Name"
            className="text-[#3C4049] text-xs font-medium leading-4 tracking-[0.015rem]"
          >
            <Input />
          </Form.Item>
          <Form.Item
            style={{ marginBottom: marginBottom }}
            name="country"
            label="Country"
            className="text-[#3C4049] text-xs font-medium leading-4 tracking-[0.015rem]"
          >
            <Select className="h-[2.5rem]" />
          </Form.Item>
          <Form.Item
            style={{ marginBottom: marginBottom }}
            name="fullName"
            label="Full Name"
            className="text-[#3C4049] text-xs font-medium leading-4 tracking-[0.015rem]"
          >
            <Input />
          </Form.Item>
          <Form.Item
            style={{ marginBottom: marginBottom }}
            name="email"
            label="Email address"
            className="text-[#3C4049] text-xs font-medium leading-4 tracking-[0.015rem]"
          >
            <Input />
          </Form.Item>
          <Form.Item
            style={{ marginBottom: marginBottom }}
            name="email"
            label="Email address"
            className="text-[#3C4049] text-xs font-medium leading-4 tracking-[0.015rem]"
          >
            <Input addonBefore={prefixSelector} />
          </Form.Item>
          <Form.Item
            style={{ marginBottom: marginBottom }}
            name="password"
            label="Password"
            className="text-[#3C4049] text-xs font-medium leading-4 tracking-[0.015rem]"
          >
            <Input.Password />
          </Form.Item>
          <Form.Item
            style={{ marginBottom: "2rem" }}
            name="password"
            label="Confirm Password"
            className="text-[#3C4049] text-xs font-medium leading-4 tracking-[0.015rem]"
          >
            <Input.Password />
          </Form.Item>
          <Form.Item>
            <Button
              style={{
                background: "#085C60",
                fontSize: "0.875rem",
                lineHeight: "1.25rem",
                color: "white",
                fontWeight: "700",
              }}
              block
              className="h-[2.5rem]"
            >
              Create account
            </Button>
          </Form.Item>
        </Form>
      </div>
    </>
  );
};

export default page;
