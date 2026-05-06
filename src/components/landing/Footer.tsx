import { Logo } from "@/components/Logo";
import { Github, Linkedin, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

const sections = [
  { title: "Product", links: ["Features", "Pricing", "Demo", "Changelog"] },
  { title: "Resources", links: ["Docs", "Blog", "Guides", "API"] },
  { title: "Company", links: ["About", "Contact", "Careers", "Press"] },
  { title: "Legal", links: ["Privacy", "Terms", "Security", "Cookies"] },
];

export const Footer = () => (
  <footer className="border-t border-border/50 py-16 mt-12">
    <div className="container">
      <div className="grid md:grid-cols-6 gap-10 mb-12">
        <div className="md:col-span-2">
          <Logo />
          <p className="text-sm text-muted-foreground mt-4 max-w-xs">
            AI-powered startup validation. Built for the next generation of founders.
          </p>
          <div className="flex gap-3 mt-5">
            {[Twitter, Linkedin, Github].map((I, i) => (
              <a key={i} href="#" className="w-9 h-9 rounded-lg glass flex items-center justify-center hover:bg-primary/20 transition-colors">
                <I className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
        {sections.map(s => (
          <div key={s.title}>
            <div className="font-semibold text-sm mb-4">{s.title}</div>
            <ul className="space-y-2">
              {s.links.map(l => (
                <li key={l}><Link to="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">{l}</Link></li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between gap-3 text-xs text-muted-foreground">
        <div>© {new Date().getFullYear()} StartupIQ. All rights reserved.</div>
        <div>Made with care for founders worldwide.</div>
      </div>
    </div>
  </footer>
);
