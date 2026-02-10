import { motion } from "framer-motion";
import benCartoon from "@/assets/Ben_Cartoon.jpeg";

const AboutSection = () => {
  return (
    <section id="about" className="relative py-24 animated-grid-bg gradient-overlay">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-16 font-mono tracking-tight"
        >
          <span className="text-gradient">About</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          {/* Left: Portrait */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-lg overflow-hidden border border-border">
              <img
                src={benCartoon}
                alt="Ben Paul Richard"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
            </div>
          </motion.div>

          {/* Right: Bio */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-base md:text-lg leading-relaxed text-foreground/85 font-serif">
              I am an MSc Advanced Control & Systems Engineering graduate from the University of Manchester,
              a B.E. Mechanical Engineering graduate from Anna University, and currently pursuing an MSc in
              Financial Engineering (online) at WorldQuant University.
            </p>
            <p className="text-base md:text-lg leading-relaxed text-foreground/85 font-serif">
              My expertise spans mechanical design and simulation, embedded systems, control algorithms,
              artificial intelligence, robotics, quantitative modeling, and low-level software optimization,
              with a strong focus on building intelligent, high-performance engineering systems.
            </p>
            <blockquote className="border-l-2 border-primary pl-4 mt-6">
              <p className="text-sm md:text-base italic text-primary/90 font-serif">
                "I enjoy solving complex system problems at the intersection of software, hardware, and mathematics."
              </p>
            </blockquote>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
