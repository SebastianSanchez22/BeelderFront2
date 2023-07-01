"use client"

import { useGetSuppliersQuery } from '@/utils/redux/api/suppliersApi';
import { Supplier } from '@/utils/interfaces';

export default function SuppliersList() {
  const { data: suppliers } = useGetSuppliersQuery(); // useGetSuppliersQuery hook from RTK Query

  return (
    <div className="w-70">
      <table className="mx-auto bg-black text-white p-6 rounded-lg shadow-lg">
        <thead>
          <tr>
            <th className="text-left px-4 py-2 text-amber-400">ID Proveedor</th>
            <th className="text-left px-4 py-2 text-amber-400">Nombre</th>
            <th className="text-left px-4 py-2 text-amber-400">Zona Horaria</th>
            <th className="text-left px-4 py-2 text-amber-400">País</th>
            <th className="text-left px-4 py-2 text-amber-400">Lista de Máquinas</th>
          </tr>
        </thead>
        <tbody>
          {suppliers && suppliers.map((supplier: Supplier) => (
            <tr key={supplier.supplierId} className="mb-4">
              <td className="px-4 py-2">{supplier.supplierId}</td>
              <td className="px-4 py-2">{supplier.name}</td>
              <td className="px-4 py-2">{supplier.timezone}</td>
              <td className="px-4 py-2">{supplier.country}</td>
              <td className="px-4 py-2">{supplier.machinesList && supplier.machinesList.join(', ')}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}