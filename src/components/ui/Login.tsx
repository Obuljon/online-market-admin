import { ShieldCheck, Loader2 } from 'lucide-react';
import { Input } from './input';
import { Button } from './button';
export default function Login() {
  return (
      <div className="flex min-h-screen items-center justify-center bg-muted/40 px-4">
      <div className="w-full max-w-100 space-y-6 rounded-xl border bg-card p-8 shadow-lg">
        <div className="flex flex-col items-center gap-2 text-center">
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground shadow-sm">
            <ShieldCheck className="h-6 w-6" />
          </div>
          <h1 className="text-2xl font-semibold tracking-tight">Admin Login</h1>
          <p className="text-sm text-muted-foreground">Enter your credentials to access the panel</p>
        </div>

        <form  className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium leading-none" htmlFor="email">Email</label>
            <Input 
              id="email" 
              type="email" 
              placeholder="admin@example.com" 
              required 
              defaultValue="admin@figma.com"
            />
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label className="text-sm font-medium leading-none" htmlFor="password">Password</label>
              <button type="button" className="text-xs font-medium text-primary hover:underline">Forgot password?</button>
            </div>
            <Input
              id="password" 
              type="password" 
              required 
              defaultValue="password123"
            />
          </div>
          <Button className="w-full" type="submit">
            <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Signing in...
              </>
             {/* 'Sign In' */}
          </Button>
        </form>

        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-card px-2 text-muted-foreground"></span>
          </div>
        </div>
        
        {/* <p className="text-center text-xs text-muted-foreground">
          Email: admin@figma.com <br/>
          Password: password123
        </p> */}
      </div>
    </div>
  )
}
