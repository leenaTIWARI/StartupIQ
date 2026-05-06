import { Brain } from "lucide-react";
import { Link } from "react-router-dom";

export const Logo = ({ className = "" }: { className?: string }) => (
  <Link to="/" className={`flex items-center gap-2 group ${className}`}>
    <div className="relative">
      <div className="absolute inset-0 bg-gradient-primary rounded-lg blur-md opacity-60 group-hover:opacity-100 transition-opacity" />
      <div className="relative bg-gradient-primary p-2 rounded-lg">
        <Brain className="h-5 w-5 text-white" strokeWidth={2.2} />
      </div>
    </div>
    <div className="flex flex-col leading-none">
      <span className="font-display font-bold text-lg tracking-tight">
        Startup<span className="text-primary-glow">IQ</span>
      </span>
    </div>
  </Link>
);
