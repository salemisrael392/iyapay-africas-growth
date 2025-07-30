import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Audience from "@/components/Audience";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <Audience />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Index;
