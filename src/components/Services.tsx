import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CreditCard, HeartHandshake, Smartphone, TrendingUp, Shield, Users } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <CreditCard className="h-12 w-12" />,
      title: "Digital Payments",
      description: "Seamless mobile money transfers, bill payments, and merchant services tailored for market women.",
      features: ["Mobile Transfers", "Bill Payments", "Merchant Services"]
    },
    {
      icon: <TrendingUp className="h-12 w-12" />,
      title: "Microfinance",
      description: "Access to micro-loans and savings products designed to help grow your business and secure your future.",
      features: ["Micro-loans", "Savings Plans", "Investment Options"]
    },
    {
      icon: <HeartHandshake className="h-12 w-12" />,
      title: "Health Services",
      description: "Affordable healthcare access, telemedicine consultations, and health insurance for you and your family.",
      features: ["Telemedicine", "Health Insurance", "Wellness Programs"]
    },
    {
      icon: <Smartphone className="h-12 w-12" />,
      title: "Financial Literacy",
      description: "Educational programs and tools to improve financial knowledge and business management skills.",
      features: ["Training Programs", "Digital Tools", "Mentorship"]
    },
    {
      icon: <Shield className="h-12 w-12" />,
      title: "Secure Transactions",
      description: "Bank-grade security ensures your money and personal information are always protected.",
      features: ["End-to-end Encryption", "Fraud Protection", "24/7 Monitoring"]
    },
    {
      icon: <Users className="h-12 w-12" />,
      title: "Community Support",
      description: "Join a network of empowered women and youths, sharing knowledge and supporting each other's growth.",
      features: ["Peer Networks", "Success Stories", "Community Events"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-primary mb-4">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive fintech and health solutions designed specifically for African market women and youths
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-green transition-all duration-300 hover:scale-105 border-border/50">
              <CardHeader className="text-center">
                <div className="flex justify-center mb-4 text-primary">
                  {service.icon}
                </div>
                <CardTitle className="text-xl text-primary">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center mb-4 text-base">
                  {service.description}
                </CardDescription>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;