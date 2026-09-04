//import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setMode } from "../state/reducer/menu";
import ecoWiseImage from "../assets/login.jpg";
import Login from "./login";
import Registor from "./register";

export default function Form() {
  const { mode } = useSelector((store) => store.menu);
  const dispatch = useDispatch();
  const isLogin = mode === "login";

  const handleNavigation = () => {
    dispatch(setMode(isLogin ? "signup" : "login"));
  };

  return (
    <main className="min-h-screen bg-[#f5f4ef] p-4 font-Inter text-stone-800 sm:p-6 lg:p-10">
      <div className="mx-auto grid min-h-[calc(100vh-2rem)] sm:max-w-6xl overflow-hidden rounded-4xl bg-white shadow-[0_24px_80px_rgba(35,58,39,0.12)] sm:min-h-[calc(100vh-3rem)] md:grid-cols-[0.9fr_1.1fr]">
        <aside className="hidden md:block relative min-h-64 overflow-hidden bg-emerald-950 md:min-h-full ">
          <img
            src={ecoWiseImage}
            alt="EcoWise sustainability platform in a forest"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-t from-emerald-950/90 via-emerald-950/15 to-transparent" />
          <div className="relative flex h-full min-h-64 flex-col justify-end p-8 text-white sm:p-12 md:min-h-full">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-emerald-200">
              Better choices, measured
            </p>
            <h1 className="max-w-sm font-Mon text-3xl font-semibold leading-tight sm:text-4xl">
              Make your everyday impact count.
            </h1>
            <p className="mt-4 max-w-sm text-sm leading-6 text-emerald-50/80">
              Track thoughtful habits and turn small changes into a healthier
              planet.
            </p>
          </div>
        </aside>
        <section className="flex items-center justify-center p-7  sm:p-12 md:p-14 lg:p-16">
          <div className="w-full md:w-full max-w-md">
            <div className="mb-9">
              {/* <div className="mb-7 flex rounded-xl bg-stone-100 p-1 text-sm font-semibold">
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
              </div>*/}
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

            {isLogin ? <Login /> : <Registor />}

            <p className="mt-8 text-center text-xs text-stone-500">
              {isLogin ? "New to EcoWise?" : "Already have an account?"}{" "}
              <button
                type="button"
                onClick={() => handleNavigation()}
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
