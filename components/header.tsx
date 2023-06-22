import SideBarButton from "./sideBarButton";
import Sidebar from "./sidebar";

export default function Header() {
  return (
    <header className="flex justify-between items-center py-4 px-8">
      <div className="flex items-center">
        <img src="/logo.png" alt="Logo" className="h-8 mr-4" />
        <h1 className="text-2xl font-bold text-amber-400">Beelder</h1>
      </div>
      <div className="relative">
      <SideBarButton>
        
      </SideBarButton>
      </div>
    </header>
  );
}