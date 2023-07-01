"use client"

import { useGetClientsQuery } from '@/utils/redux/api/clientsApi';
import { Client } from '@/utils/interfaces';

export default function ClientsList() {
  const { data: clients } = useGetClientsQuery(); // useGetClientsQuery hook from RTK Query

  return (
    <div className="w-70">
    <table className="mx-auto bg-black text-white p-6 rounded-lg shadow-lg">
        <thead>
        <tr>
            <th className="text-left px-4 py-2 text-amber-400">ID Cliente</th>
            <th className="text-left px-4 py-2 text-amber-400">Nombre</th>
            <th className="text-left px-4 py-2 text-amber-400">Dirección</th>
            <th className="text-left px-4 py-2 text-amber-400">Teléfono</th>
        </tr>
        </thead>
        <tbody>
        {clients && clients.map((client: Client) => (
            <tr key={client.clientId} className="mb-4">
            <td className="px-4 py-2">{client.clientId}</td>
            <td className="px-4 py-2">{client.name}</td>
            <td className="px-4 py-2">{client.address}</td>
            <td className="px-4 py-2">{client.phone}</td>
            </tr>
        ))}
        </tbody>
    </table>
    </div>
  );
}