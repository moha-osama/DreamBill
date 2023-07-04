import Image from "next/image";
import React from "react";

const Customers = () => {
  return (
    <section className="flex flex-col gap-8 mt-[5.9rem] pb-[5.37rem] w-[73rem] mx-auto border-b border-[#C4C4C4]">
      <div className="flex flex-col items-start justify-center gap-[1.19rem]">
        <p className="text-[#657085] text-lg font-[400] tracking-[0.1125rem] uppercase leading-5">
          Meet our Customers
        </p>
        <h1 className="text-[#1C202B] text-[2.5rem] font-bold tracking-wider leading-[3rem]">
          Supporting
          <span className="text-[#085C60]"> 9,000 growing companies</span> to
          <br />
          manage their HR.
        </h1>
      </div>
      <div className="flex items-center gap-[3.69rem]">
        <Image src="/c5.png" width={128} height={64} alt="company logo" />
        <Image src="/c1.png" width={128} height={64} alt="company logo" />
        <Image src="/c2.png" width={128} height={64} alt="company logo" />
        <Image src="/c4.png" width={128} height={64} alt="company logo" />
        <Image src="/c3.png" width={128} height={64} alt="company logo" />
      </div>
    </section>
  );
};

export default Customers;
