import { motion } from "framer-motion";
import { Star } from "lucide-react";

const items = [
  { name: "Maya Chen", role: "Founder, NestlyHQ", quote: "StartupIQ replaced two weeks of market research in 45 seconds. The competitor analysis alone is worth the subscription.", initial: "M" },
  { name: "Jordan Patel", role: "Solo Indie Hacker", quote: "I validated 7 ideas in one weekend. Killed 5, doubled down on 2. Already one is generating MRR.", initial: "J" },
  { name: "Aisha Okafor", role: "Partner, Catalyst Ventures", quote: "We use StartupIQ in our accelerator to give founders a 360° picture before demo day. Game-changing.", initial: "A" },
];

export const Testimonials = () => (
  <section className="py-24">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        className="text-center max-w-2xl mx-auto mb-16"
      >
        <h2 className="font-display font-bold text-4xl md:text-5xl mb-4">
          Loved by <span className="gradient-text">12,000+ founders</span>
        </h2>
      </motion.div>
      <div className="grid md:grid-cols-3 gap-6">
        {items.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
            className="glass rounded-2xl p-6"
          >
            <div className="flex gap-0.5 mb-4">
              {[...Array(5)].map((_, j) => <Star key={j} className="h-4 w-4 fill-primary-glow text-primary-glow" />)}
            </div>
            <p className="text-foreground/90 leading-relaxed mb-6">"{t.quote}"</p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center font-semibold text-white">{t.initial}</div>
              <div>
                <div className="font-semibold text-sm">{t.name}</div>
                <div className="text-xs text-muted-foreground">{t.role}</div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
