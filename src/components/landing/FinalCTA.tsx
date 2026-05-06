import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export const FinalCTA = () => (
  <section className="py-24">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        className="relative overflow-hidden rounded-3xl glass-strong p-12 md:p-20 text-center"
      >
        <div className="absolute inset-0 bg-gradient-primary opacity-20" />
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary/40 rounded-full blur-[120px]" />
        <div className="relative">
          <h2 className="font-display font-bold text-4xl md:text-6xl mb-4">
            Your AI Co-Founder is <span className="gradient-text">Ready</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-8">
            Stop guessing. Start building. Validate your next big idea in under a minute.
          </p>
          <Button variant="hero" size="xl" asChild>
            <Link to="/signup">Get Started Now <ArrowRight className="h-4 w-4" /></Link>
          </Button>
        </div>
      </motion.div>
    </div>
  </section>
);
