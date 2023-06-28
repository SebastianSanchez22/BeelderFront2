"use client"

import { useCreateMachineMutation } from '@/utils/redux/api/machinesApi';
import { useState } from 'react';
import { Machine } from  '@/utils/interfaces'

const emptyMachineData: Machine = {
  machineId: '',
  name: '',
  category: '',
  totalQuantity: 0,
  supplierId: '',
};

export default function MachinesForm() {
  const [createMachine] = useCreateMachineMutation(); // useCreateMachineMutation hook from RTK Query

  // Local state to manage the form input values
  const [machineData, setMachineData] = useState(emptyMachineData);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Handle form input changes
    setMachineData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Build the formData object with the form values.
    const formData: Machine = {
      machineId: machineData.machineId,
      name: machineData.name,
      category: machineData.category,
      totalQuantity: Number(machineData.totalQuantity),
      supplierId: machineData.supplierId
    };

    // Call the createMachine mutation function with the formData object
    createMachine(formData)
    .unwrap() 
    .then((result) => {
      console.log('Machine created successfully:', result);
    })
    .catch((error) => {
      console.error('Error creating machine:', error);
    });
  };

  return (
    <div className="flex flex-col items-center justify-start min-h-screen pt-16">
      <form onSubmit={handleSubmit} className="w-80 mx-10 bg-black text-white p-6 rounded-lg shadow-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <label htmlFor="machineId" className="text-sm font-medium">
            ID Máquina
            </label>
            <input
              type="text"
              id="machineId"
              name="machineId"
              value={machineData.machineId}
              onChange={handleChange}
              className="w-full mt-1 p-1 focus:ring-amber-500 focus:border-amber-500 block shadow-sm sm:text-sm border-gray-300 rounded-md bg-amber-300 text-black"
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
            value={machineData.name}
            onChange={handleChange}
            className="w-full mt-1 p-1 focus:ring-amber-500 focus:border-amber-500 block shadow-sm sm:text-sm border-gray-300 rounded-md bg-amber-300 text-black"
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
            value={machineData.category}
            onChange={handleChange}
            className="w-full mt-1 p-1 focus:ring-amber-500 focus:border-amber-500 block shadow-sm sm:text-sm border-gray-300 rounded-md bg-amber-300 text-black"
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
            value={machineData.totalQuantity}
            onChange={handleChange}
            className="w-full mt-1 p-1 focus:ring-amber-500 focus:border-amber-500 block shadow-sm sm:text-sm border-gray-300 rounded-md bg-amber-300 text-black"
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
            value={machineData.supplierId}
            onChange={handleChange}
            className="w-full mt-1 p-1 focus:ring-amber-500 focus:border-amber-500 block shadow-sm sm:text-sm border-gray-300 rounded-md bg-amber-300 text-black"
            />
          </div>
        </div>
        <div className="flex justify-center mt-8">
        <button
            type="submit"
            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-amber-500 hover:bg-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-500"
        >
            Crear Máquina
        </button>
        </div>
  </form>
</div>
  );
};