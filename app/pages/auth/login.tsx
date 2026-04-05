{/*import { useEffect } from 'react';
import { useActionState } from 'react';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Link } from "react-router";
import { loginAction } from "~/utils/actions/auth";
import { loginSchema, type LoginFormData } from "~/utils/validations/auth";
import { Button } from "~/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "~/components/ui/form";
import { Input } from "~/components/ui/input";
import { Card, CardContent, CardHeader } from "~/components/ui/card";

export default function Login() {
  const [state, formAction] = useActionState(loginAction, null);
  const form = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onChange",
  });

  useEffect(() => {
    if (state?.error) {
      const errors = JSON.parse(state.error);
      Object.keys(errors).forEach((key) => {
        form.setError(key as keyof LoginFormData, {
          message: errors[key]
        });
      });
    }
  }, [state, form]);

  return (
    <div className="flex min-h-screen items-center justify-center">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <h2 className="text-3xl font-bold">Sign in to your account</h2>
          <p className="mt-2 text-muted-foreground">
            Or{" "}
            <Link to="/register" className="text-primary hover:underline">
              create a new account
            </Link>
          </p>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form action={formAction} className="space-y-4">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input type="password" placeholder="Enter your password" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full">
                Sign in
              </Button>
              
              {/* {state?.error && (
                <p className="text-sm text-destructive">{state.error}</p>
              )} */}
              {/*{state?.message && (
                <p className="text-sm text-green-600">{state.message}</p>
              )}
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}*/}


import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, Eye, EyeOff, Brain, Mail, Lock, User } from "lucide-react";

/* ─────────────────────── TAB SWITCHER ─────────────────────── */

interface TabsProps {
  active: string;
  onChange: (tab: "login" | "register") => void;
}
function Tabs({ active, onChange }: TabsProps) {
  return (
    <div className="relative flex items-center bg-[#EDEEF0] rounded-full p-1.5 w-full">
      {/* Sliding pill */}
      <motion.div
        layout
        transition={{ type: "spring", stiffness: 400, damping: 30 }}
        className={`absolute top-1.5 bottom-1.5 w-[calc(50%-6px)] bg-white rounded-full shadow-sm ${
          active === "login" ? "left-1.5" : "left-[calc(50%+3px)]"
        }`}
      />
      {["login", "register"].map((tab) => (
        <button
          key={tab}
          onClick={() => onChange(tab)}
          className={`relative z-10 flex-1 py-2.5 text-sm font-semibold rounded-full transition-colors duration-200 capitalize ${
            active === tab ? "text-indigo-700" : "text-[#464555]"
          }`}
        >
          {tab === "login" ? "Login" : "Register"}
        </button>
      ))}
    </div>
  );
}

/* ─────────────────────── INPUT FIELD ─────────────────────── */
interface InputFieldProps {
  label?: string;
  type?: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  rightSlot?: React.ReactNode;
  icon?: React.ComponentType<{ size: number; className?: string }>;
}

function InputField({ label, type = "text", placeholder, value, onChange, rightSlot, icon: Icon }: InputFieldProps) {
  const [focused, setFocused] = useState(false);
  return (
    <div className="flex flex-col gap-2 w-full">
      {label && (
        <div className="flex items-center justify-between px-1">
          <label className="text-[11px] font-semibold uppercase tracking-[0.6px] text-[#464555]">
            {label}
          </label>
          {rightSlot}
        </div>
      )}
      <motion.div
        animate={{ boxShadow: focused ? "0 0 0 2px rgba(53,37,205,0.25)" : "0 0 0 0px transparent" }}
        transition={{ duration: 0.2 }}
        className="flex items-center gap-3 bg-[#F3F4F6] rounded-full px-6 h-14"
      >
        {Icon && <Icon size={16} className="text-gray-400 flex-shrink-0" />}
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className="flex-1 bg-transparent text-base text-gray-800 placeholder-gray-400/60 outline-none"
        />
      </motion.div>
    </div>
  );
}

