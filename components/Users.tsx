import React from "react";
import Image from "next/image";

const Users = () => {
  return (
    <section className="mt-[4rem] mb-[6.81rem] w-[71.5rem] mx-auto">
      <h1 className="text-[#085C60] text-5xl font-bold leading-[3.9rem]">
        Users love Dreambill
      </h1>
      <div className="flex justify-center gap-[9.25rem]">
        <div className="flex flex-col gap-[1.25rem] w-[31.125rem]">
          <div className="relative w-64 h-64">
            <Image src="/userv1.png" fill alt="user" />
          </div>
          <div className="flex flex-col gap-[1rem]">
            <h1 className="text-[#085C60] text-[1.3125rem] font-[400] leading-[1.3rem] tracking-[0.13rem] uppercase">
              Sarah N., CEO of XYZ Company
            </h1>
            <p className="text-[#556F71] text-[1.25rem] font-[400] leading-[131.687%]">
              Efficient, reliable, and hassle-free. This payroll platform
              <br /> has revolutionized our payroll management. Highly
              <br />
              recommended
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-[1.25rem] w-[31.125rem]">
          <div className="relative w-64 h-64">
            <Image src="/userv2.png" fill alt="user" />
          </div>
          <div className="flex flex-col gap-[1rem]">
            <h1 className="text-[#085C60] text-[1.3125rem] font-[400] leading-[1.3rem] tracking-[0.13rem] uppercase">
              Sarah N., CEO of XYZ Company
            </h1>
            <p className="text-[#556F71] text-[1.25rem] font-[400] leading-[131.687%]">
              Using this payroll platform has been a game-changer for
              <br /> our company. It's efficient, user-friendly, and has
              <br />
              streamlined our payroll process.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Users;
