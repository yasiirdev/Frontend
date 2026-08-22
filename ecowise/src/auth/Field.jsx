export default function Field({ inputClass ,label, type = "text", placeholder, icon: Icon, ...props }) {
  return (
    <label className="block space-y-2">
      <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-stone-500">
        {label}
      </span>
      <span className="relative block">
        <Icon
          className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-stone-400"
          size={17}
        />
        <input
          className={`${inputClass} pl-11`}
          type={type}
          placeholder={placeholder}
          {...props}
        />
      </span>
    </label>
  );
}
