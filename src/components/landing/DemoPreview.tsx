import { motion } from "framer-motion";
import { LineChart, Line, ResponsiveContainer, AreaChart, Area, XAxis, YAxis } from "recharts";
import { TrendingUp, Users, DollarSign, Target, Rocket } from "lucide-react";

const data = [
  { m: "Jan", v: 30 }, { m: "Feb", v: 45 }, { m: "Mar", v: 38 }, { m: "Apr", v: 62 },
  { m: "May", v: 71 }, { m: "Jun", v: 85 }, { m: "Jul", v: 92 },
];

const stats = [
  { icon: TrendingUp, label: "Market Score", value: 87, suffix: "/100", color: "text-primary-glow" },
  { icon: Users, label: "Competition Level", value: "Medium", color: "text-secondary-foreground" },
  { icon: Rocket, label: "Growth Potential", value: 92, suffix: "/100", color: "text-primary-glow" },
  { icon: DollarSign, label: "Monetization", value: 81, suffix: "/100", color: "text-primary-glow" },
  { icon: Target, label: "Launch Readiness", value: 78, suffix: "%", color: "text-primary-glow" },
];

export const DemoPreview = () => (
  <section className="py-24">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        className="text-center max-w-2xl mx-auto mb-12"
      >
        <h2 className="font-display font-bold text-4xl md:text-5xl mb-4">
          Your <span className="gradient-text">command center</span> for ideas
        </h2>
        <p className="text-muted-foreground text-lg">Beautiful dashboards. Actionable scores. Zero noise.</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        className="relative"
      >
        <div className="absolute -inset-4 bg-gradient-primary opacity-20 blur-3xl" />
        <div className="relative glass-strong rounded-3xl p-6 md:p-8 shadow-elegant">
          <div className="grid md:grid-cols-5 gap-4 mb-6">
            {stats.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }}
                className="glass rounded-xl p-4"
              >
                <s.icon className={`h-5 w-5 ${s.color} mb-2`} />
                <div className="text-xs text-muted-foreground mb-1">{s.label}</div>
                <div className="font-display font-bold text-2xl">
                  {s.value}<span className="text-sm text-muted-foreground font-normal">{s.suffix}</span>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="grid lg:grid-cols-3 gap-4">
            <div className="lg:col-span-2 glass rounded-xl p-5 h-64">
              <div className="flex justify-between mb-4">
                <div>
                  <div className="text-xs text-muted-foreground">Market growth trend</div>
                  <div className="font-display font-semibold text-lg">+247% YoY projection</div>
                </div>
                <div className="text-xs px-2 py-1 rounded-full bg-primary/20 text-primary-glow">Live</div>
              </div>
              <ResponsiveContainer width="100%" height="75%">
                <AreaChart data={data}>
                  <defs>
                    <linearGradient id="g" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="hsl(217 91% 60%)" stopOpacity={0.6} />
                      <stop offset="100%" stopColor="hsl(217 91% 60%)" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <XAxis dataKey="m" axisLine={false} tickLine={false} tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 11 }} />
                  <YAxis hide />
                  <Area type="monotone" dataKey="v" stroke="hsl(199 89% 65%)" strokeWidth={2.5} fill="url(#g)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
            <div className="glass rounded-xl p-5 space-y-3">
              <div className="text-xs text-muted-foreground mb-2">Top competitors</div>
              {["NutriFit AI", "MealMaster Pro", "AthletePlate", "BulkChef"].map((c, i) => (
                <div key={c} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-md bg-gradient-primary flex items-center justify-center text-xs font-bold text-white">{c[0]}</div>
                    <span className="text-sm">{c}</span>
                  </div>
                  <span className="text-xs text-muted-foreground">{90 - i*8}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);
