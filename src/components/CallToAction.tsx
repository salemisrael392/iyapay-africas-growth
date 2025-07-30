import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const CallToAction = () => {
  return (
    <section className="py-20 bg-gradient-primary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 bg-white rounded-full"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-white rounded-full"></div>
        <div className="absolute bottom-20 left-32 w-12 h-12 bg-white rounded-full"></div>
        <div className="absolute bottom-32 right-16 w-24 h-24 bg-white rounded-full"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <Card className="max-w-4xl mx-auto bg-white/95 backdrop-blur-sm border-0 shadow-soft">
          <CardContent className="p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6">
              Don't Miss Out on ASCEND 2024!
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Secure your spot at the most exciting summer camp experience. 
              Limited spaces available for children and teens aged 9-21!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button variant="hero" size="lg" className="text-lg px-8 py-4">
                Register Now - ₦25,000
              </Button>
              <Button variant="outline-green" size="lg" className="text-lg px-8 py-4">
                Contact for Info
              </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-2">July 31-Aug 3</div>
                <div className="text-muted-foreground">4 Days of Fun</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-2">Ages 9-21</div>
                <div className="text-muted-foreground">All Welcome</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-2">₦25,000</div>
                <div className="text-muted-foreground">Registration Fee</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default CallToAction;