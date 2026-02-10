import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const education = [
  {
    institution: "University of Manchester",
    degree: "MSc Advanced Control & Systems Engineering",
    highlights: [
      "Optimal Control, Robust Control, Nonlinear Systems",
      "System Identification, Digital Control",
      "Dissertation: Advanced control strategies for complex systems",
    ],
  },
  {
    institution: "WorldQuant University",
    degree: "MSc Financial Engineering (Online)",
    highlights: [
      "Quantitative Methods, Derivatives Pricing",
      "Risk Management, Portfolio Theory",
      "Statistical Modeling & Machine Learning for Finance",
    ],
  },
  {
    institution: "Anna University",
    degree: "BEng Mechanical Engineering",
    highlights: [
      "Thermodynamics, Fluid Mechanics, Mechanics of Materials",
      "Manufacturing Technology, CAD/CAM",
      "Dissertation: IC Engine waste heat recovery systems",
    ],
  },
];

const EducationSection = () => {
  return (
    <section id="education" className="relative py-24 animated-grid-bg gradient-overlay">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-16 font-mono tracking-tight"
        >
          <span className="text-gradient">Education</span>
        </motion.h2>

        <div className="max-w-4xl mx-auto space-y-6">
          {education.map((edu, i) => (
            <motion.div
              key={edu.institution}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="bg-card border border-border rounded-lg p-6 hover:border-primary/30 transition-colors"
            >
              <div className="flex items-start gap-4">
                <GraduationCap size={24} className="text-primary shrink-0 mt-1" />
                <div>
                  <h3 className="text-base font-semibold font-mono text-foreground">{edu.institution}</h3>
                  <p className="text-sm text-primary font-mono mt-1">{edu.degree}</p>
                  <ul className="mt-3 space-y-1">
                    {edu.highlights.map((h) => (
                      <li key={h} className="text-sm text-foreground/75 font-serif flex items-start gap-2">
                        <span className="text-primary mt-1.5">·</span>
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
