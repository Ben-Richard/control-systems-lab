import { motion } from "framer-motion";
import { Award } from "lucide-react";

const certifications = [
  "Python Developer",
  "C++ OOP",
  "Machine Learning & Deep Learning",
  "Ethical Hacking",
  "System Design",
  "Google IT Support",
  "PLC Developer",
  "Quantum Computing",
  "Six Sigma",
];

const CertificationsSection = () => {
  return (
    <section className="relative py-24 animated-grid-bg gradient-overlay">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-16 font-mono tracking-tight"
        >
          <span className="text-gradient">Certifications</span>
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {certifications.map((cert, i) => (
            <motion.a
              key={cert}
              href={`/certifications/${cert.toLowerCase().replace(/[^a-z0-9]+/g, "-")}.pdf`}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="bg-card border border-border rounded-lg p-4 hover:border-primary/30 transition-colors group flex items-center gap-3"
            >
              <Award size={18} className="text-primary shrink-0" />
              <span className="text-sm font-mono text-foreground group-hover:text-primary transition-colors">
                {cert}
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
