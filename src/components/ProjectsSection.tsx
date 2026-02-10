import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Mini GPU",
    problem: "Build RTL GPU architecture for parallel computation",
    approach: "Multi-core dispatcher + ALUs + memory interfaces",
    tools: "SystemVerilog",
    outcome: "Functional RTL pipeline with multi-core dispatch",
    pdf: "/projects/mini-gpu.pdf",
  },
  {
    title: "Autonomous Mobile Robot",
    problem: "Navigate unknown environments autonomously",
    approach: "SLAM + sensor fusion + path planning algorithms",
    tools: "ROS, Python, LiDAR",
    outcome: "Real-time obstacle avoidance and mapping",
    pdf: "/projects/autonomous-robot.pdf",
  },
  {
    title: "Quanser Aero2 Helicopter Control",
    problem: "Stabilize a 2-DOF helicopter system",
    approach: "LQR/LQG controller design with state estimation",
    tools: "MATLAB/Simulink, QUARC",
    outcome: "Precise attitude control with disturbance rejection",
    pdf: "/projects/quanser-aero2.pdf",
  },
  {
    title: "Model Predictive Control (CSTR)",
    problem: "Optimize chemical reactor operation",
    approach: "MPC with constraints for temperature and concentration",
    tools: "MATLAB, Simulink",
    outcome: "Optimal setpoint tracking with constraint satisfaction",
    pdf: "/projects/mpc-cstr.pdf",
  },
  {
    title: "System Identification",
    problem: "Build accurate dynamic models from experimental data",
    approach: "ARX/OE model estimation and validation",
    tools: "MATLAB System ID Toolbox",
    outcome: "High-fidelity parametric models for control design",
    pdf: "/projects/system-id.pdf",
  },
  {
    title: "Robotic Manipulator Control",
    problem: "Precise trajectory tracking for multi-DOF arm",
    approach: "Inverse kinematics + computed torque control",
    tools: "MATLAB, Robotics Toolbox",
    outcome: "Sub-millimeter trajectory accuracy",
    pdf: "/projects/robotic-manipulator.pdf",
  },
  {
    title: "Quantitative ML Framework",
    problem: "Systematic quantitative trading strategy development",
    approach: "Feature engineering + ML pipeline for alpha generation",
    tools: "Python, scikit-learn, Pandas",
    outcome: "Backtested framework with risk-adjusted returns",
    pdf: "/projects/quant-ml.pdf",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="relative py-24 animated-grid-bg gradient-overlay">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-16 font-mono tracking-tight"
        >
          <span className="text-gradient">Projects</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="bg-card border border-border rounded-lg p-6 flex flex-col hover:border-primary/30 transition-colors"
            >
              <h3 className="text-base font-semibold font-mono text-foreground mb-4">{project.title}</h3>

              <div className="space-y-2 text-xs font-serif flex-1">
                <div>
                  <span className="text-primary font-mono uppercase tracking-wider">Problem: </span>
                  <span className="text-foreground/80">{project.problem}</span>
                </div>
                <div>
                  <span className="text-primary font-mono uppercase tracking-wider">Approach: </span>
                  <span className="text-foreground/80">{project.approach}</span>
                </div>
                <div>
                  <span className="text-primary font-mono uppercase tracking-wider">Tools: </span>
                  <span className="text-foreground/80">{project.tools}</span>
                </div>
                <div>
                  <span className="text-primary font-mono uppercase tracking-wider">Outcome: </span>
                  <span className="text-foreground/80">{project.outcome}</span>
                </div>
              </div>

              <Button asChild variant="outline" size="sm" className="mt-4 font-mono text-xs uppercase tracking-wider border-primary/20 hover:border-primary">
                <a href={project.pdf} target="_blank" rel="noopener noreferrer">
                  <ExternalLink size={14} /> View Project
                </a>
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
