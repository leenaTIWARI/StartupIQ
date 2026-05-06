import { motion } from "framer-motion";
import { PenLine, Brain, FileBarChart } from "lucide-react";

const steps = [
  { icon: PenLine, title: "Enter Your Idea", desc: "Describe your startup in a few sentences. Add industry & target audience." },
  { icon: Brain, title: "AI Analyzes Market", desc: "Our models scan markets, competitors, trends and revenue patterns in real time." },
  { icon: FileBarChart, title: "Get Full Report", desc: "Receive a complete startup blueprint — ready to share, save or build from." },
];

export const HowItWorks = () => (
  <section id="how" className="py-24 bg-gradient-hero/30">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        className="text-center max-w-2xl mx-auto mb-16"
      >
        <h2 className="font-display font-bold text-4xl md:text-5xl mb-4">
          From idea to <span className="gradient-text">blueprint</span> in 60 seconds
        </h2>
        <p className="text-muted-foreground text-lg">Three simple steps. Zero spreadsheets.</p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6 relative">
        <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
        {steps.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }}
            className="relative text-center"
          >
            <div className="relative inline-flex mb-6">
              <div className="absolute inset-0 bg-gradient-primary blur-xl opacity-50" />
              <div className="relative w-24 h-24 rounded-2xl glass-strong flex items-center justify-center">
                <s.icon className="h-9 w-9 text-primary-glow" />
                <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-gradient-primary text-white text-xs font-bold flex items-center justify-center">{i+1}</span>
              </div>
            </div>
            <h3 className="font-display font-semibold text-xl mb-2">{s.title}</h3>
            <p className="text-muted-foreground max-w-xs mx-auto">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
