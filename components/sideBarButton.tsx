'use client'
import { useState } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { config } from '@fortawesome/fontawesome-svg-core'
config.autoAddCss = false;

const links = [
  { label: 'Home', route: '/' },
  { label: 'Máquinas', route: '/maquinas'},
  { label: 'Órdenes', route: '/ordenes'},
  { label: 'Proveedores', route: '/proveedores',},
  { label: 'Clientes', route: '/clientes'},
];

export default function SideBarButton({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  
  const handleSidebarClose = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div className="relative">
      <button
        className="fixed top-2 right-4 z-20 flex items-center justify-center w-12 h-12 rounded border border-solid border-[#f0f0f0]"
        onClick={handleSidebarToggle}
      >
        <FontAwesomeIcon icon={isSidebarOpen ? faTimes : faBars} size="lg" />
      </button>
      {isSidebarOpen && (
        <aside className="fixed top-0 right-0 h-fit w-40 p-4 bg-black z-10 rounded-md">
          <nav>
            <ul className="space-y-4">
              {links.map(({ label, route}) => (
                <li  className="text-amber-400" key={route} onClick={handleSidebarClose}>
                  <Link href={route}>
                      <span>{label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </aside>
      )}
      {children}
    </div>
  );
}