// ...existing code...
import { XCircle, CheckCircle } from "lucide-react";

const ProblemSection = () => {
  return (
    <section className="relative py-24 px-4">
      <div className="max-w-4xl mx-auto">

        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-white">
          Don't Buy Your Project.{" "}
          <span className="text-white">Build It With Guidance.</span>
        </h2>

        <div className="space-y-6 text-lg text-muted-foreground leading-relaxed mb-12">
          <p>
            Many students feel stuck, overwhelmed, or pressed for time — that's why so many end up buying ready-made course projects. It seems like a shortcut, but it{" "}
            <span className="text-destructive font-medium">destroys your learning</span>, adds{" "}
            <span className="text-destructive font-medium">academic risk</span>, and gives you{" "}
            <span className="text-destructive font-medium">no skills for your future career</span>.
          </p>
        </div>

        {/* Bot Engineers Philosophy */}
        <div className="card-gradient border border-border rounded-2xl p-8 mb-12">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
              <CheckCircle className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                At BOT Engineers, we believe in a different approach
              </h3>
              <p className="text-muted-foreground">
                <span className="text-primary font-medium">Helping is allowed, cheating is not.</span>{" "}
                You're not supposed to struggle alone. You're supposed to learn, experiment, and build — and we're here to support that journey.
              </p>
            </div>
          </div>

          <p className="text-muted-foreground pl-16">
            We provide structured mentorship, affordable components, supervised lab sessions, and guidance from experienced engineers.{" "}
            <span className="text-foreground font-medium">You build your project. You understand your viva. You grow your skills.</span>
          </p>
        </div>

      </div>
    </section>
  );
};

export default ProblemSection;
// ...existing code...