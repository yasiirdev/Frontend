import { useState } from "react";
import {
  FiEye,
  FiEyeOff,
  FiLock,
} from "react-icons/fi";


export default function PasswordField({ inputClass , label, placeholder, ...props }) {
  const [visible, setVisible] = useState(false);
  return (
    <label htmlFor="password" className="block space-y-2">
      <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-stone-500">
        {label}
      </span>
      <span className="relative block">
        <FiLock
          className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-stone-400"
          size={17}
        />
        <input
          className={`${inputClass} pl-11 pr-12`}
          type={visible ? "text" : "password"}
          placeholder={placeholder}
          {...props}
          name="password"
          id="password"
        />
        <button
          type="button"
          aria-label={visible ? "Hide password" : "Show password"}
          onClick={() => setVisible(!visible)}
          className="absolute right-3 top-1/2 -translate-y-1/2 rounded-lg p-2 text-stone-400 transition hover:bg-stone-100 hover:text-emerald-700"
        >
          {visible ? <FiEyeOff size={17} /> : <FiEye size={17} />}
        </button>
      </span>
    </label>
  );
}
