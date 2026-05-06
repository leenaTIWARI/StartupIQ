import { motion } from "framer-motion";
import { ArrowRight, Play, Sparkles, TrendingUp, Target, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <section className="relative pt-32 md:pt-40 pb-20 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 grid-bg opacity-40 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_70%)]" />
      <div className="absolute top-1/3 -left-32 w-96 h-96 bg-secondary/30 rounded-full blur-[120px] animate-glow-pulse" />
      <div className="absolute top-1/4 -right-32 w-96 h-96 bg-primary/30 rounded-full blur-[120px] animate-glow-pulse" />

      <div className="container relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 mb-6">
              <Sparkles className="h-3.5 w-3.5 text-primary-glow" />
              <span className="text-xs font-medium">Powered by GPT-4 & Claude</span>
            </div>
            <h1 className="font-display font-bold text-5xl md:text-6xl lg:text-7xl leading-[1.05] mb-6">
              Turn Startup Ideas Into{" "}
              <span className="gradient-text">Real Businesses</span> with AI
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl mb-8 leading-relaxed">
              Get market validation, competitors, monetization plans, MVP roadmap and investor insights in under 60 seconds.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button variant="hero" size="xl" asChild>
                <Link to="/signup">Analyze Idea <ArrowRight className="h-4 w-4" /></Link>
              </Button>
              <Button variant="glass" size="xl">
                <Play className="h-4 w-4" /> Watch Demo
              </Button>
            </div>
            <div className="flex items-center gap-6 mt-10 text-sm text-muted-foreground">
              <div className="flex -space-x-2">
                {[0,1,2,3].map(i => (
                  <div key={i} className="w-8 h-8 rounded-full bg-gradient-primary border-2 border-background" style={{filter: `hue-rotate(${i*30}deg)`}}/>
                ))}
              </div>
              <span><span className="text-foreground font-semibold">12,000+</span> founders trust us</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute -inset-6 bg-gradient-primary opacity-30 blur-3xl rounded-full" />
            <div className="relative glass-strong rounded-2xl p-6 shadow-elegant">
              <div className="flex items-center gap-2 mb-5">
                <div className="flex gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-destructive/70" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
                </div>
                <div className="ml-3 text-xs text-muted-foreground">app.startupiq.ai</div>
              </div>
              <div className="space-y-4">
                <div className="glass rounded-xl p-4">
                  <div className="text-xs text-muted-foreground mb-1">Idea</div>
                  <div className="text-sm font-medium">AI-powered meal planner for athletes</div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { icon: TrendingUp, label: "Market Score", value: "87", color: "from-primary to-primary-glow" },
                    { icon: Target, label: "Competition", value: "Med", color: "from-secondary to-primary" },
                    { icon: Rocket, label: "Growth", value: "92", color: "from-primary-glow to-secondary" },
                    { icon: Sparkles, label: "Readiness", value: "78", color: "from-secondary to-primary-glow" },
                  ].map((s, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 + i*0.1 }}
                      className="glass rounded-xl p-3"
                    >
                      <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${s.color} flex items-center justify-center mb-2`}>
                        <s.icon className="h-4 w-4 text-white" />
                      </div>
                      <div className="text-xs text-muted-foreground">{s.label}</div>
                      <div className="text-lg font-bold gradient-text">{s.value}</div>
                    </motion.div>
                  ))}
                </div>
                <div className="glass rounded-xl p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs text-muted-foreground">Launch Readiness</span>
                    <span className="text-xs font-semibold text-primary-glow">78%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }} animate={{ width: "78%" }} transition={{ duration: 1.5, delay: 0.8 }}
                      className="h-full bg-gradient-primary rounded-full"
                    />
                  </div>
                </div>
              </div>
            </div>

            <motion.div
              animate={{ y: [0, -10, 0] }} transition={{ duration: 4, repeat: Infinity }}
              className="absolute -top-6 -right-6 glass-strong rounded-xl p-3 shadow-elegant hidden md:block"
            >
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-gradient-primary flex items-center justify-center">
                  <Sparkles className="h-4 w-4 text-white" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground">AI Analysis</div>
                  <div className="text-sm font-semibold">Complete in 47s</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
