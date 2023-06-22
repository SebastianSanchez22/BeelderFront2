'use client'
import { useState } from 'react';
import { Maquina } from "@/utils/sliceMaquinas";
export default function MaquinariaPage() {

    const [formData, setFormData] = useState<Maquina>({
        machineId: '',
        name: '',
        category: '',
        totalQuantity: 0,
        supplierId: '',
      });

    return (
        <div className="flex justify-center items-center h-screen">
      <form className="max-w-md mx-auto bg-black text-white p-8 rounded-lg shadow-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="machineId" className="text-sm font-medium">
              ID Máquina
            </label>
            <input
              type="text"
              id="machineId"
              name="machineId"
              value={formData.machineId}
              className="mt-1 focus:ring-amber-500 focus:border-amber-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md bg-amber-300 text-white"
            />
          </div>
          <div>
            <label htmlFor="name" className="text-sm font-medium">
              Nombre
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              className="mt-1 focus:ring-amber-500 focus:border-amber-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md bg-amber-300 text-white"
            />
          </div>
          <div>
            <label htmlFor="category" className="text-sm font-medium">
              Categoría
            </label>
            <input
              type="text"
              id="category"
              name="category"
              value={formData.category}
              className="mt-1 focus:ring-amber-500 focus:border-amber-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md bg-amber-300 text-white"
            />
          </div>
          <div>
            <label htmlFor="totalQuantity" className="text-sm font-medium">
              Cantidad Total
            </label>
            <input
              type="number"
              id="totalQuantity"
              name="totalQuantity"
              value={formData.totalQuantity}
              className="mt-1 focus:ring-amber-500 focus:border-amber-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md bg-amber-300 text-white"
            />
          </div>
          <div>
            <label htmlFor="supplierId" className="text-sm font-medium">
              ID Proveedor
            </label>
            <input
              type="text"
              id="supplierId"
              name="supplierId"
              value={formData.supplierId}
              className="mt-1 focus:ring-amber-500 focus:border-amber-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md bg-amber-300 text-white"
            />
          </div>
        </div>
        <div className="flex justify-center mt-6">
          <button
            type="submit"
            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-amber-500 hover:bg-amber-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500"
          >
            Crear Máquina
          </button>
        </div>
      </form>
    </div>
    )
  }