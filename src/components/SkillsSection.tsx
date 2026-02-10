import { motion } from "framer-motion";

const skillGroups = [
  {
    title: "Embedded & Low-Level",
    skills: ["C/C++", "Embedded C", "ARM Cortex-M", "Linux kernel basics", "Device drivers", "Bootloaders", "HIL testing", "UART / SPI / I2C", "TCP/IP"],
  },
  {
    title: "Control & Robotics",
    skills: ["PID / MPC / LQR / LQG", "State-space modeling", "Kalman & Particle Filters", "SLAM", "System Identification (ARX/OE)", "Robotic manipulators", "Autonomous navigation"],
  },
  {
    title: "Quant & ML",
    skills: ["Python (NumPy, Pandas, scikit-learn)", "Monte Carlo simulation", "Portfolio optimization", "Time-series forecasting", "Derivatives pricing", "Risk modeling (VaR / CVaR)"],
  },
  {
    title: "Hardware & Architecture",
    skills: ["SystemVerilog / Verilog", "Digital logic", "RTL comprehension", "CPU microarchitecture fundamentals", "GPU concepts"],
  },
  {
    title: "Tools",
    skills: ["MATLAB/Simulink", "QUARC", "SolidWorks", "AutoCAD", "Ansys", "Docker", "Git", "Linux"],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="relative py-24 animated-grid-bg gradient-overlay">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-16 font-mono tracking-tight"
        >
          <span className="text-gradient">Technical Skills</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card border border-border rounded-lg p-6 hover:border-primary/30 transition-colors"
            >
              <h3 className="text-sm font-semibold uppercase tracking-wider text-primary mb-4 font-mono">
                {group.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs px-3 py-1.5 rounded-sm bg-secondary text-secondary-foreground font-mono"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
