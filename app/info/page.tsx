import React from "react";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Footer from "@/components/Footer";

const page = () => {
  return (
    <main>
      <section className="bg-[#085C60]">
        <header className="py-[1.87rem]">
          <Navbar />
        </header>
        <div className="flex justify-between w-[75rem] mx-auto pb-[6.25rem]">
          <div className="relative w-[31.5625rem] h-[19.34875rem]">
            <Image src="/team.png" fill alt="working team" />
            <Image
              src="/star.png"
              width={102}
              height={102}
              alt="star"
              className="absolute top-[60%] left-8 transform -translate-x-1/2 -translate-y-1/2"
            />
          </div>
          <div className="flex flex-col items-start gap-[2.04]">
            <h1 className="text-white text-[4rem] font-bold leading-[4.8rem] tracking-[-0.03125rem]">
              Hi, we're
              <br /> Dreambill
            </h1>
            <p className="text-white text-lg font-[400] w-[32.125rem]">
              We simplify employee management tasks – like payroll, scheduling,
              time tracking, benefits, and hiring – so compnies owners can focus
              on everything else.
            </p>
          </div>
        </div>
      </section>
      <section className="flex justify-between w-[75rem] mx-auto py-[4rem] my-[2.38rem]">
        <div className="flex flex-col items-start gap-[1.rem] w-[36rem] pr-[1.56rem] pb-[1.5rem]">
          <div className="flex flex-col gap-4">
            <h3 className="text-[#085C60] text-sm font-bold leading-6 tracking-[0.125rem] uppercase">
              Our Customers come first
            </h3>
            <h1 className="text-[#090628] text-[2.4375rem] font-extrabold leading-[3rem]">
              Blah blah blah blah blah
            </h1>
          </div>
          <div className="flex flex-col gap-[1.25rem]">
            <p>
              As a small, independent American business, we understand it takes
              a lot to keep your company strong.
            </p>
            <p>
              From automating the not-so-small tasks to providing exceptional
              customer support, we’re always focused on making it easier to
              manage your business.
            </p>
          </div>
        </div>
        <div className="relative w-[33.75rem] h-[19.75rem] shrink-0">
          <Image src="/team2.png" fill alt="working team" />
        </div>
      </section>
      <section className="bg-[#EEFCF9]">
        <div className="flex justify-between items-center w-[75rem] mx-auto py-[3.75rem]">
          <div className="relative w-[33.75rem] h-[33.75rem]">
            <Image src="/hands-avatar.png" fill alt="avatar shows hands" />
          </div>
          <div className="flex flex-col gap-[1rem] w-[36rem] pl-[1-5rem] pb-[1.5rem]">
            <h3 className="text-[#085C60] text-[0.9375rem] font-bold leading-6 tracking-[0.125rem] uppercase">
              Our mission
            </h3>
            <div className="flex flex-col gap-[1.25rem]">
              <p>
                At Dreambill, our mission is to provide small businesses with
                innovative and reliable payroll & HR solutions that simplify
                their operations, empower their people, and drive success.
              </p>
              <p>
                With our game-changing tools and personalized client
                support,.............................................................................................................
              </p>
              <p>
                We are committed to delivering exceptional technology and
                corresponding service that saves our clients time and money.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="flex flex-col items-center justify-between pt-[3.75rem] pb-[4.75rem]">
          <h3 className="text-[#085C60] text-[0.9375rem] font-bold leading-6 tracking-[0.125rem] uppercase">
            Our Values
          </h3>
          <h1 className="text-[#090628] text-[2.4375rem] font-extrabold leading-[3rem]">
            We believe in:
          </h1>
        </div>
        <ul className="flex justify-center gap-[3.44rem] pb-[5.71rem]">
          <li className="service-item">
            <img src="/device.svg" alt="device" />
            <h1 className="#090628 text-4xl leading-[2.75rem] font-extrabold">
              Mobility
            </h1>
          </li>
          <li className="service-item">
            <img src="/repeat.svg" alt="repeat" />
            <h1 className="#090628 text-4xl leading-[2.75rem] font-extrabold">
              Flexibility
            </h1>
          </li>
          <li className="service-item">
            <img src="/medal.svg" alt="medal" />
            <h1 className="#090628 text-4xl leading-[2.75rem] font-extrabold">
              Reliability
            </h1>
          </li>
          <li className="service-item">
            <img src="/shield.svg" alt="shield" />
            <h1 className="#090628 text-4xl leading-[2.75rem] font-extrabold">
              Security
            </h1>
          </li>
        </ul>
      </section>
      <footer>
        <Footer CardShown />
      </footer>
    </main>
  );
};

export default page;
