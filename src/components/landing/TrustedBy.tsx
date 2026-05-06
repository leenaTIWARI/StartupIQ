import { motion } from "framer-motion";

const logos = ["TechCrunch", "Y Combinator", "ProductHunt", "IndieHackers", "a16z", "Stripe", "Notion"];

export const TrustedBy = () => (
  <section className="py-16 border-y border-border/50">
    <div className="container">
      <p className="text-center text-xs uppercase tracking-widest text-muted-foreground mb-8">
        Trusted by founders and teams from
      </p>
      <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6 opacity-60">
        {logos.map((l, i) => (
          <motion.div
            key={l}
            initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
            className="font-display font-semibold text-lg md:text-xl text-muted-foreground hover:text-foreground transition-colors"
          >
            {l}
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
