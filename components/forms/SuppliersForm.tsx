"use client"

import { useCreateSupplierMutation } from '@/utils/redux/api/suppliersApi';
import { useState } from 'react';
import { Supplier } from '@/utils/interfaces';
import { timezones } from '@/utils/timezones';

const emptySupplierData: Supplier = {
  supplierId: '',
  name: '',
  timezone: '',
  country: '',
};

export default function SuppliersForm() {
  // useCreateSupplierMutation hook from RTK Query
  const [createSupplier] = useCreateSupplierMutation(); 

  // Local state to manage the form input values
  const [supplierData, setSupplierData] = useState(emptySupplierData);

  // Local state to manage the show/hide of the timezones list
  const [showAllTimezones, setShowAllTimezones] = useState(false);

  // Sort the timezones by display value and then by name
  const sortedTimezones = timezones.slice().sort((a, b) => {
    if (a.display !== b.display) {
      return a.display - b.display;
    } else {
      return a.timezones.localeCompare(b.timezones);
    }
  });

  // Filtering the timezones list depending on the button (show all or show only relevant timezones)
  const displayedTimezones = showAllTimezones ? sortedTimezones : sortedTimezones.filter((t) => t.display !== 100);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    
    // Handle form input changes
    if (value === "showMore") {
      setShowAllTimezones(true);
    } else {
      setSupplierData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
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
            <select
              id="timezone"
              name="timezone"
              value={supplierData.timezone}
              onChange={handleChange}
              className="w-full mt-1 p-1 focus:ring-amber-500 focus:border-amber-500 block shadow-sm sm:text-sm border-gray-300 rounded-md bg-amber-300 text-black"
            >
              {displayedTimezones.map((tz) => (
                <option key={tz.timezones} value={tz.timezones}>
                  {tz.timezones}
                </option>
              ))}
              {!showAllTimezones && (
                 <option value="showMore" className="font-bold">
                 Mostrar más
               </option>
              )}
            </select>
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