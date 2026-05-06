import { motion } from "framer-motion";
import { Sparkles, Search, Layers, DollarSign, Map, Presentation, Save, FileText } from "lucide-react";

const features = [
  { icon: Sparkles, title: "AI Idea Validation", desc: "Instant verdict on whether your idea has real market potential, backed by AI reasoning." },
  { icon: Search, title: "Competitor Research", desc: "Automatic discovery of direct & indirect competitors with positioning insights." },
  { icon: Layers, title: "SWOT Analysis", desc: "Strengths, weaknesses, opportunities and threats — generated in seconds." },
  { icon: DollarSign, title: "Revenue Models", desc: "Tailored monetization strategies including SaaS, marketplace, freemium and more." },
  { icon: Map, title: "MVP Roadmap", desc: "Step-by-step launch plan with prioritized features for your minimum viable product." },
  { icon: Presentation, title: "Investor Pitch", desc: "Pitch-ready summary with TAM, traction angles and unique value proposition." },
  { icon: Save, title: "Saved Reports", desc: "Keep every analysis in your dashboard. Compare ideas side-by-side." },
  { icon: FileText, title: "PDF Export", desc: "Download beautifully formatted reports to share with co-founders or investors." },
];

export const Features = () => (
  <section id="features" className="py-24 relative">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        className="text-center max-w-2xl mx-auto mb-16"
      >
        <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 mb-4">
          <span className="text-xs font-medium text-primary-glow">Features</span>
        </div>
        <h2 className="font-display font-bold text-4xl md:text-5xl mb-4">
          Everything to <span className="gradient-text">launch faster</span>
        </h2>
        <p className="text-muted-foreground text-lg">
          One platform replacing weeks of research, spreadsheets and consultant calls.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
            whileHover={{ y: -4 }}
            className="glass rounded-2xl p-6 hover:border-primary/30 transition-all group"
          >
            <div className="w-11 h-11 rounded-xl bg-gradient-primary flex items-center justify-center mb-4 group-hover:shadow-glow transition-shadow">
              <f.icon className="h-5 w-5 text-white" />
            </div>
            <h3 className="font-display font-semibold text-lg mb-2">{f.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
