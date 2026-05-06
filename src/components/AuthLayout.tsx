import { Logo } from "@/components/Logo";
import { motion } from "framer-motion";
import { ReactNode } from "react";

export const AuthLayout = ({ title, subtitle, children }: { title: string; subtitle: string; children: ReactNode }) => (
  <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden">
    <div className="absolute inset-0 grid-bg opacity-30 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_70%)]" />
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[150px]" />
    <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/20 rounded-full blur-[120px]" />

    <motion.div
      initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
      className="relative w-full max-w-md"
    >
      <div className="flex justify-center mb-8"><Logo /></div>
      <div className="glass-strong rounded-3xl p-8 shadow-elegant">
        <h1 className="font-display font-bold text-2xl mb-2 text-center">{title}</h1>
        <p className="text-sm text-muted-foreground text-center mb-6">{subtitle}</p>
        {children}
      </div>
    </motion.div>
  </div>
);
