import { FiArrowRight,  FiMail, FiUser } from "react-icons/fi";
import Field from "./Field";
import PasswordField from "./PasswordField";
export default function Registor() {
  const inputClass =
    "w-full rounded-xl border border-stone-200 bg-white/80 px-4 py-3.5 text-sm text-stone-800 outline-none transition placeholder:text-stone-400 focus:border-emerald-600 focus:ring-4 focus:ring-emerald-600/10";

  return (
    <form onSubmit={(event) => event.preventDefault()} className="space-y-5">
      <Field
        label="Full name"
        placeholder="Your name"
        icon={FiUser}
        autoComplete="name"
        inputClass={inputClass}
      />
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
        autoComplete="new-password"
        inputClass={inputClass}
        required
      />
      <PasswordField
        label="Confirm password"
        placeholder="Repeat your password"
        autoComplete="new-password"
        required
        inputClass={inputClass}
      />
      {/* <div className="flex items-center justify-between pt-1 text-xs">
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
      </div> */}
      <button
        type="submit"
        className="group mt-2 flex w-full items-center justify-center gap-3 rounded-xl bg-emerald-800 px-5 py-4 text-sm font-bold text-white shadow-lg shadow-emerald-900/15 transition hover:bg-emerald-700 hover:shadow-xl active:scale-[0.99]"
      >
        Create my account
        <FiArrowRight
          className="transition-transform group-hover:translate-x-1"
          size={17}
        />
      </button>
    </form>
  );
}
