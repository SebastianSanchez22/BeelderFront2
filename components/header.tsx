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

export default function Header() {
    return (
        <header className="border rounded border-solid border-[#f0f0f0] p-4">
          <nav>
            <ul className="flex gap-4">
              {links.map(({ label, route }) => (
                <li key={route}>
                  <Link href={route}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </header>
    )
}