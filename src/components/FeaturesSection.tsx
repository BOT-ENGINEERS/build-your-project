import { Users, Package, Wrench, Shield } from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Structured Mentorship",
    description: "Step-by-step guidance from experienced engineers who understand your curriculum.",
  },
  {
    icon: Package,
    title: "Affordable Components",
    description: "Access quality components at student-friendly prices without breaking the bank.",
  },
  {
    icon: Wrench,
    title: "Supervised Lab Sessions",
    description: "Hands-on sessions where you build, test, and learn with expert supervision.",
  },
  {
    icon: Shield,
    title: "100% Ethical",
    description: "You build your project. You understand your viva. You grow your skills.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-24 px-4 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How We <span className="text-gradient">Help You Succeed</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Everything you need to build your project the right way
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group card-gradient border border-border rounded-2xl p-6 transition-all duration-300 hover:border-primary/50 hover:glow-primary"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>

              <h3 className="text-lg font-semibold text-foreground mb-3">
                {feature.title}
              </h3>

              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
