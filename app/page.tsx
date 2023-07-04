import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Image from "next/image";
import Preview from "@/components/Preview";
import Card from "@/components/Card";
import GridItem from "@/components/GridItem";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <header className="my-[1.87rem]">
        <Navbar />
      </header>
      <main>
        <Hero />
        <section className="flex justify-center bg-[#f8fafc] pb-4">
          <div className="flex flex-col gap-[4rem] items-center w-[70rem] mx-auto my-0">
            <div className="text-center pt-[3.75rem] w-[53rem]">
              <h1 className="text-[#085C60] text-5xl font-bold leading-[3.9rem]">
                Smart HR to outsmart the
                <br /> changing world
              </h1>
              <p className="text-[#69727A] text-center font-[400] leading-7 text-lg">
                The world has changed, and it's going to keep changing.
                Dreambill helps your teams to adapt,
                <br /> evolve, and scale by working more effectively. Spend less
                time on mundane tasks and focus more on strategy. Turn data into
                smarter decisions and create experiences your employees will
                love.
              </p>
            </div>
            <div className="flex justify-between w-full">
              <div>
                <div className="flex flex-col items-start w-[22rem] pt-[1.125rem] px-4 pb-4">
                  <h2 className="text-[#2C2E31] text-lg font-bold leading-7">
                    People data & Analytics
                  </h2>
                  <p className="text-[#69727A] leading-5 font-[400]">
                    Connect all your people together in one
                    <br /> place and gain powerful insights
                  </p>
                </div>
                <div className="flex flex-col items-start w-[22rem] pt-[1.125rem] px-4 pb-4 text-card">
                  <h2 className="text-[#085C60] text-lg font-bold leading-7">
                    Performance and Culture
                  </h2>
                  <p className="text-[#69727A] leading-5 font-[400]">
                    Create a culture of high performance
                    <br />
                    teams and see your business scale
                  </p>
                </div>
                <div className="flex flex-col items-start w-[22rem] pt-[1.125rem] px-4 pb-4">
                  <h2 className="text-[#2C2E31] text-lg font-bold leading-7">
                    Hiring and Onboarding
                  </h2>
                  <p className="text-[#69727A] leading-5 font-[400]">
                    Continue to hire and onboard great talent
                    <br />
                    remotely during these times
                  </p>
                </div>
              </div>
              <div className="relative w-[45rem] h-[28rem]">
                <Image quality={100} src="/panel.png" fill alt="group" />
              </div>
            </div>
          </div>
        </section>
        <section>
          <Preview />
        </section>
        <section className="flex gap-[3.75rem] flex-col justify-center text-center mt-[8.25rem] w-[71.25rem] mx-auto my-0">
          <h1 className="text-[#085C60] text-5xl font-bold leading-[3.9rem]">
            Everything you need to create a high
            <br /> performance culture
          </h1>
          <div className="flex justify-center gap-[2.5rem]">
            <Card
              title="Payroll & Expenses"
              description="  Our industry redefining payroll system automates your payroll and
          saves time for everyone."
              icon="/dollar-icon.png"
            />
            <Card
              title="Hiring & Onboarding"
              description="An integrated hiring platform
              for teams to collaborate with
              recruiters and hire good talent."
              icon="/user-icon.png"
            />
            <Card
              title="Performance & Culture"
              description="An engaging culture driven by
              contextual feedback and
              organization aligned goals."
              icon="/bookmark-icon.png"
            />
          </div>
        </section>
        <section className="flex flex-col items-center gap-14 pt-[5rem] pb-[6.68rem] w-[75rem] mx-auto my-[6.62rem] bg-[#F9F7FE] rounded-2xl">
          <div className="flex flex-col gap-[1.37rem]">
            <h1 className="text-[#085C60] text-5xl font-bold leading-[3.9rem]">
              Why choose Dreambill
            </h1>
            <p className="text-[#69727A] leading-5 font-[400]">
              Our guaranteed top-tier service and industry-leading worldwide
              coverage
              <br /> provide peace of mind for any global team.
            </p>
          </div>
          <div className="grid grid-cols-3 grid-rows-2 gap-y-[4.97rem] gap-x-[5.79rem]">
            <GridItem
              title="1.25min"
              description="First response time with 24/7 in -app support"
            />
            <GridItem
              title=" 200+"
              description="  In-house tax, payroll and legal specialists"
            />
            <GridItem
              title="100+"
              description=" Owned entities worldwide to hire and pay anywhere"
            />
            <GridItem
              title="86hrs"
              description=" Saved by customers monthly automating HR admin"
            />
            <GridItem
              title="15+"
              description="Flexible payment methods to pay your team"
            />
            <GridItem
              title="$210,000+"
              description="Of entity set up costs saved per country"
            />
          </div>
        </section>
        <section className="flex flex-col gap-8 mt-[5.9rem] pb-[5.37rem] w-[73rem] mx-auto border-b border-[#C4C4C4]">
          <div className="flex flex-col items-start justify-center gap-[1.19rem]">
            <p className="text-[#657085] text-lg font-[400] tracking-[0.1125rem] uppercase leading-5">
              Meet our Customers
            </p>
            <h1 className="text-[#1C202B] text-[2.5rem] font-bold tracking-wider leading-[3rem]">
              Supporting
              <span className="text-[#085C60]">
                {" "}
                9,000 growing companies
              </span>{" "}
              to
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
      </main>
      <footer>
        <Footer CardShown />
      </footer>
    </>
  );
}
