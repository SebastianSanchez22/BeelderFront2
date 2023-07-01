"use client"

import { useGetMachinesQuery } from '@/utils/redux/api/machinesApi';
import { Machine } from '@/utils/interfaces';

export default function MachinesList() {
  const { data: machines } = useGetMachinesQuery(); // useGetMachinesQuery hook from RTK Query

  return (
    <div className="w-70">
      <table className="mx-auto bg-black text-white p-6 rounded-lg shadow-lg">
        <thead>
          <tr>
            <th className="text-left px-4 py-2 text-amber-400">ID Máquina</th>
            <th className="text-left px-4 py-2 text-amber-400">Nombre</th>
            <th className="text-left px-4 py-2 text-amber-400">Categoría</th>
            <th className="text-left px-4 py-2 text-amber-400">Cantidad Total</th>
            <th className="text-left px-4 py-2 text-amber-400">ID Proveedor</th>
          </tr>
        </thead>
        <tbody>
          {machines && machines.map((machine: Machine) => (
            <tr key={machine.machineId} className="mb-4">
              <td className="px-4 py-2">{machine.machineId}</td>
              <td className="px-4 py-2">{machine.name}</td>
              <td className="px-4 py-2">{machine.category}</td>
              <td className="px-4 py-2">{machine.totalQuantity}</td>
              <td className="px-4 py-2">{machine.supplierId}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}