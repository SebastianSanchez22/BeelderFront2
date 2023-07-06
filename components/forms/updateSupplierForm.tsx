"use client"

import { useEffect, useState } from 'react';
import { useUpdateSupplierMutation, useGetSupplierByIdQuery } from '@/utils/redux/api/suppliersApi';
import { Supplier } from '@/utils/interfaces';

interface UpdateSupplierFormProps {
  supplierId: string;
}

const UpdateSupplierForm = ({ supplierId }: UpdateSupplierFormProps) => {
  const [updateSupplier] = useUpdateSupplierMutation();
  const { data: supplierData } = useGetSupplierByIdQuery(supplierId);

  const [formData, setFormData] = useState<Supplier>({
    supplierId: supplierData?.supplierId || '',
    name: supplierData?.name || '',
    timezone: supplierData?.timezone || '',
    country: supplierData?.country || '',
    machinesList: supplierData?.machinesList || [],
  });

  useEffect(() => {
    if (supplierData) {
      setFormData(supplierData);
    }
  }, [supplierData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    updateSupplier({supplierId: supplierId, payload: formData})
      .unwrap()
      .then((result) => {
        console.log('Supplier updated successfully:', result);
      })
      .catch((error) => {
        console.error('Error updating supplier:', error);
      });
  };

  return (
    <div className="flex flex-col items-center justify-start min-h-screen pt-16">
      <form onSubmit={handleSubmit} className="w-80 mx-10 bg-black text-white p-6 rounded-lg shadow-lg">
        <div className="grid grid-cols-1 gap-8">
          <div>
            <label htmlFor="supplierId" className="text-sm font-medium">
              ID Proveedor
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
            <label htmlFor="timezone" className="text-sm font-medium">
              Zona Horaria
            </label>
            <input
              type="text"
              id="timezone"
              name="timezone"
              value={formData.timezone}
              onChange={handleChange}
              className="w-full mt-1 p-1 focus:ring-amber-500 focus:border-amber-500 block shadow-sm sm:text-sm border-gray-300 rounded-md bg-amber-300 text-black"
            />
          </div>
          <div>
            <label htmlFor="country" className="text-sm font-medium">
              País
            </label>
            <input
              type="text"
              id="country"
              name="country"
              value={formData.country}
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

export default UpdateSupplierForm;