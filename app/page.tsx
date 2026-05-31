import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Process from "@/components/Process";
import TechStack from "@/components/TechStack";
import AISection from "@/components/AISection";
import Portfolio from "@/components/Portfolio";
import AboutSection from "@/components/AboutSection";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const CustomCursor = dynamic(() => import("@/components/CustomCursor"), { ssr: false });
const WhatsAppButton = dynamic(() => import("@/components/WhatsAppButton"), { ssr: false });
const IntroScreen = dynamic(() => import("@/components/IntroScreen"), { ssr: false });

export default function Home() {
  return (
    <>
      <IntroScreen />
      <CustomCursor />
      <WhatsAppButton />
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Process />
        <TechStack />
        <AISection />
        <Portfolio />
        <AboutSection />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
