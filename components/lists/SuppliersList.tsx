"use client"

import { useState } from 'react';
import { useGetSuppliersQuery } from '@/utils/redux/api/suppliersApi';
import { Supplier } from '@/utils/interfaces';
import Link from 'next/link';

export default function SuppliersList() {
  const { data: suppliers } = useGetSuppliersQuery();
  const [searchTerm, setSearchTerm] = useState('');

  const filteredSuppliers = suppliers?.filter((supplier: Supplier) =>
    supplier.name.toLowerCase().includes(searchTerm.toLowerCase())
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
        placeholder="Buscar proveedor..."
        className="mb-4 text-black"
      />

      <table className="mx-auto bg-black text-white p-6 rounded-lg shadow-lg">
        <thead>
          <tr>
            <th className="text-left px-4 py-2 text-amber-400">ID Proveedor</th>
            <th className="text-left px-4 py-2 text-amber-400">Nombre</th>
            <th className="text-left px-4 py-2 text-amber-400">Zona Horaria</th>
            <th className="text-left px-4 py-2 text-amber-400">País</th>
            <th className="text-left px-4 py-2 text-amber-400">Lista de Máquinas</th>
            <th className="text-left px-4 py-2 text-amber-400">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {filteredSuppliers &&
            filteredSuppliers.map((supplier: Supplier) => (
              <tr key={supplier.supplierId} className="mb-4">
                <td className="px-4 py-2">{supplier.supplierId}</td>
                <td className="px-4 py-2">{supplier.name}</td>
                <td className="px-4 py-2">{supplier.timezone}</td>
                <td className="px-4 py-2">{supplier.country}</td>
                <td className="px-4 py-2">{supplier.machinesList && supplier.machinesList.join(', ')}</td>
                <td  className="text-amber-400">
                  <Link href={`/suppliers/${supplier.supplierId}`}>
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