/* ─────────────────────── PASSWORD FIELD ─────────────────────── */
interface PasswordFieldProps {
  label?: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  rightSlot?: React.ReactNode;
}
function PasswordField({ label, placeholder, value, onChange, rightSlot }: PasswordFieldProps) {
  const [show, setShow] = useState(false);
  const [focused, setFocused] = useState(false);
  return (
    <div className="flex flex-col gap-2 w-full">
      {label && (
        <div className="flex items-center justify-between px-1">
          <label className="text-[11px] font-semibold uppercase tracking-[0.6px] text-[#464555]">
            {label}
          </label>
          {rightSlot}
        </div>
      )}
      <motion.div
        animate={{ boxShadow: focused ? "0 0 0 2px rgba(53,37,205,0.25)" : "0 0 0 0px transparent" }}
        transition={{ duration: 0.2 }}
        className="flex items-center gap-3 bg-[#F3F4F6] rounded-full px-6 h-14"
      >
        <Lock size={16} className="text-gray-400 flex-shrink-0" />
        <input
          type={show ? "text" : "password"}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className="flex-1 bg-transparent text-base text-gray-800 placeholder-gray-400/60 outline-none"
        />
        <button
          type="button"
          onClick={() => setShow(!show)}
          className="text-gray-400 hover:text-gray-600 transition-colors flex-shrink-0"
        >
          {show ? <EyeOff size={16} /> : <Eye size={16} />}
        </button>
      </motion.div>
    </div>
  );
}

/* ─────────────────────── DIVIDER ─────────────────────── */
interface DividerProps {
  label: string;
}
function Divider({ label }: DividerProps) {
  return (
    <div className="relative flex items-center w-full my-1">
      <div className="flex-1 border-t border-[rgba(199,196,216,0.3)]" />
      <span className="px-4 text-[10px] font-medium uppercase tracking-[1.2px] text-[#464555] bg-white">
        {label}
      </span>
      <div className="flex-1 border-t border-[rgba(199,196,216,0.3)]" />
    </div>
  );
}

/* ─────────────────────── LOGIN FORM ─────────────────────── */
function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => setLoading(false), 1800);
  };

  return (
    <motion.form
      key="login"
      initial={{ opacity: 0, x: -16 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 16 }}
      transition={{ duration: 0.28, ease: "easeOut" }}
      onSubmit={handleSubmit}
      className="flex flex-col gap-6 w-full"
    >
      <InputField
        label="Email Address"
        type="email"
        placeholder="alex@rivers.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        icon={Mail}
      />

      <PasswordField
        label="Password"
        placeholder="••••••••"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        rightSlot={
          <button
            type="button"
            className="text-[12px] font-semibold text-indigo-700 hover:text-indigo-500 transition-colors"
          >
            Forgot?
          </button>
        }
      />

      {/* Remember me */}
      <label className="flex items-center gap-3 cursor-pointer select-none px-2">
        <div
          onClick={() => setRemember(!remember)}
          className={`w-5 h-5 rounded-full border flex items-center justify-center flex-shrink-0 transition-all duration-200 ${
            remember
              ? "bg-indigo-700 border-indigo-700"
              : "bg-white border-[#C7C4D8]"
          }`}
        >
          {remember && (
            <motion.svg
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              width="10"
              height="8"
              viewBox="0 0 10 8"
              fill="none"
            >
              <path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </motion.svg>
          )}
        </div>
        <span className="text-sm font-medium text-[#464555]">Keep me logged in</span>
      </label>

      {/* Submit button */}
      <motion.button
        type="submit"
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.98 }}
        disabled={loading}
        className="relative w-full h-14 rounded-full flex items-center justify-center gap-2 font-bold text-base text-white overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #3525CD 0%, #4F46E5 100%)",
          boxShadow: "0 10px 20px -4px rgba(53,37,205,0.35)",
        }}
      >
        <AnimatePresence mode="wait">
          {loading ? (
            <motion.div
              key="loader"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex items-center gap-2"
            >
              <svg className="animate-spin w-5 h-5 text-white" viewBox="0 0 24 24" fill="none">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
              </svg>
              <span>Signing in…</span>
            </motion.div>
          ) : (
            <motion.div
              key="text"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex items-center gap-2"
              style={{ fontFamily: "Manrope, sans-serif" }}
            >
              Sign in
              <ArrowRight size={16} />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </motion.form>
  );
}

