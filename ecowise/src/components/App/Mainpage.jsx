import { useMemo } from "react";
import Menu from "./Menu";
import { useSelector } from "react-redux";
import DashBoard from "./Dashboard";
import Detection from "./Detection";
import History from "./History";


export default function MainPage() {
  const { menu } = useSelector(store => store.menu);

  
  const content = useMemo(() => {
    switch (menu) {
      case "dashboard":
        return <DashBoard/>;
      case "detection":
        return <Detection />;
      case "profile":
        return <Detection />;
      case "history":
      default:
        return <History />;
    }
  }, [menu]);

  return (
    <div className="min-h-screen bg-[#f4fafd] md:flex md:items-start">
      <Menu activeItem={menu} />
      <main className="min-h-screen flex-1 overflow-y-auto px-4 pb-28 pt-4 sm:px-6 md:h-screen md:px-8 md:pb-8 md:pt-8 lg:px-10">
        <div className="mx-auto h-auto max-w-7xl">{content}</div>
      </main>
    </div>
  );
}
