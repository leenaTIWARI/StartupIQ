import { motion } from "framer-motion";
import { Sparkles, Bookmark, TrendingUp, FileText, ArrowRight, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { AreaChart, Area, ResponsiveContainer, XAxis, YAxis } from "recharts";

const data = [{m:'M',v:20},{m:'T',v:35},{m:'W',v:42},{m:'T',v:38},{m:'F',v:55},{m:'S',v:62},{m:'S',v:71}];

const stats = [
  { icon: Sparkles, label: "Ideas Analyzed", value: "24", change: "+12" },
  { icon: Bookmark, label: "Saved Reports", value: "18", change: "+3" },
  { icon: TrendingUp, label: "Avg Market Score", value: "82", change: "+5" },
  { icon: FileText, label: "PDFs Exported", value: "11", change: "+2" },
];

const recent = [
  { name: "AI meal planner for athletes", score: 87, industry: "HealthTech" },
  { name: "Carbon offset for SMBs", score: 74, industry: "ClimateTech" },
  { name: "Async coach for remote managers", score: 91, industry: "SaaS" },
  { name: "Marketplace for vintage cameras", score: 68, industry: "E-commerce" },
];

const Dashboard = () => (
  <div className="space-y-6 max-w-7xl">
    <div className="flex flex-wrap justify-between items-end gap-4">
      <div>
        <h1 className="font-display font-bold text-3xl">Welcome back, Ada 👋</h1>
        <p className="text-muted-foreground mt-1">Here's what's happening with your ideas today.</p>
      </div>
      <Button variant="hero" asChild><Link to="/app/analyze"><Plus className="h-4 w-4" /> New Analysis</Link></Button>
    </div>

    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((s, i) => (
        <motion.div key={s.label} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i*0.05 }}
          className="glass rounded-2xl p-5">
          <div className="flex justify-between items-start mb-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center"><s.icon className="h-5 w-5 text-white" /></div>
            <span className="text-xs px-2 py-0.5 rounded-full bg-primary/20 text-primary-glow">{s.change}</span>
          </div>
          <div className="font-display font-bold text-3xl">{s.value}</div>
          <div className="text-xs text-muted-foreground mt-1">{s.label}</div>
        </motion.div>
      ))}
    </div>

    <div className="grid lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2 glass rounded-2xl p-6">
        <div className="flex justify-between mb-4">
          <div>
            <div className="font-display font-semibold text-lg">Activity this week</div>
            <div className="text-xs text-muted-foreground">Ideas analyzed per day</div>
          </div>
        </div>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data}>
              <defs>
                <linearGradient id="ag" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="hsl(199 89% 65%)" stopOpacity={0.6}/>
                  <stop offset="100%" stopColor="hsl(199 89% 65%)" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <XAxis dataKey="m" axisLine={false} tickLine={false} tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 11 }} />
              <YAxis hide />
              <Area type="monotone" dataKey="v" stroke="hsl(199 89% 65%)" strokeWidth={2.5} fill="url(#ag)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="glass rounded-2xl p-6">
        <div className="flex justify-between items-center mb-4">
          <div className="font-display font-semibold text-lg">Recent ideas</div>
          <Link to="/app/reports" className="text-xs text-primary-glow hover:underline flex items-center gap-1">View all <ArrowRight className="h-3 w-3" /></Link>
        </div>
        <div className="space-y-3">
          {recent.map(r => (
            <div key={r.name} className="glass rounded-xl p-3 hover:bg-muted/40 transition cursor-pointer">
              <div className="flex justify-between items-start mb-1">
                <div className="text-sm font-medium line-clamp-1">{r.name}</div>
                <div className="text-xs font-bold gradient-text">{r.score}</div>
              </div>
              <div className="text-xs text-muted-foreground">{r.industry}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);
export default Dashboard;
