"use client"

import { useCreateSupplierMutation } from '@/utils/redux/api/suppliersApi';
import { useState } from 'react';

export default function SuppliersForm() {
  const [createSupplier] = useCreateSupplierMutation(); // useCreateSupplierMutation hook from RTK Query

  // Local state to manage the form input values
  const [supplierData, setSupplierData] = useState({
    supplierId: '',
    name: '',
    timezone: '',
    country: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Handle form input changes
    setSupplierData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Build the formData object with the form values
    const formData = {
      supplierId: supplierData.supplierId,
      name: supplierData.name,
      timezone: supplierData.timezone,
      country: supplierData.country,
    };

    // Call the createSupplier mutation function with the formData object
    createSupplier(formData)
      .unwrap()
      .then((result) => {
        console.log('Supplier created successfully:', result);
      })
      .catch((error) => {
        console.error('Error creating supplier:', error);
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
              value={supplierData.supplierId}
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
              value={supplierData.name}
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
              value={supplierData.timezone}
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
              value={supplierData.country}
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
            Crear Proveedor
          </button>
        </div>
      </form>
    </div>
  );
}