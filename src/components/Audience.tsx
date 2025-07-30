import { Button } from "@/components/ui/button";
import africanMarketWomen from "@/assets/african-market-women.jpg";
import africanYouthsTech from "@/assets/african-youths-tech.jpg";

const Audience = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-primary mb-4">
            Built For You
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Understanding the unique needs of African market women and youths
          </p>
        </div>
        
        <div className="space-y-20">
          {/* Market Women Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h3 className="text-2xl md:text-4xl font-bold text-primary mb-6">
                For Market Women
              </h3>
              <p className="text-lg text-muted-foreground mb-6">
                We understand the challenges you face managing your business, supporting your family, 
                and planning for the future. IYAPAY provides the financial tools and health services 
                you need to thrive.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center mt-1">
                    <div className="w-2 h-2 bg-primary-foreground rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary">Simple Mobile Payments</h4>
                    <p className="text-muted-foreground">Easy-to-use payment solutions that work on any phone</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center mt-1">
                    <div className="w-2 h-2 bg-primary-foreground rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary">Business Growth Loans</h4>
                    <p className="text-muted-foreground">Flexible micro-loans to expand your market stall or inventory</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center mt-1">
                    <div className="w-2 h-2 bg-primary-foreground rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary">Family Health Coverage</h4>
                    <p className="text-muted-foreground">Affordable healthcare plans for you and your loved ones</p>
                  </div>
                </div>
              </div>
              <Button variant="success" size="lg">
                Join Market Women Network
              </Button>
            </div>
            <div className="order-1 lg:order-2">
              <img 
                src={africanMarketWomen} 
                alt="African market women trading" 
                className="rounded-lg shadow-green w-full h-auto"
              />
            </div>
          </div>
          
          {/* Youths Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src={africanYouthsTech} 
                alt="African youths using technology" 
                className="rounded-lg shadow-green w-full h-auto"
              />
            </div>
            <div>
              <h3 className="text-2xl md:text-4xl font-bold text-primary mb-6">
                For African Youths
              </h3>
              <p className="text-lg text-muted-foreground mb-6">
                Whether you're a student, entrepreneur, or just starting your career, IYAPAY provides 
                the modern financial tools and health services to help you build a successful future.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center mt-1">
                    <div className="w-2 h-2 bg-primary-foreground rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary">Digital-First Banking</h4>
                    <p className="text-muted-foreground">Modern banking designed for the smartphone generation</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center mt-1">
                    <div className="w-2 h-2 bg-primary-foreground rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary">Startup Funding</h4>
                    <p className="text-muted-foreground">Access to capital and mentorship for your business ideas</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center mt-1">
                    <div className="w-2 h-2 bg-primary-foreground rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary">Health & Wellness</h4>
                    <p className="text-muted-foreground">Mental health support and wellness programs for young adults</p>
                  </div>
                </div>
              </div>
              <Button variant="success" size="lg">
                Start Your Youth Journey
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Audience;