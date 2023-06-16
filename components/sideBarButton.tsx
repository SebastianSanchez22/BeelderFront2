'use client'
import { useState } from 'react';


export default function SideBarButton({children }: { children: React.ReactNode}) {

const [isSidebarOpen, setIsSidebarOpen] = useState(false);

const handleSidebarToggle = () => { 
  setIsSidebarOpen(!isSidebarOpen);
};

return (
    <div className="relative">
      <button className="fixed top-4 right-4 border rounded border-solid border-[#f0f0f0]" onClick={handleSidebarToggle}>
        Toggle Sidebar
      </button>
      {isSidebarOpen && children}
    </div>
)
}