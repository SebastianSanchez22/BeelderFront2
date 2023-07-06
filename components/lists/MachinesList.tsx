"use client"

import { useState } from 'react';
import { useGetMachinesQuery } from '@/utils/redux/api/machinesApi';
import { Machine, Supplier } from '@/utils/interfaces';
import { useGetSupplierByIdQuery } from '@/utils/redux/api/suppliersApi';
import Link from 'next/link';

export default function MachinesList() {
  const { data: machines } = useGetMachinesQuery();
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedMachineId, setExpandedMachineId] = useState('');

  const filteredMachines = machines?.filter((machine: Machine) =>
    machine.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleExpand = (machineId: string) => {
    if (expandedMachineId === machineId) {
      setExpandedMachineId('');
    } else {
      setExpandedMachineId(machineId);
    }
  };

  const { data: supplier } = useGetSupplierByIdQuery("649a4aac972b7fd416ff46a8");

  //const { data: supplier } = useGetSupplierByIdQuery(expandedMachineId ? filteredMachines?.find(machine => machine.machineId === expandedMachineId)?.supplierId || '' : '');

  return (
    <div className="w-70">
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearch}
        placeholder="Buscar máquina..."
        className="mb-4 text-black"
      />

      <table className="mx-auto bg-black text-white p-6 rounded-lg shadow-lg">
        <thead>
          <tr>
            <th className="text-left px-4 py-2 text-amber-400">ID Máquina</th>
            <th className="text-left px-4 py-2 text-amber-400">Nombre</th>
            <th className="text-left px-4 py-2 text-amber-400">Categoría</th>
            <th className="text-left px-4 py-2 text-amber-400">Cantidad Total</th>
            <th className="text-left px-4 py-2 text-amber-400">ID Proveedor</th>
            <th className="text-left px-4 py-2 text-amber-400">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {filteredMachines &&
            filteredMachines.map((machine: Machine) => (
              <>
                <tr key={machine.machineId}
                  className="mb-4"
                  onClick={() => handleExpand(machine.machineId)}
                  style={{ cursor: 'pointer' }}
                >
                  <td className="px-4 py-2">{machine.machineId}</td>
                  <td className="px-4 py-2">{machine.name}</td>
                  <td className="px-4 py-2">{machine.category}</td>
                  <td className="px-4 py-2">{machine.totalQuantity}</td>
                  <td className="px-4 py-2">{machine.supplierId}</td>
                  <td  className="text-amber-400">
                  <Link href={`/machines/${machine.machineId}`}>
                      <span onClick={(e) => e.stopPropagation()}>Editar</span>
                  </Link>
                  </td>
                </tr>
                {expandedMachineId === machine.machineId && supplier && (
                  <tr key={supplier.supplierId}>
                    <td colSpan={6} className="p-4">
                      <strong>Proveedor:</strong> {supplier.name}
                      <br />
                      <strong>Zona Horaria:</strong> {supplier.timezone}
                      <br />
                      <strong>País:</strong> {supplier.country}
                      <br />
                      <strong>Lista de Máquinas:</strong>{' '}
                      {supplier.machinesList && supplier.machinesList.join(', ')}
                    </td>
                  </tr>
                )}
              </>
            ))}
        </tbody>
      </table>
    </div>
  );
}