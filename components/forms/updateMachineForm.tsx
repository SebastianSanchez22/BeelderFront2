"use client"

import { useEffect, useState } from 'react';
import { useUpdateMachineMutation, useGetMachineByIdQuery } from '@/utils/redux/api/machinesApi';
import { Machine } from '@/utils/interfaces';

interface UpdateMachineFormProps {
  machineId: string;
}

const UpdateMachineForm = ({ machineId }: UpdateMachineFormProps) => {
  const [updateMachine] = useUpdateMachineMutation();
  const { data: machineData } = useGetMachineByIdQuery(machineId);

  const [formData, setFormData] = useState<Machine>({
    machineId: machineData?.machineId || '',
    name: machineData?.name || '',
    category: machineData?.category || '',
    totalQuantity: machineData?.totalQuantity || 0,
    supplierId: machineData?.supplierId || '',
  });

  useEffect(() => {
    if (machineData) {
      setFormData(machineData);
    }
  }, [machineData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    updateMachine({machineId: machineId, payload: formData})
      .unwrap()
      .then((result) => {
        console.log('Machine updated successfully:', result);
      })
      .catch((error) => {
        console.error('Error updating machine:', error);
      });
  };

  return (
    <div className="flex flex-col items-center justify-start min-h-screen pt-16">
      <form onSubmit={handleSubmit} className="w-80 mx-10 bg-black text-white p-6 rounded-lg shadow-lg">
        <div className="grid grid-cols-1 gap-8">
          <div>
            <label htmlFor="machineId" className="text-sm font-medium">
              ID Proveedor
            </label>
            <input
              type="text"
              id="machineId"
              name="machineId"
              value={formData.machineId}
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
              value={formData.name}
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
              value={formData.category}
              onChange={handleChange}
              className="w-full mt-1 p-1 focus:ring-amber-500 focus:border-amber-500 block shadow-sm sm:text-sm border-gray-300 rounded-md bg-amber-300 text-black"
            />
          </div>
          <div>
            <label htmlFor="totalQuantity" className="text-sm font-medium">
              País
            </label>
            <input
              type="number"
              id="totalQuantity"
              name="totalQuantity"
              value={formData.totalQuantity}
              onChange={handleChange}
              className="w-full mt-1 p-1 focus:ring-amber-500 focus:border-amber-500 block shadow-sm sm:text-sm border-gray-300 rounded-md bg-amber-300 text-black"
            />
          </div>
          <div>
            <label htmlFor="supplierId" className="text-sm font-medium">
              País
            </label>
            <input
              type="text"
              id="supplierId"
              name="supplierId"
              value={formData.supplierId}
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
            Actualizar Proveedor
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateMachineForm;