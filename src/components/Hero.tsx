import { Button } from "@/components/ui/button";
import campHero from "@/assets/camp-hero.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={campHero} 
          alt="Children and teenagers enjoying summer camp activities" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-80"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 md:px-6 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            ASCEND
            <span className="block text-green-light">Summer Camp 2024</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-gray-100 max-w-2xl mx-auto">
            Join us for an unforgettable summer experience! ASCEND Summer Camp is designed 
            for children and teens aged 9-21, featuring exciting activities, spiritual growth, 
            and lifelong friendships.
          </p>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 mb-8 max-w-md mx-auto">
            <div className="text-2xl font-bold text-green-light mb-2">July 31 - August 3, 2024</div>
            <div className="text-lg text-gray-200">Registration: ₦25,000</div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" className="text-lg px-8 py-4">
              Register Now
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-primary">
              Learn More
            </Button>
          </div>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="text-3xl font-bold text-green-light mb-2">4 Days</div>
              <div className="text-gray-200">Of Fun & Growth</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="text-3xl font-bold text-green-light mb-2">Ages 9-21</div>
              <div className="text-gray-200">All Welcome</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="text-3xl font-bold text-green-light mb-2">₦25,000</div>
              <div className="text-gray-200">Registration Fee</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;