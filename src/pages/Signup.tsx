import { AuthLayout } from "@/components/AuthLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link, useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { FormEvent } from "react";

const Signup = () => {
  const nav = useNavigate();
  const submit = (e: FormEvent) => { e.preventDefault(); nav("/app"); };
  return (
    <AuthLayout title="Create your account" subtitle="Start validating ideas in 60 seconds">
      <form onSubmit={submit} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="name">Full name</Label>
          <Input id="name" required placeholder="Ada Lovelace" className="bg-muted/40 border-border" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" required placeholder="founder@startup.com" className="bg-muted/40 border-border" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <Input id="password" type="password" required placeholder="At least 8 characters" className="bg-muted/40 border-border" />
        </div>
        <Button variant="hero" size="lg" type="submit" className="w-full">Create account <ArrowRight className="h-4 w-4" /></Button>
      </form>
      <div className="my-6 flex items-center gap-3"><div className="h-px flex-1 bg-border" /><span className="text-xs text-muted-foreground">or</span><div className="h-px flex-1 bg-border" /></div>
      <Button variant="glass" className="w-full">Continue with Google</Button>
      <p className="text-center text-sm text-muted-foreground mt-6">
        Already have an account? <Link to="/login" className="text-primary-glow hover:underline">Sign in</Link>
      </p>
    </AuthLayout>
  );
};
export default Signup;
