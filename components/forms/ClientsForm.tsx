"use client"

import { useCreateClientMutation } from '@/utils/redux/api/clientsApi';
import { useState } from 'react';
import { Client } from '@/utils/interfaces';

const emptyClientData: Client = {
  clientId: '',
  name: '',
  address: '',
  phone: 0,
};

export default function ClientsForm() {
  const [createClient] = useCreateClientMutation(); // useCreateClientMutation hook from RTK Query

  // Local state to manage the form input values
  const [clientData, setClientData] = useState(emptyClientData);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Handle form input changes
    setClientData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Build the formData object with the form values
    const formData = {
      clientId: clientData.clientId,
      name: clientData.name,
      address: clientData.address,
      phone: clientData.phone,
    };

    // Call the createClient mutation function with the formData object
    createClient(formData)
      .unwrap()
      .then((result) => {
        console.log('Client created successfully:', result);
      })
      .catch((error) => {
        console.error('Error creating client:', error);
      });
  };

  return (
    <div className="flex flex-col items-center justify-start min-h-screen pt-16">
      <form onSubmit={handleSubmit} className="w-80 mx-10 bg-black text-white p-6 rounded-lg shadow-lg">
        <div className="grid grid-cols-1 gap-8">
          <div>
            <label htmlFor="clientId" className="text-sm font-medium">
              ID Cliente
            </label>
            <input
              type="text"
              id="clientId"
              name="clientId"
              value={clientData.clientId}
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
              value={clientData.name}
              onChange={handleChange}
              className="w-full mt-1 p-1 focus:ring-amber-500 focus:border-amber-500 block shadow-sm sm:text-sm border-gray-300 rounded-md bg-amber-300 text-black"
            />
          </div>
          <div>
            <label htmlFor="address" className="text-sm font-medium">
              Dirección
            </label>
            <input
              type="text"
              id="address"
              name="address"
              value={clientData.address}
              onChange={handleChange}
              className="w-full mt-1 p-1 focus:ring-amber-500 focus:border-amber-500 block shadow-sm sm:text-sm border-gray-300 rounded-md bg-amber-300 text-black"
            />
          </div>
          <div>
            <label htmlFor="phone" className="text-sm font-medium">
              Teléfono
            </label>
            <input
              type="number"
              id="phone"
              name="phone"
              value={clientData.phone}
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
            Crear Cliente
          </button>
        </div>
      </form>
    </div>
  );
}