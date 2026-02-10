import { useEffect, useRef, useState } from "react";
import { Mail, Linkedin, Github, Download, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const video = videoRef.current;
    const section = sectionRef.current;
    if (!video || !section) return;

    const handleMetadata = () => {
      const onScroll = () => {
        const rect = section.getBoundingClientRect();
        const sectionHeight = section.offsetHeight - window.innerHeight;
        const progress = Math.min(Math.max(-rect.top / sectionHeight, 0), 1);
        setScrollProgress(progress);

        if (video.duration) {
          video.currentTime = progress * video.duration;
        }
      };

      window.addEventListener("scroll", onScroll, { passive: true });
      return () => window.removeEventListener("scroll", onScroll);
    };

    video.addEventListener("loadedmetadata", handleMetadata);
    // Also try immediately if already loaded
    if (video.readyState >= 1) {
      const cleanup = handleMetadata();
      return () => {
        cleanup?.();
        video.removeEventListener("loadedmetadata", handleMetadata);
      };
    }

    return () => video.removeEventListener("loadedmetadata", handleMetadata);
  }, []);

  // Determine which text phase to show based on scroll progress
  // 0-0.15: Name + headline
  // 0.15-0.35: Sub-headline
  // 0.35-0.55: Secondary line
  // 0.55-0.75: Short intro
  // 0.75-1: Buttons + social
  const getOpacity = (start: number, end: number) => {
    if (scrollProgress < start) return 0;
    if (scrollProgress > end) return 0;
    const fadeIn = Math.min((scrollProgress - start) / 0.05, 1);
    const fadeOut = Math.min((end - scrollProgress) / 0.05, 1);
    return Math.min(fadeIn, fadeOut);
  };

  const nameOpacity = scrollProgress < 0.1 ? 1 : Math.max(0, 1 - (scrollProgress - 0.1) / 0.08);
  const subOpacity = getOpacity(0.15, 0.35);
  const secOpacity = getOpacity(0.35, 0.55);
  const introOpacity = getOpacity(0.55, 0.75);
  const ctaOpacity = getOpacity(0.7, 1);

  return (
    <section ref={sectionRef} className="relative" style={{ height: "500vh" }}>
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* Video background */}
        <video
          ref={videoRef}
          src="/Ben-Hero-Video-Landscape.mp4"
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-background/40" />

        {/* Text content — bottom center */}
        <div className="absolute inset-0 flex items-end justify-center text-center pb-24 px-6">
          <div className="max-w-4xl space-y-4">
            {/* Phase 1: Name + headline */}
            <div
              className="transition-opacity duration-300"
              style={{ opacity: nameOpacity }}
            >
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground font-mono">
                Ben Paul Richard
              </h1>
              <p className="mt-3 text-lg md:text-xl text-primary font-mono tracking-wider">
                Control & Quantitative Systems Engineer
              </p>
            </div>

            {/* Phase 2: Sub-headline */}
            <div
              className="absolute bottom-24 left-0 right-0 px-6 transition-opacity duration-300"
              style={{ opacity: subOpacity }}
            >
              <div className="max-w-4xl mx-auto">
                <p className="text-base md:text-lg text-foreground/90 font-serif">
                  MSc Advanced Control Systems & Financial Engineering | BEng Mechanical Engineering
                </p>
                <p className="mt-2 text-sm md:text-base text-muted-foreground font-mono tracking-wide">
                  Robotics • Control • Quantitative Modeling • AI & Machine Learning
                </p>
              </div>
            </div>

            {/* Phase 3: Secondary line */}
            <div
              className="absolute bottom-24 left-0 right-0 px-6 transition-opacity duration-300"
              style={{ opacity: secOpacity }}
            >
              <div className="max-w-3xl mx-auto">
                <p className="text-base md:text-lg text-foreground/85 font-serif leading-relaxed">
                  Multidisciplinary Engineer with expertise in Mechanical Systems and Design,
                  Control Engineering, Robotics, and Quantum Computing.
                </p>
              </div>
            </div>

            {/* Phase 4: Short intro */}
            <div
              className="absolute bottom-24 left-0 right-0 px-6 transition-opacity duration-300"
              style={{ opacity: introOpacity }}
            >
              <div className="max-w-3xl mx-auto">
                <p className="text-sm md:text-base text-foreground/80 font-serif leading-relaxed">
                  Innovative control systems engineer with hands-on experience in mechanical design,
                  control systems, embedded firmware, robotics, and hardware-in-the-loop validation.
                  Passionate about low-level systems, optimization, and intelligent automation.
                </p>
              </div>
            </div>

            {/* Phase 5: CTA + social */}
            <div
              className="absolute bottom-16 left-0 right-0 px-6 transition-opacity duration-300"
              style={{ opacity: ctaOpacity }}
            >
              <div className="max-w-4xl mx-auto space-y-6">
                <div className="flex flex-wrap justify-center gap-4">
                  <Button asChild variant="default" size="lg" className="font-mono text-xs uppercase tracking-wider">
                    <a href="#projects">View Projects</a>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="font-mono text-xs uppercase tracking-wider border-primary/30 hover:border-primary">
                    <a href="/ARM_Ben_Updated_Resume_1.pdf" download>
                      <Download size={16} /> Resume
                    </a>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="font-mono text-xs uppercase tracking-wider border-primary/30 hover:border-primary">
                    <a href="#contact">Contact Me</a>
                  </Button>
                </div>

                <div className="flex justify-center gap-5">
                  <a href="mailto:benpaulrichard3@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                    <Mail size={20} />
                  </a>
                  <a href="https://www.linkedin.com/in/ben-paul-richard/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                    <Linkedin size={20} />
                  </a>
                  <a href="https://github.com/Ben-Richard" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                    <Github size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        {scrollProgress < 0.05 && (
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce text-muted-foreground">
            <ArrowDown size={20} />
          </div>
        )}
      </div>
    </section>
  );
};

export default HeroSection;
