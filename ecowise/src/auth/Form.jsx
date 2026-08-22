import Field from "./Field";
import PasswordField from "./PasswordField";
import { useState } from "react";
import {
  FiArrowRight,
  FiMail,
  FiUser,
} from "react-icons/fi";

const inputClass =
  "w-full rounded-xl border border-stone-200 bg-white/80 px-4 py-3.5 text-sm text-stone-800 outline-none transition placeholder:text-stone-400 focus:border-emerald-600 focus:ring-4 focus:ring-emerald-600/10";


export default function Form() {
  const [mode, setMode] = useState("login");
  const isLogin = mode === "login";

  return (
    <main className="min-h-screen bg-[#f5f4ef] p-4 font-Inter text-stone-800 sm:p-6 lg:p-10">
      <div className="mx-auto grid min-h-[calc(100vh-2rem)] max-w-6xl overflow-hidden rounded-4xl bg-white shadow-[0_24px_80px_rgba(35,58,39,0.12)] sm:min-h-[calc(100vh-3rem)] lg:grid-cols-[0.92fr_1.08fr]">
        <section className="flex items-center justify-center p-7 sm:p-12 lg:p-16">
          <div className="w-full max-w-md">
            <div className="mb-9">
              <div className="mb-7 flex rounded-xl bg-stone-100 p-1 text-sm font-semibold">
                <button
                  type="button"
                  onClick={() => setMode("login")}
                  className={`flex-1 rounded-lg px-4 py-2.5 transition ${isLogin ? "bg-white text-emerald-800 shadow-sm" : "text-stone-500 hover:text-stone-800"}`}
                >
                  Log in
                </button>
                <button
                  type="button"
                  onClick={() => setMode("signup")}
                  className={`flex-1 rounded-lg px-4 py-2.5 transition ${!isLogin ? "bg-white text-emerald-800 shadow-sm" : "text-stone-500 hover:text-stone-800"}`}
                >
                  Create account
                </button>
              </div>
              <p className="mb-2 text-sm font-semibold text-emerald-700">
                {isLogin ? "Welcome back" : "Start your journey"}
              </p>
              <h2 className="font-Mon text-3xl font-semibold tracking-tight text-stone-900">
                {isLogin ? "Good to see you again." : "Make an impact today."}
              </h2>
              <p className="mt-3 text-sm leading-6 text-stone-500">
                {isLogin
                  ? "Pick up where you left off and keep making thoughtful choices."
                  : "Join a community turning everyday habits into a healthier planet."}
              </p>
            </div>
            <form
              onSubmit={(event) => event.preventDefault()}
              className="space-y-5"
            >
              {!isLogin && (
                <Field
                  label="Full name"
                  placeholder="Your name"
                  icon={FiUser}
                  autoComplete="name"
                  inputClass={inputClass}
                />
              )}
              <Field
                label="Email address"
                type="email"
                placeholder="you@example.com"
                icon={FiMail}
                autoComplete="email"
                inputClass={inputClass}
                required
              />
              <PasswordField
                label="Password"
                placeholder="Enter your password"
                autoComplete={isLogin ? "current-password" : "new-password"}
                inputClass={inputClass}
                required
              />
              {!isLogin && (
                <PasswordField
                  label="Confirm password"
                  placeholder="Repeat your password"
                  autoComplete="new-password"
                  required
                  inputClass={inputClass}
                />
              )}
              {isLogin && (
                <div className="flex items-center justify-between pt-1 text-xs">
                  <label className="flex cursor-pointer items-center gap-2 text-stone-500">
                    <input
                      type="checkbox"
                      className="h-4 w-4 rounded border-stone-300 accent-emerald-700"
                    />{" "}
                    Remember me
                  </label>
                  <button
                    type="button"
                    className="font-semibold text-emerald-700 hover:text-emerald-900"
                  >
                    Forgot password?
                  </button>
                </div>
              )}
              <button
                type="submit"
                className="group mt-2 flex w-full items-center justify-center gap-3 rounded-xl bg-emerald-800 px-5 py-4 text-sm font-bold text-white shadow-lg shadow-emerald-900/15 transition hover:bg-emerald-700 hover:shadow-xl active:scale-[0.99]"
              >
                {isLogin ? "Log in to EcoWise" : "Create my account"}
                <FiArrowRight
                  className="transition-transform group-hover:translate-x-1"
                  size={17}
                />
              </button>
            </form>
            <p className="mt-8 text-center text-xs text-stone-500">
              {isLogin ? "New to EcoWise?" : "Already have an account?"}{" "}
              <button
                type="button"
                onClick={() => setMode(isLogin ? "signup" : "login")}
                className="font-bold text-emerald-700 hover:underline"
              >
                {isLogin ? "Create an account" : "Log in"}
              </button>
            </p>
            <p className="mt-10 text-center text-[11px] leading-5 text-stone-400">
              By continuing, you agree to our Terms of Service and Privacy
              Policy.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}