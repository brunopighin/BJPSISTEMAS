import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Process from "@/components/Process";
import AISection from "@/components/AISection";
import Portfolio from "@/components/Portfolio";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const CustomCursor = dynamic(() => import("@/components/CustomCursor"), { ssr: false });
const WhatsAppButton = dynamic(() => import("@/components/WhatsAppButton"), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      <CustomCursor />
      <WhatsAppButton />
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Process />
        <AISection />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
