import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Gamepad2, Music, Palette, Users, Mountain, Star } from "lucide-react";

const Services = () => {
  const activities = [
    {
      icon: <Gamepad2 className="h-12 w-12" />,
      title: "Fun Games & Sports",
      description: "Exciting outdoor games, team sports, and friendly competitions that build character and teamwork.",
      features: ["Outdoor Games", "Team Sports", "Competitions"]
    },
    {
      icon: <Music className="h-12 w-12" />,
      title: "Worship & Music",
      description: "Inspiring worship sessions, music workshops, and opportunities to discover and develop musical talents.",
      features: ["Worship Sessions", "Music Workshops", "Talent Development"]
    },
    {
      icon: <Palette className="h-12 w-12" />,
      title: "Arts & Crafts",
      description: "Creative workshops including painting, crafting, and hands-on projects that encourage artistic expression.",
      features: ["Painting", "Crafting", "Creative Projects"]
    },
    {
      icon: <Users className="h-12 w-12" />,
      title: "Leadership Training",
      description: "Develop leadership skills through interactive sessions, group discussions, and mentorship programs.",
      features: ["Leadership Skills", "Group Sessions", "Mentorship"]
    },
    {
      icon: <Mountain className="h-12 w-12" />,
      title: "Adventure Activities",
      description: "Thrilling outdoor adventures, nature walks, and exploration activities in a safe environment.",
      features: ["Outdoor Adventures", "Nature Walks", "Exploration"]
    },
    {
      icon: <Star className="h-12 w-12" />,
      title: "Spiritual Growth",
      description: "Bible studies, prayer sessions, and spiritual development activities designed for different age groups.",
      features: ["Bible Studies", "Prayer Sessions", "Spiritual Development"]
    }
  ];

  return (
    <section id="activities" className="py-20 bg-gradient-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-primary mb-4">
            Camp Activities
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            An action-packed program designed to inspire, challenge, and help young people ASCEND to new heights
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activities.map((activity, index) => (
            <Card key={index} className="hover:shadow-green transition-all duration-300 hover:scale-105 border-border/50">
              <CardHeader className="text-center">
                <div className="flex justify-center mb-4 text-primary">
                  {activity.icon}
                </div>
                <CardTitle className="text-xl text-primary">{activity.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center mb-4 text-base">
                  {activity.description}
                </CardDescription>
                <ul className="space-y-2">
                  {activity.features.map((feature, featureIndex) => (
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