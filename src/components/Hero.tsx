import { Button } from "@/components/ui/button";
import heroFintech from "@/assets/hero-fintech.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroFintech} 
          alt="African woman using mobile fintech services" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-80"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 md:px-6 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            Empowering African
            <span className="block text-green-light">Market Women & Youths</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-gray-100 max-w-2xl mx-auto">
            IYAPAY provides innovative fintech and health services designed specifically 
            for African market women and youths, building financial independence and wellness.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" className="text-lg px-8 py-4">
              Start Your Journey
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-primary">
              Learn More
            </Button>
          </div>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="text-3xl font-bold text-green-light mb-2">10K+</div>
              <div className="text-gray-200">Women Empowered</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="text-3xl font-bold text-green-light mb-2">25K+</div>
              <div className="text-gray-200">Youths Served</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="text-3xl font-bold text-green-light mb-2">₦5B+</div>
              <div className="text-gray-200">Transactions Processed</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;