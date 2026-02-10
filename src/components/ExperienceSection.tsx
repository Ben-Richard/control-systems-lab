import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const AnimatedCounter = ({ target, suffix = "" }: { target: number; suffix?: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          let start = 0;
          const duration = 1500;
          const startTime = performance.now();
          const animate = (now: number) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            setCount(Math.floor(progress * target));
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return <span ref={ref} className="text-primary font-mono font-bold">{count}{suffix}</span>;
};

const experiences = [
  {
    role: "Graduate Trainee Engineer",
    company: "Zebronics India",
    description: "Embedded C/C++ firmware for industrial automation. Implemented motor control loops, debugged firmware using oscilloscopes/logic analyzers, and performed board-level diagnostics.",
    metrics: [
      { label: "System stability improvement", value: 20, suffix: "%" },
      { label: "Commissioning time reduction", value: 25, suffix: "%" },
    ],
  },
  {
    role: "Engineering Intern",
    company: "Guru Services (Voltas SSP)",
    description: "Commissioned HVAC systems, tuned PID loops, implemented cascade control, resolved electrical/control faults, calibrated sensors, optimized reliability.",
    metrics: [],
  },
  {
    role: "Junior Engineer Intern",
    company: "SKI Precision Products",
    description: "CNC programming, CAD design, FEA validation, dimensional quality checks.",
    metrics: [],
  },
  {
    role: "Engineering Intern",
    company: "Integral Coach Factory (Indian Railways)",
    description: "Validated welding parameters and updated WPS documentation to improve manufacturing productivity.",
    metrics: [],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="relative py-24 animated-grid-bg gradient-overlay">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-16 font-mono tracking-tight"
        >
          <span className="text-gradient">Experience</span>
        </motion.h2>

        <div className="max-w-3xl mx-auto relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-border" />

          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="relative pl-12 md:pl-20 pb-12 last:pb-0"
            >
              {/* Timeline dot */}
              <div className="absolute left-2.5 md:left-6.5 top-1.5 w-3 h-3 rounded-full bg-primary border-2 border-background" />

              <div className="bg-card border border-border rounded-lg p-6">
                <p className="text-xs uppercase tracking-wider text-primary font-mono mb-1">{exp.company}</p>
                <h3 className="text-lg font-semibold font-mono text-foreground mb-3">{exp.role}</h3>
                <p className="text-sm text-foreground/80 font-serif leading-relaxed">{exp.description}</p>

                {exp.metrics.length > 0 && (
                  <div className="mt-4 flex gap-6">
                    {exp.metrics.map((m) => (
                      <div key={m.label} className="text-center">
                        <div className="text-2xl">
                          <AnimatedCounter target={m.value} suffix={m.suffix} />
                        </div>
                        <p className="text-xs text-muted-foreground mt-1">{m.label}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
