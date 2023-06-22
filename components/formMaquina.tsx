'use client'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { crearMaquina } from '../utils/sliceMaquinas';
import { Maquina } from '../utils/sliceMaquinas';

export default function FormMaquina() {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState<Maquina>({
    machineId: '',
    name: '',
    category: '',
    totalQuantity: 0,
    supplierId: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(crearMaquina(formData) as any);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto">
      <div className="mb-4">
        <label htmlFor="machineId" className="block text-sm font-medium text-gray-700">
          ID Máquina
        </label>
        <input
          type="text"
          id="machineId"
          name="machineId"
          value={formData.machineId}
          onChange={handleChange}
          className="mt-1 focus:ring-amber-500 focus:border-amber-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
          Nombre
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="mt-1 focus:ring-amber-500 focus:border-amber-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="category" className="block text-sm font-medium text-gray-700">
          Categoría
        </label>
        <input
          type="text"
          id="category"
          name="category"
          value={formData.category}
          onChange={handleChange}
          className="mt-1 focus:ring-amber-500 focus:border-amber-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="totalQuantity" className="block text-sm font-medium text-gray-700">
          Cantidad Total
        </label>
        <input
          type="number"
          id="totalQuantity"
          name="totalQuantity"
          value={formData.totalQuantity}
          onChange={handleChange}
          className="mt-1 focus:ring-amber-500 focus:border-amber-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="supplierId" className="block text-sm font-medium text-gray-700">
          ID Proveedor
        </label>
        <input
          type="text"
          id="supplierId"
          name="supplierId"
          value={formData.supplierId}
          onChange={handleChange}
          className="mt-1 focus:ring-amber-500 focus:border-amber-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
        />
      </div>
      <button
        type="submit"
        className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500"
      >
        Crear Máquina
      </button>
    </form>
  );
};