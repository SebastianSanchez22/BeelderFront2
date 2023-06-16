'use client'
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { faBars } from '@fortawesome/free-solid-svg-icons';
config.autoAddCss = false


export default function SideBarButton({children }: { children: React.ReactNode}) {

const [isSidebarOpen, setIsSidebarOpen] = useState(false);

const handleSidebarToggle = () => { 
  setIsSidebarOpen(!isSidebarOpen);
};

return (
    <div className="relative">
      <button className="fixed top-4 right-4 border rounded border-solid border-[#f0f0f0] px-3 py-2" onClick={handleSidebarToggle}>
      <FontAwesomeIcon icon={faBars} size='2x' />
      </button>
      {isSidebarOpen && children}
    </div>
)
}