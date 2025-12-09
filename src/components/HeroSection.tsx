// ...existing code...
import { useEffect, useRef } from "react";
import logo from "@/assets/logo.png";

const HeroSection = () => {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    if (iframeRef.current) {
      iframeRef.current.src = "https://www.youtube.com/embed/JD4cIHOSly0?autoplay=1&rel=0&modestbranding=1&vq=hd1080";
    }
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 py-12 overflow-hidden">
      {/* Background grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
              linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Subtle glow */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-foreground/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Logo */}
        <img 
          src={logo} 
          alt="BOT Engineers" 
          className="h-16 md:h-20 mx-auto mb-8 animate-fade-up"
        />

        <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold mb-8 leading-tight animate-fade-up-delay-1">
          Watch This Before You{" "}
          <span className="text-gradient">Build Your Project</span>
        </h1>

        {/* YouTube Video Container */}
        <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-border glow-primary animate-fade-up-delay-2">
          <iframe
            ref={iframeRef}
            className="w-full h-full"
            src="https://www.youtube.com/embed/JD4cIHOSly0?autoplay=1&rel=0&modestbranding=1&vq=hd1080"
            title="Watch This Before You Build Your Project"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        {/* Scroll indicator */}
        <div className="mt-12 animate-fade-up-delay-3">
          <div className="flex flex-col items-center text-red-500">
            <span className="text-base font-semibold mb-2">Scroll to learn more</span>

            <div className="relative w-10 h-14">
              {/* subtle pulsing ring behind */}
              <div className="absolute inset-0 flex justify-center items-start -z-10">
                <div className="w-full h-full rounded-full animate-ping bg-red-500/10" />
              </div>

              <div className="w-10 h-14 border-2 border-red-300/40 rounded-full flex justify-center pt-3">
                <div className="w-2.5 h-5 bg-red-500 rounded-full animate-bounce" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
// ...existing code...