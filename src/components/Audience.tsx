import { Button } from "@/components/ui/button";
import childrenActivities from "@/assets/children-activities.jpg";
import teenagersLeadership from "@/assets/teenagers-leadership.jpg";

const Audience = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-primary mb-4">
            Who Can Join
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            ASCEND Summer Camp welcomes children and teens from all backgrounds to grow together
          </p>
        </div>
        
        <div className="space-y-20">
          {/* Children Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h3 className="text-2xl md:text-4xl font-bold text-primary mb-6">
                Children (Ages 9-14)
              </h3>
              <p className="text-lg text-muted-foreground mb-6">
                Our younger campers enjoy age-appropriate activities in a safe, nurturing environment. 
                Every child will build confidence, make new friends, and grow in their faith through 
                fun and engaging experiences.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center mt-1">
                    <div className="w-2 h-2 bg-primary-foreground rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary">Interactive Bible Stories</h4>
                    <p className="text-muted-foreground">Fun and engaging Bible lessons designed for young minds</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center mt-1">
                    <div className="w-2 h-2 bg-primary-foreground rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary">Creative Arts & Crafts</h4>
                    <p className="text-muted-foreground">Hands-on projects that encourage creativity and self-expression</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center mt-1">
                    <div className="w-2 h-2 bg-primary-foreground rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary">Team Games & Sports</h4>
                    <p className="text-muted-foreground">Fun outdoor activities that build teamwork and friendships</p>
                  </div>
                </div>
              </div>
              <Button variant="success" size="lg">
                Register Your Child
              </Button>
            </div>
            <div className="order-1 lg:order-2">
              <img 
                src={childrenActivities} 
                alt="Children enjoying camp activities" 
                className="rounded-lg shadow-green w-full h-auto"
              />
            </div>
          </div>
          
          {/* Teens Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src={teenagersLeadership} 
                alt="Teenagers in leadership activities" 
                className="rounded-lg shadow-green w-full h-auto"
              />
            </div>
            <div>
              <h3 className="text-2xl md:text-4xl font-bold text-primary mb-6">
                Teens & Young Adults (Ages 15-21)
              </h3>
              <p className="text-lg text-muted-foreground mb-6">
                Our older campers experience deeper spiritual growth and leadership development. 
                They'll be challenged to step into their potential and become leaders in their 
                communities and beyond.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center mt-1">
                    <div className="w-2 h-2 bg-primary-foreground rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary">Leadership Training</h4>
                    <p className="text-muted-foreground">Develop leadership skills and mentor younger campers</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center mt-1">
                    <div className="w-2 h-2 bg-primary-foreground rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary">Deep Bible Study</h4>
                    <p className="text-muted-foreground">In-depth exploration of faith and spiritual growth</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center mt-1">
                    <div className="w-2 h-2 bg-primary-foreground rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary">Adventure Challenges</h4>
                    <p className="text-muted-foreground">Exciting activities that build confidence and character</p>
                  </div>
                </div>
              </div>
              <Button variant="success" size="lg">
                Join as a Teen Leader
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Audience;