import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { MessageSquare, PenLine } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

interface Reference {
  name: string;
  designation: string;
  company: string;
  quote: string;
}

const defaultRefs: Reference[] = [
  { name: "Alen Donald", designation: "HVDC Commissioning Engineer", company: "Siemens", quote: "An exceptional engineer with deep technical expertise and a remarkable ability to solve complex problems." },
  { name: "Dhinakar Selwyn", designation: "Vice President & Global Head FS Core Technologies", company: "Capgemini", quote: "Demonstrates extraordinary dedication to engineering excellence and continuous learning." },
  { name: "Gnanaiah Chandrasekaran", designation: "Design Manager", company: "China Railway First Group", quote: "A highly skilled professional who brings both analytical rigor and creative thinking to every project." },
  { name: "Cliff Evans", designation: "EVP & Head Technology Practice", company: "Capgemini", quote: "Ben's multidisciplinary approach to engineering problems is truly impressive." },
];

const ReferencesSection = () => {
  const [refs, setRefs] = useState<Reference[]>(() => {
    const stored = localStorage.getItem("portfolio_references");
    return stored ? [...defaultRefs, ...JSON.parse(stored)] : defaultRefs;
  });
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({ email: "", designation: "", company: "", comment: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.email || !form.designation || !form.comment) {
      toast.error("Please fill in all required fields.");
      return;
    }

    // Send approval email via mailto
    const subject = encodeURIComponent("New Portfolio Review Submission");
    const body = encodeURIComponent(
      `New review from:\nEmail: ${form.email}\nDesignation: ${form.designation}\nCompany: ${form.company}\nComment: ${form.comment}`
    );
    window.open(`mailto:benpaulrichard3@gmail.com?subject=${subject}&body=${body}`, "_blank");

    // Store locally
    const newRef: Reference = {
      name: form.email.split("@")[0],
      designation: form.designation,
      company: form.company || "—",
      quote: form.comment,
    };
    const stored = JSON.parse(localStorage.getItem("portfolio_references") || "[]");
    stored.push(newRef);
    localStorage.setItem("portfolio_references", JSON.stringify(stored));
    setRefs([...defaultRefs, ...stored]);
    setForm({ email: "", designation: "", company: "", comment: "" });
    setOpen(false);
    toast.success("Thank you! Your review has been submitted for approval.");
  };

  return (
    <section id="references" className="relative py-24 overflow-hidden animated-grid-bg gradient-overlay">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-16 font-mono tracking-tight"
        >
          <span className="text-gradient">Kind Words</span>
        </motion.h2>

        {/* Horizontally scrolling cards */}
        <div className="relative mb-10 overflow-hidden">
          <div className="flex animate-scroll-left gap-6" style={{ width: "max-content" }}>
            {[...refs, ...refs].map((ref, i) => (
              <div
                key={i}
                className="w-80 shrink-0 bg-card border border-border rounded-lg p-6 hover:border-primary/30 transition-colors"
              >
                <MessageSquare size={18} className="text-primary mb-3" />
                <p className="text-sm italic text-foreground/80 font-serif mb-4 line-clamp-3">"{ref.quote}"</p>
                <div>
                  <p className="text-sm font-semibold font-mono text-foreground">{ref.name}</p>
                  <p className="text-xs text-muted-foreground">{ref.designation}</p>
                  <p className="text-xs text-primary/70">{ref.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <p className="text-center text-sm text-muted-foreground font-serif mb-6">More available on request.</p>

        <div className="text-center">
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
              <Button variant="outline" className="font-mono text-xs uppercase tracking-wider border-primary/30 hover:border-primary">
                <PenLine size={14} /> Write a Review
              </Button>
            </DialogTrigger>
            <DialogContent className="bg-card border-border">
              <DialogHeader>
                <DialogTitle className="font-mono">Write a Review</DialogTitle>
              </DialogHeader>
              <form onSubmit={handleSubmit} className="space-y-4 mt-4">
                <Input
                  placeholder="Email *"
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="bg-secondary border-border font-serif"
                />
                <Input
                  placeholder="Designation *"
                  required
                  value={form.designation}
                  onChange={(e) => setForm({ ...form, designation: e.target.value })}
                  className="bg-secondary border-border font-serif"
                />
                <Input
                  placeholder="Company (optional)"
                  value={form.company}
                  onChange={(e) => setForm({ ...form, company: e.target.value })}
                  className="bg-secondary border-border font-serif"
                />
                <Textarea
                  placeholder="Your review *"
                  required
                  value={form.comment}
                  onChange={(e) => setForm({ ...form, comment: e.target.value })}
                  className="bg-secondary border-border font-serif min-h-[100px]"
                />
                <Button type="submit" className="w-full font-mono text-xs uppercase tracking-wider">
                  Submit Review
                </Button>
              </form>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </section>
  );
};

export default ReferencesSection;
