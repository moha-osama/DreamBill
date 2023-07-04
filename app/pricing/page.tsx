import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Users from "@/components/Users";
import Customers from "@/components/Customers";
import StanderdPricingCard from "@/components/StanderdPricingCard";
import CustomPricingCard from "@/components/CustomPricingCard";

const page = () => {
  const features = [
    { id: "f1", title: "Free 15-day trial" },
    { id: "f2", title: "Unlimited Team Members" },
    { id: "f3", title: "Cancel Anytime" },
  ];
  return (
    <>
      <header className="my-[1.87rem]">
        <Navbar />
      </header>
      <main>
        <section>
          <div className="w-[49rem] mx-auto flex flex-col text-center">
            <h1 className="text-[#085C60] text-[4rem] font-bold leading-normal tracking-[-0.03125rem]">
              Plans that fits your needs
            </h1>
            <p className="text-[#848199] text-[1.125rem] font-medium leading-normal">
              Whether your time-saving automation needs are large or small,
              we’re here to help you scale.
            </p>
          </div>
          <ul className="flex justify-center gap-[4.81rem] pt-[1.5rem]">
            {features.map((item) => (
              <li key={item.id} className="flex gap-[1.69rem]">
                <img src="/mark.svg" className="vector" />
                <h3 className="text-black font-semibold text-lg leading-normal">
                  {item.title}
                </h3>
              </li>
            ))}
          </ul>
        </section>
        <section className="w-[75rem] mx-auto my-[6.5rem]">
          <div className="flex justify-between">
            <StanderdPricingCard />
            <CustomPricingCard />
          </div>
        </section>
        <Customers />
        <Users />
      </main>
      <footer>
        <Footer CardShown />
      </footer>
    </>
  );
};

export default page;