/* ─────────────────────── REGISTER FORM ─────────────────────── */
function RegisterForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => setLoading(false), 1800);
  };

  return (
    <motion.form
      key="register"
      initial={{ opacity: 0, x: 16 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -16 }}
      transition={{ duration: 0.28, ease: "easeOut" }}
      onSubmit={handleSubmit}
      className="flex flex-col gap-5 w-full"
    >
      <InputField
        label="Full Name"
        type="text"
        placeholder="Alex Rivers"
        value={name}
        onChange={(e) => setName(e.target.value)}
        icon={User}
      />
      <InputField
        label="Email Address"
        type="email"
        placeholder="alex@rivers.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        icon={Mail}
      />
      <PasswordField
        label="Password"
        placeholder="Create a strong password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <PasswordField
        label="Confirm Password"
        placeholder="Repeat your password"
        value={confirm}
        onChange={(e) => setConfirm(e.target.value)}
      />

      <motion.button
        type="submit"
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.98 }}
        disabled={loading}
        className="relative w-full h-14 rounded-full flex items-center justify-center gap-2 font-bold text-base text-white overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #3525CD 0%, #4F46E5 100%)",
          boxShadow: "0 10px 20px -4px rgba(53,37,205,0.35)",
        }}
      >
        <AnimatePresence mode="wait">
          {loading ? (
            <motion.div
              key="loader"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex items-center gap-2"
            >
              <svg className="animate-spin w-5 h-5 text-white" viewBox="0 0 24 24" fill="none">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
              </svg>
              <span>Creating account…</span>
            </motion.div>
          ) : (
            <motion.div
              key="text"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex items-center gap-2"
              style={{ fontFamily: "Manrope, sans-serif" }}
            >
              Create Account
              <ArrowRight size={16} />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </motion.form>
  );
}

/* ─────────────────────── SOCIAL BUTTONS ─────────────────────── */
function SocialButtons() {
  return (
    <div className="flex gap-3 w-full">
      {[
        {
          label: "Google",
          icon: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
          ),
        },
        {
          label: "Apple",
          icon: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-gray-900">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
            </svg>
          ),
        },
      ].map(({ label, icon }) => (
        <motion.button
          key={label}
          type="button"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.97 }}
          className="flex-1 flex items-center justify-center gap-2.5 h-12 rounded-full border border-[rgba(199,196,216,0.35)] bg-white hover:bg-gray-50 transition-colors text-sm font-semibold text-gray-800"
        >
          {icon}
          {label}
        </motion.button>
      ))}
    </div>
  );
}

/* ─────────────────────── AUTH CARD ─────────────────────── */
export default function AuthPage() {
  const [tab, setTab] = useState("login");

  return (
    <div className="min-h-screen w-full bg-[#F3F4F6] flex items-center justify-center px-4 py-16 sm:py-24">
      {/* Subtle radial glow */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 40%, rgba(79,70,229,0.06) 0%, transparent 70%)",
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 32, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        className="relative w-full max-w-[480px] bg-white rounded-[48px] px-10 sm:px-12 py-12 flex flex-col items-center gap-7"
        style={{
          border: "1px solid rgba(199,196,216,0.12)",
          boxShadow: "0 20px 60px rgba(79,70,229,0.09), 0 4px 16px rgba(0,0,0,0.04)",
        }}
      >
        {/* Logo mark */}
        <div className="flex flex-col items-center gap-1 w-full text-center">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-600 to-violet-600 flex items-center justify-center mb-2 shadow-lg shadow-indigo-200">
            <Brain size={18} className="text-white" />
          </div>
          <h1
            className="text-[30px] font-extrabold text-[#191C1E] tracking-[-0.75px] leading-tight"
            style={{ fontFamily: "Manrope, sans-serif" }}
          >
            {tab === "login" ? "Welcome back" : "Create account"}
          </h1>
          <p className="text-base text-[#464555] leading-snug">
            {tab === "login"
              ? "Step into your sanctuary of focused learning."
              : "Start your journey toward mastery today."}
          </p>
        </div>

        {/* Tabs */}
        <Tabs active={tab} onChange={setTab} />

        {/* Social buttons */}
        <SocialButtons />

        {/* Divider */}
        <Divider label="Or continue with email" />

        {/* Form */}
        <div className="w-full">
          <AnimatePresence mode="wait">
            {tab === "login" ? <LoginForm key="login" /> : <RegisterForm key="register" />}
          </AnimatePresence>
        </div>

        {/* Footer link */}
        <p className="text-sm text-[#464555] text-center">
          {tab === "login" ? (
            <>
              Don't have an account?{" "}
              <button
                onClick={() => setTab("register")}
                className="text-indigo-700 font-semibold hover:text-indigo-500 transition-colors"
              >
                Create an account
              </button>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <button
                onClick={() => setTab("login")}
                className="text-indigo-700 font-semibold hover:text-indigo-500 transition-colors"
              >
                Sign in
              </button>
            </>
          )}
        </p>
      </motion.div>
    </div>
  );
}