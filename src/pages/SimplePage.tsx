import { LucideIcon } from "lucide-react";

export const SimplePage = ({ icon: Icon, title, desc }: { icon: LucideIcon; title: string; desc: string }) => (
  <div className="max-w-7xl">
    <h1 className="font-display font-bold text-3xl mb-1">{title}</h1>
    <p className="text-muted-foreground mb-8">{desc}</p>
    <div className="glass rounded-2xl p-12 text-center">
      <div className="w-16 h-16 rounded-2xl bg-gradient-primary/30 flex items-center justify-center mx-auto mb-4"><Icon className="h-8 w-8 text-primary-glow" /></div>
      <p className="text-muted-foreground">This section is ready to be wired up to your data.</p>
    </div>
  </div>
);
