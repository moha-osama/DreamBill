"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
import { updateSearchParams } from "@/utils";
import { Col, Form, Input, Row, Select, Button } from "antd";
import { DownOutlined } from "@ant-design/icons";
import Image from "next/image";

const prefixSelector = (
  <Form.Item name="prefix" noStyle>
    <Select
      style={{
        width: 70,
        borderRadius: "0",
        flex: "shrink",
        borderWidth: "0",
        borderBottomWidth: "1px",
      }}
    >
      <Select.Option value="86">+86</Select.Option>
      <Select.Option value="87">+87</Select.Option>
    </Select>
  </Form.Item>
);

const ContactForm = () => {
  const router = useRouter();
  const params = useSearchParams();
  const formMode = params.get("mode") === "send-a-message";
  const [messageForm, setMessageForm] = useState(formMode);
  const switchModeHandler = () => {
    setMessageForm((prevMode) => !prevMode);
    const newPathName = updateSearchParams(
      "mode",
      `${messageForm ? "book-a-demo" : "send-a-message"}`
    );
    router.push(newPathName);
  };

  return (
    <>
      <div className="flex flex-col items-center text-center">
        <h1 className="text-[#085C60] text-[4rem] font-bold leading-normal tracking-[-0.03125rem]">
          {messageForm ? "Contact Us" : "Book a Demo"}
        </h1>
        {messageForm && (
          <p className="text-[#717171] font-medium text-lg">
            Any question? Just write us a message!
          </p>
        )}
      </div>
      <div className="flex w-[75rem] mx-auto my-[3.75rem] shadow-lg">
        <div className="relative bg-[#085C60] w-[31.25rem] h-[41.6875rem] shrink-0 pt-[3.13rem] pl-[2.5rem] rounded-l-lg">
          <div className="flex flex-col items-start gap-[6.94rem]">
            <div>
              <h1 className="text-white text-[1.75rem] font-[600] leading-normal">
                {messageForm
                  ? "Contact Information"
                  : "Interested in Dreambill"}
              </h1>
              <p className="text-[#C9C9C9] text-lg font-[400] leading-norma; w-[27.125rem]">
                {messageForm
                  ? "Send us a message and we would reply"
                  : "Schedule a call with one of our experts to learn how you can uncomplicate your payroll & HR operations"}
              </p>
            </div>
            <ul className="flex flex-col gap-[3.13rem]">
              <li className="contact-form-info">
                <img src="/phone.svg" />
                <p className="text-white text-base font-[400]">
                  +1012 3456 789
                </p>
              </li>
              <li className="contact-form-info">
                <img src="/email.svg" />
                <p className="text-white text-base font-[400]">
                  support@dreambill.com
                </p>
              </li>
              <li className="contact-form-info">
                <img src="/location.svg" />
                <p className="text-white text-base font-[400]">
                  132 Dartmouth Street Boston,
                  <br /> Massachusetts 02156 United States
                </p>
              </li>
            </ul>
          </div>
          <Image
            className="absolute bottom-[5.5rem] right-[5.5rem]"
            src="/ellipse4.png"
            width={138}
            height={138}
            alt="ellipse"
          />
          <Image
            className="absolute right-0 bottom-0"
            src="/ellipse3.png"
            width={200}
            height={200}
            alt="ellipse"
          />
        </div>
        <Form
          layout="vertical"
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            background: "white",
            borderTopRightRadius: "0.5rem",
            borderBottomRightRadius: "0.5rem",
          }}
        >
          <Row className="flex gap-[2.45rem]">
            <Col>
              <Form.Item
                name="firstName"
                label={
                  <label className="text-[#8D8D8D] font-medium text-xs leading-5">
                    First Name
                  </label>
                }
              >
                <Input
                  style={{
                    borderRadius: "0",
                    width: "17rem",
                    flex: "shrink",
                    borderWidth: "0",
                    borderBottomWidth: "1px",
                    outline: "none",
                  }}
                />
              </Form.Item>
            </Col>
            <Col>
              <Form.Item
                name="lastName"
                label={
                  <label className="text-[#8D8D8D] font-medium text-xs leading-5">
                    Last Name
                  </label>
                }
              >
                <Input
                  style={{
                    borderRadius: "0",
                    width: "17rem",
                    flex: "shrink",
                    borderWidth: "0",
                    borderBottomWidth: "1px",
                  }}
                />
              </Form.Item>
            </Col>
          </Row>
          <Row className="flex gap-[2.45rem]">
            <Col>
              <Form.Item
                name="email"
                label={
                  <label className="text-[#8D8D8D] font-medium text-xs leading-5">
                    Email
                  </label>
                }
              >
                <Input
                  style={{
                    borderRadius: "0",
                    width: "17rem",
                    flex: "shrink",
                    borderWidth: "0",
                    borderBottomWidth: "1px",
                  }}
                />
              </Form.Item>
            </Col>
            <Col>
              <Form.Item
                name="phoneNumber"
                label={
                  <label className="text-[#8D8D8D] font-medium text-xs leading-5">
                    Phone Numbere
                  </label>
                }
              >
                <Input
                  addonBefore={prefixSelector}
                  style={{
                    borderRadius: "0",
                    width: "17rem",
                    flex: "shrink",
                    borderWidth: "0",
                    borderBottomWidth: "1px",
                  }}
                />
              </Form.Item>
            </Col>
          </Row>
          {messageForm ? (
            <Row className="">
              <Form.Item
                name="message"
                label={
                  <label className="text-[#8D8D8D] font-medium text-xs leading-5">
                    Message
                  </label>
                }
              >
                <Input.TextArea
                  style={{
                    borderRadius: "0",
                    width: "17rem",
                    flex: "shrink",
                    borderWidth: "0",
                    borderBottomWidth: "1px",
                    minWidth: "37.31188rem",
                  }}
                  placeholder="Write your message.."
                />
              </Form.Item>
            </Row>
          ) : (
            <>
              <Row className="flex gap-[2.45rem]">
                <Col>
                  <Form.Item
                    name="companyName"
                    label={
                      <label className="text-[#8D8D8D] font-medium text-xs leading-5">
                        Company name
                      </label>
                    }
                  >
                    <Input
                      style={{
                        borderRadius: "0",
                        width: "17rem",
                        flex: "shrink",
                        borderWidth: "0",
                        borderBottomWidth: "1px",
                      }}
                    />
                  </Form.Item>
                </Col>
                <Col>
                  <Form.Item
                    name="companyWebsite"
                    label={
                      <label className="text-[#8D8D8D] font-medium text-xs leading-5">
                        Company website
                      </label>
                    }
                  >
                    <Input
                      style={{
                        borderRadius: "0",
                        width: "17rem",
                        flex: "shrink",
                        borderWidth: "0",
                        borderBottomWidth: "1px",
                      }}
                    />
                  </Form.Item>
                </Col>
              </Row>
              <Row className="flex gap-[2.45rem]">
                <Col>
                  <Form.Item
                    name="companySize"
                    label={
                      <label className="text-[#8D8D8D] font-medium text-xs leading-5">
                        Company size
                      </label>
                    }
                  >
                    <Input
                      addonAfter={<DownOutlined />}
                      style={{
                        borderRadius: "0",
                        width: "17rem",
                        flex: "shrink",
                        borderWidth: "0",
                        borderBottomWidth: "1px",
                      }}
                    />
                  </Form.Item>
                </Col>
                <Col>
                  <Form.Item
                    name="category"
                    label={
                      <label className="text-[#8D8D8D] font-medium text-xs leading-5">
                        Category
                      </label>
                    }
                  >
                    <Input
                      addonAfter={<DownOutlined />}
                      style={{
                        borderRadius: "0",
                        width: "17rem",
                        flex: "shrink",
                        borderWidth: "0",
                        borderBottomWidth: "1px",
                      }}
                    />
                  </Form.Item>
                </Col>
              </Row>
            </>
          )}
          <Form.Item
            style={{
              width: "100%",
              display: "flex",
              paddingTop: "9.31rem",
              paddingRight: "3.12rem",
              justifyContent: "end",
            }}
          >
            <Button
              style={{
                width: "13.4375rem",
                background: "#085C60",
                padding: "1rem 1.5rem",
                color: "white",
                fontSize: "1rem",
                fontWeight: "600",
                lineHeight: "1.5rem",
                borderWidth: "1px",
                borderColor: "white",
                height: "3.5rem",
              }}
            >
              {messageForm ? "Send message" : "Request a demo"}
            </Button>
            <p className="text-[#8D8D8D] font-medium text-xs leading-5 mt-[1rem]">
              Or{" "}
              <span
                onClick={switchModeHandler}
                className="hover:text-[#085C60] hover:cursor-pointer"
              >
                {messageForm ? "Request a demo" : "Send message"}
              </span>
            </p>
          </Form.Item>
        </Form>
      </div>
    </>
  );
};

export default ContactForm;
