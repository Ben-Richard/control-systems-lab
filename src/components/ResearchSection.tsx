import { motion } from "framer-motion";
import { FileText } from "lucide-react";

const publications = [
  {
    title: "Electric Power Generation from IC Engine Waste Heat",
    type: "Patent (2023)",
    pdf: "/research/patent-waste-heat.pdf",
  },
  {
    title: "Army Surveillance Robot with Landmine Detection",
    type: "IEEE Paper",
    pdf: "/research/ieee-surveillance-robot.pdf",
  },
];

const ResearchSection = () => {
  return (
    <section id="research" className="relative py-24 animated-grid-bg gradient-overlay">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-16 font-mono tracking-tight"
        >
          <span className="text-gradient">Research & Publications</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {publications.map((pub, i) => (
            <motion.a
              key={pub.title}
              href={pub.pdf}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card border border-border rounded-lg p-6 hover:border-primary/30 transition-colors group cursor-pointer"
            >
              <div className="flex items-start gap-4">
                <FileText size={24} className="text-primary shrink-0 mt-1" />
                <div>
                  <p className="text-xs uppercase tracking-wider text-primary font-mono mb-2">{pub.type}</p>
                  <h3 className="text-base font-semibold font-serif text-foreground group-hover:text-primary transition-colors">
                    {pub.title}
                  </h3>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResearchSection;
