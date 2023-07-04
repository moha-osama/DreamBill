import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

const page = () => {
  return (
    <div>
      <header className="py-[1.87rem]">
        <Navbar />
      </header>
      <main>
        <ContactForm />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default page;
