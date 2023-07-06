"use client"

import { useState } from 'react';
import { useGetClientsQuery } from '@/utils/redux/api/clientsApi';
import { Client } from '@/utils/interfaces';
import Link from 'next/link';

export default function ClientsList() {
  const { data: clients } = useGetClientsQuery();
  const [searchTerm, setSearchTerm] = useState('');

  const filteredClients = clients?.filter((client: Client) =>
    client.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="w-70">
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearch}
        placeholder="Buscar cliente..."
        className="mb-4 text-black"
      />

      <table className="mx-auto bg-black text-white p-6 rounded-lg shadow-lg">
        <thead>
          <tr>
            <th className="text-left px-4 py-2 text-amber-400">ID Cliente</th>
            <th className="text-left px-4 py-2 text-amber-400">Nombre</th>
            <th className="text-left px-4 py-2 text-amber-400">Dirección</th>
            <th className="text-left px-4 py-2 text-amber-400">Teléfono</th>
            <th className="text-left px-4 py-2 text-amber-400">Editar</th>
          </tr>
        </thead>
        <tbody>
          {filteredClients &&
            filteredClients.map((client: Client) => (
              <tr key={client.clientId} className="mb-4">
                <td className="px-4 py-2">{client.clientId}</td>
                <td className="px-4 py-2">{client.name}</td>
                <td className="px-4 py-2">{client.address}</td>
                <td className="px-4 py-2">{client.phone}</td>
                <td  className="text-amber-400">
                  <Link href={`/clients/${client.clientId}`}>
                      <span onClick={(e) => e.stopPropagation()}>Editar</span>
                  </Link>
                  </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}