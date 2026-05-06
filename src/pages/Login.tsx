import { AuthLayout } from "@/components/AuthLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link, useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { FormEvent } from "react";

const Login = () => {
  const nav = useNavigate();
  const submit = (e: FormEvent) => { e.preventDefault(); nav("/app"); };
  return (
    <AuthLayout title="Welcome back" subtitle="Sign in to your StartupIQ account">
      <form onSubmit={submit} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="founder@startup.com" required className="bg-muted/40 border-border" />
        </div>
        <div className="space-y-2">
          <div className="flex justify-between">
            <Label htmlFor="password">Password</Label>
            <Link to="#" className="text-xs text-primary-glow hover:underline">Forgot?</Link>
          </div>
          <Input id="password" type="password" placeholder="••••••••" required className="bg-muted/40 border-border" />
        </div>
        <Button variant="hero" size="lg" type="submit" className="w-full">Sign in <ArrowRight className="h-4 w-4" /></Button>
      </form>
      <div className="my-6 flex items-center gap-3"><div className="h-px flex-1 bg-border" /><span className="text-xs text-muted-foreground">or</span><div className="h-px flex-1 bg-border" /></div>
      <Button variant="glass" className="w-full">Continue with Google</Button>
      <p className="text-center text-sm text-muted-foreground mt-6">
        New to StartupIQ? <Link to="/signup" className="text-primary-glow hover:underline">Create an account</Link>
      </p>
    </AuthLayout>
  );
};
export default Login;
