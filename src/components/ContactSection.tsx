import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, Github, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio Contact: ${form.name}`);
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`);
    window.open(`mailto:benpaulrichard3@gmail.com?subject=${subject}&body=${body}`, "_blank");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="relative py-24 animated-grid-bg gradient-overlay">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-4 font-mono tracking-tight"
        >
          <span className="text-gradient">Let's Work Together</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-foreground/70 font-serif max-w-2xl mx-auto mb-16"
        >
          I'm currently available for freelance projects and open to full-time opportunities.
          If you have a project that needs engineering depth or creative problem-solving, I'd love to hear from you.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-center gap-4">
              <Mail size={18} className="text-primary" />
              <a href="mailto:benpaulrichard3@gmail.com" className="text-sm text-foreground/80 hover:text-primary transition-colors font-serif">
                benpaulrichard3@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-4">
              <Phone size={18} className="text-primary" />
              <span className="text-sm text-foreground/80 font-serif">+44 7823915210</span>
            </div>
            <div className="flex items-center gap-4">
              <Linkedin size={18} className="text-primary" />
              <a href="https://www.linkedin.com/in/ben-paul-richard/" target="_blank" rel="noopener noreferrer" className="text-sm text-foreground/80 hover:text-primary transition-colors font-serif">
                LinkedIn Profile
              </a>
            </div>
            <div className="flex items-center gap-4">
              <Github size={18} className="text-primary" />
              <a href="https://github.com/Ben-Richard" target="_blank" rel="noopener noreferrer" className="text-sm text-foreground/80 hover:text-primary transition-colors font-serif">
                github.com/Ben-Richard
              </a>
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            <Input
              placeholder="Name"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="bg-secondary border-border font-serif"
            />
            <Input
              placeholder="Email"
              type="email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="bg-secondary border-border font-serif"
            />
            <Textarea
              placeholder="Message"
              required
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="bg-secondary border-border font-serif min-h-[120px]"
            />
            <Button type="submit" className="w-full font-mono text-xs uppercase tracking-wider">
              <Send size={14} /> Send Message
            </Button>
          </motion.form>
        </div>
      </div>

      {/* Footer */}
      <div className="container mx-auto px-6 mt-24 pt-8 border-t border-border">
        <p className="text-center text-xs text-muted-foreground font-mono">
          © 2024 Ben Paul Richard. Built with precision.
        </p>
      </div>
    </section>
  );
};

export default ContactSection;
