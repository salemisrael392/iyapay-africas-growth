import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center space-x-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-primary text-primary-foreground font-bold text-lg">
            A
          </div>
          <span className="text-2xl font-bold text-primary">ASCEND</span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#activities" className="text-foreground hover:text-primary transition-colors">
            Activities
          </a>
          <a href="#about" className="text-foreground hover:text-primary transition-colors">
            About Camp
          </a>
          <a href="#contact" className="text-foreground hover:text-primary transition-colors">
            Contact
          </a>
        </nav>
        
        <div className="flex items-center space-x-4">
          <Button variant="outline-green" size="sm">
            Contact Us
          </Button>
          <Button variant="hero" size="sm">
            Register Now
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;