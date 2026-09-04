import {
  LuHistory,
  LuLayoutDashboard,
  LuLeaf,
  LuScanSearch,
  LuUserRound,
} from "react-icons/lu";
import { useDispatch } from "react-redux";
import { setMenu } from "../../state/reducer/menu";

const MENU_ITEMS = [
  {
    id: "dashboard",
    label: "Dashboard",
    icon: LuLayoutDashboard,
  },
  {
    id: "detection",
    label: "Detection",
    icon: LuScanSearch,
  },
  {
    id: "history",
    label: "History",
    icon: LuHistory,
  },
  {
    id: "profile",
    label: "Profile",
    icon: LuUserRound,
  },
];

function MenuItem({ item, isActive }) {
  const Icon = item.icon;
  const dispatch = useDispatch();
  
  return (
    <li>
      <button
        type="button"
        onClick={() => dispatch(setMenu(item.id))}
        aria-label={item.label}
        aria-current={isActive ? "page" : undefined}
        className={[
          "flex w-full flex-col items-center justify-center gap-1.5 rounded-2xl px-2 py-2.5 text-center text-xs font-medium transition-colors duration-200 md:flex-row md:justify-start md:gap-3 md:px-4 md:py-3 md:text-left md:text-sm",
          isActive
            ? "bg-lime-300 text-emerald-950 shadow-sm"
            : "text-slate-500 hover:bg-slate-100 hover:text-slate-950",
        ].join(" ")}
      >
        <span
          className={[
            "flex  items-center justify-center rounded-xl transition-colors duration-200 md:h-10  md:w-10",
            isActive
              ? "bg-white/50 text-emerald-950 md:bg-lime-300"
              : "bg-transparent text-slate-600 md:bg-slate-50",
          ].join(" ")}
        >
          <Icon size={20} />
        </span>

        <span className="hidden md:inline">{item.label}</span>
      </button>
    </li>
  );
}

export default function Menu({ activeItem  }) {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-slate-200 bg-white/95 px-3 py-2 shadow-[0_-10px_30px_rgba(15,23,42,0.08)] backdrop-blur md:static md:w-72 md:max-w-[18rem] md:flex-none md:self-stretch md:rounded-r-4xl md:border-t-0 md:border-r md:px-6 md:py-7 md:shadow-[0_22px_50px_rgba(15,23,42,0.08)]">
      <div className="hidden items-center gap-3 md:flex">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-900 text-lime-200 shadow-sm">
          <LuLeaf size={24} />
        </div>

        <div>
          <p className="text-2xl font-semibold tracking-tight text-emerald-950">
            EcoWise AI
          </p>
          <p className="text-sm text-slate-500">Sustainable Assistant</p>
        </div>
      </div>

      <nav className="md:mt-6" aria-label="Primary navigation">
        <ul className="grid grid-cols-4 gap-2 md:grid-cols-1 md:gap-2">
          {MENU_ITEMS.map((item) => (
            <MenuItem
              key={item.id}
              item={item}
              isActive={activeItem === item.id}
            />
          ))}
        </ul>
      </nav>
    </div>
  );
}
