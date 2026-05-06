import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Target, Users, Layers, DollarSign, ListChecks, AlertTriangle, Presentation, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const cards = [
  { icon: Target, title: "Market Opportunity", body: "TAM ~$4.2B globally. Strong growth among 25-40yo athletes & wellness enthusiasts. CAGR projected at 18% through 2028." },
  { icon: Users, title: "Competitors", body: "MyFitnessPal (legacy), Cronometer (data-heavy), Eat This Much (basic AI). Gap: real-time athlete-specific personalization." },
  { icon: Layers, title: "SWOT", body: "Strengths: AI personalization. Weaknesses: cold start data. Opportunities: B2B partnerships with gyms. Threats: established incumbents." },
  { icon: DollarSign, title: "Monetization", body: "Freemium ($0 / $14 Pro / $39 Coach). Add B2B for teams ($299/mo). Affiliate revenue from supplement & grocery partners." },
  { icon: ListChecks, title: "MVP Features", body: "1) Goal-based meal generator 2) Macro tracker 3) Grocery list export 4) Workout sync (Strava/Whoop) 5) Weekly progress digest." },
  { icon: AlertTriangle, title: "Risks", body: "Regulatory (nutrition claims), AI hallucination on macros, churn after first goal achieved. Mitigate with expert review & habit loops." },
  { icon: Presentation, title: "Investor Pitch", body: "We're the AI nutrition co-pilot for performance athletes — turning generic meal apps into personalized coaches. $4.2B market, 18% CAGR, Pro conversion >7% in pilot." },
];

const Analyze = () => {
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true); setDone(false);
    setTimeout(() => { setLoading(false); setDone(true); }, 1800);
  };
  return (
    <div className="max-w-7xl space-y-6">
      <div>
        <h1 className="font-display font-bold text-3xl">Analyze a new idea</h1>
        <p className="text-muted-foreground mt-1">Fill in the details — our AI will return a complete startup blueprint.</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        <form onSubmit={submit} className="glass rounded-2xl p-6 space-y-4 lg:col-span-1 h-fit sticky top-20">
          <div className="space-y-2"><Label>Startup name</Label><Input required placeholder="e.g. NutriPilot" className="bg-muted/40 border-border" /></div>
          <div className="space-y-2"><Label>Industry</Label><Input required placeholder="HealthTech / SaaS / etc" className="bg-muted/40 border-border" /></div>
          <div className="space-y-2"><Label>Description</Label><Textarea required rows={5} placeholder="Describe your startup idea..." className="bg-muted/40 border-border resize-none" /></div>
          <div className="space-y-2"><Label>Target audience</Label><Input required placeholder="e.g. Amateur athletes, 25-40" className="bg-muted/40 border-border" /></div>
          <Button type="submit" variant="hero" size="lg" className="w-full" disabled={loading}>
            {loading ? <><Loader2 className="h-4 w-4 animate-spin" /> Analyzing...</> : <><Sparkles className="h-4 w-4" /> Generate Report</>}
          </Button>
        </form>

        <div className="lg:col-span-2">
          <AnimatePresence mode="wait">
            {!done && !loading && (
              <motion.div key="empty" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="glass rounded-2xl p-12 text-center h-full flex flex-col items-center justify-center min-h-[500px]">
                <div className="w-16 h-16 rounded-2xl bg-gradient-primary/30 flex items-center justify-center mb-4"><Sparkles className="h-8 w-8 text-primary-glow" /></div>
                <h3 className="font-display font-semibold text-xl mb-2">Ready when you are</h3>
                <p className="text-muted-foreground max-w-sm">Submit your idea on the left to receive a full AI-generated startup report.</p>
              </motion.div>
            )}
            {loading && (
              <motion.div key="load" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="grid sm:grid-cols-2 gap-4">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="glass rounded-2xl p-5 animate-pulse">
                    <div className="h-10 w-10 rounded-xl bg-muted mb-3" />
                    <div className="h-4 w-1/2 bg-muted rounded mb-2" />
                    <div className="h-3 w-full bg-muted rounded mb-1.5" />
                    <div className="h-3 w-5/6 bg-muted rounded" />
                  </div>
                ))}
              </motion.div>
            )}
            {done && (
              <motion.div key="done" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="grid sm:grid-cols-2 gap-4">
                {cards.map((c, i) => (
                  <motion.div key={c.title} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.06 }}
                    className="glass rounded-2xl p-5 hover:border-primary/30 transition">
                    <div className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center mb-3"><c.icon className="h-5 w-5 text-white" /></div>
                    <h3 className="font-display font-semibold mb-2">{c.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{c.body}</p>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};
export default Analyze;
