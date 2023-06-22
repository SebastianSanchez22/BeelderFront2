import Link from "next/link"

const links = [{
  label: 'Home',
  route: '/',
}, {
  label: 'Maquinas',
  route: '/maquinas',
}, {
  label: 'Ordenes',
  route: '/ordenes',
},{
  label: 'Proveedores',
  route: '/proveedores',
}, {
  label: 'Clientes',
  route: '/clientes',
}]

export default function Sidebar() {
    return (
        <aside className="border rounded-md border-solid border-[#f0f0f0] p-4 flex flex-col-reverse absolute right-[-1rem] bg-black z-0">
          <nav>
            <ul className="flex flex-col gap-4">
              {links.map(({ label, route }) => (
                <li className="text-amber-400" key={route}>
                  <Link href={route}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </aside>
    )
}