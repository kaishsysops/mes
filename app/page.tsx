import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import ServicesBento from "@/components/ServicesBento";
import ApproachSection from "@/components/ApproachSection";
import ProcessSteps from "@/components/ProcessSteps";
import ClientsMarquee from "@/components/ClientsMarquee";
import CtaBanner from "@/components/CtaBanner";

export default function Home() {
  return (
    <>
      <Hero />
      <Intro />
      <ServicesBento />
      <ApproachSection />
      <ProcessSteps />
      <ClientsMarquee />
      <CtaBanner />
    </>
  );
}
