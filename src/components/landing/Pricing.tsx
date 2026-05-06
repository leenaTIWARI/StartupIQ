import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const plans = [
  { name: "Starter", price: "0", period: "forever", desc: "For curious explorers", features: ["3 idea analyses / month", "Basic SWOT", "Community access", "PDF export"], cta: "Start free", variant: "glass" as const },
  { name: "Pro", price: "19", period: "/month", desc: "For serious founders", features: ["Unlimited analyses", "Full reports + investor pitch", "Competitor deep-dive", "Compare ideas", "Priority AI models", "Email support"], cta: "Start Pro trial", popular: true, variant: "hero" as const },
  { name: "Scale", price: "49", period: "/month", desc: "For teams & accelerators", features: ["Everything in Pro", "Team workspaces (5 seats)", "API access", "Custom branding on PDFs", "Dedicated success manager"], cta: "Go Scale", variant: "glass" as const },
];

export const Pricing = () => (
  <section id="pricing" className="py-24">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        className="text-center max-w-2xl mx-auto mb-16"
      >
        <h2 className="font-display font-bold text-4xl md:text-5xl mb-4">
          Simple, <span className="gradient-text">founder-friendly</span> pricing
        </h2>
        <p className="text-muted-foreground text-lg">Start free. Upgrade when you're ready to scale.</p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {plans.map((p, i) => (
          <motion.div
            key={p.name}
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
            className={`relative rounded-3xl p-8 ${p.popular ? "glass-strong border-primary/40 shadow-glow" : "glass"}`}
          >
            {p.popular && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1.5 bg-gradient-primary px-4 py-1 rounded-full text-xs font-semibold text-white">
                <Sparkles className="h-3 w-3" /> Most popular
              </div>
            )}
            <div className="mb-6">
              <div className="text-sm text-muted-foreground mb-1">{p.name}</div>
              <div className="flex items-baseline gap-1">
                <span className="font-display font-bold text-5xl">${p.price}</span>
                <span className="text-muted-foreground text-sm">{p.period}</span>
              </div>
              <p className="text-sm text-muted-foreground mt-2">{p.desc}</p>
            </div>
            <Button variant={p.variant} className="w-full mb-6" asChild>
              <Link to="/signup">{p.cta}</Link>
            </Button>
            <ul className="space-y-3">
              {p.features.map(f => (
                <li key={f} className="flex items-start gap-2 text-sm">
                  <Check className="h-4 w-4 text-primary-glow mt-0.5 shrink-0" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
