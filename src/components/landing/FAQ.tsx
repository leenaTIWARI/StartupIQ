import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { motion } from "framer-motion";

const faqs = [
  { q: "How accurate is the AI analysis?", a: "Our models combine GPT-4 and Claude with curated market datasets. While no AI predicts the future perfectly, our reports correlate strongly with founder outcomes — and you always get reasoning, not just scores." },
  { q: "Do I keep ownership of my ideas?", a: "100%. Your ideas and reports belong to you. We never train models on your private data, and you can delete everything anytime." },
  { q: "Can I cancel anytime?", a: "Yes. Cancel from your dashboard with one click. No questions, no retention calls." },
  { q: "Is there a free trial?", a: "The Starter plan is free forever and includes 3 analyses per month. Pro & Scale offer a 7-day free trial." },
  { q: "What industries does it support?", a: "Any industry. We've validated SaaS, marketplaces, D2C, fintech, healthtech, climate tech, creator tools and more." },
  { q: "Do you offer a team plan?", a: "Yes — the Scale plan includes 5 seats. Need more? Contact us for enterprise pricing." },
];

export const FAQ = () => (
  <section id="faq" className="py-24">
    <div className="container max-w-3xl">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
        <h2 className="font-display font-bold text-4xl md:text-5xl mb-4">
          Frequently asked <span className="gradient-text">questions</span>
        </h2>
      </motion.div>
      <Accordion type="single" collapsible className="space-y-3">
        {faqs.map((f, i) => (
          <AccordionItem key={i} value={`i${i}`} className="glass rounded-xl px-5 border-0">
            <AccordionTrigger className="text-left hover:no-underline font-medium">{f.q}</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);
