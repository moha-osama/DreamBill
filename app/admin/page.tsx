"use client";

import React from "react";
import { Menu, Layout, Input } from "antd";
import { MenuProps } from "antd";
import Image from "next/image";
import {
  IdcardOutlined,
  LayoutOutlined,
  SettingOutlined,
  SearchOutlined,
  BellOutlined,
  MoreOutlined,
} from "@ant-design/icons";

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: "group"
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

const page = () => {
  const items: MenuItem[] = [
    getItem("Dashboard", "1", <LayoutOutlined />),
    getItem("Employees", "2", <IdcardOutlined />),
    getItem("Setting", "3", <SettingOutlined />),
  ];

  return (
    <Layout>
      <Layout.Header
        style={{
          background: "#fff",
          display: "flex",
          alignItems: "center",
          gap: "5.19rem",
          height: "6.375rem",
        }}
        className="border-[#E8E8E8] border-b"
      >
        <div className="relative w-[12.24994rem] h-[2.625rem] shrink-0">
          <Image src="/logo.png" fill alt="logo" />
        </div>
        <div className="flex items-center justify-between w-full">
          <Input
            addonBefore={<SearchOutlined />}
            placeholder="Search..."
            style={{ width: "10rem", borderWidth: "none" }}
          />
          <div className="flex items-start justify-center m-[2.28rem] p-[0.47rem] bg-[#EBEBEB] h-[2.8rem] w-[2.8rem] rounded-md">
            <Image
              src="/notification.svg"
              width={30}
              height={30}
              alt="notification"
            />
            {/* <BellOutlined className="text-xl text-[#898A8D] font-bold" /> */}
          </div>
        </div>
      </Layout.Header>
      <Layout>
        <Layout.Sider
          width={273}
          style={{ height: "100vh", background: "white" }}
          className="border-[#E8E8E8] border-r"
        >
          <div className="bg-white flex items-center px-[2rem] py-[1.5rem] justify-between">
            <div className="flex gap-[0.75rem] items-center">
              <div className="relative w-[3.25rem] h-[3.25rem] shrink-0">
                <Image src="/manger.png" fill alt="manger pic" />
              </div>
              <div className="flex flex-col">
                <h2 className="text-black text-lg leading-normal tracking-[0.01125rem] font-bold">
                  Gavano
                </h2>
                <p className="text-[#A4A4A4] text-[0.8125rem] font-[400] tracking-[0.00813rem] leading-normal ">
                  HR Manager
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center w-[1.90931rem] h-[1.90931rem] bg-[#EBEBEB] rounded-md">
              <MoreOutlined className="rotate-90" />
            </div>
          </div>
          <Menu
            items={items}
            mode="inline"
            defaultSelectedKeys={["1"]}
            style={{
              fontSize: "1.18569rem",
              fontWeight: "400",
              color: "#0C0C0D",
              letterSpacing: "0.01188rem",
              lineHeight: "normal",
            }}
          />
        </Layout.Sider>
        <Layout>
          <Layout.Content style={{}}>Content</Layout.Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default page;
