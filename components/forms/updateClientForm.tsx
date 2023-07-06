"use client"

import { useEffect, useState } from 'react';
import { useUpdateClientMutation, useGetClientByIdQuery } from '@/utils/redux/api/clientsApi';
import { Client } from '@/utils/interfaces';

interface UpdateClientFormProps {
  clientId: string;
}

const UpdateClientForm = ({ clientId }: UpdateClientFormProps) => {
  const [updateClient] = useUpdateClientMutation();
  const { data: clientData } = useGetClientByIdQuery(clientId);

  const [formData, setFormData] = useState<Client>({
    clientId: clientData?.clientId || '',
    name: clientData?.name || '',
    address: clientData?.address || '',
    phone: clientData?.phone || 0,
  });

  useEffect(() => {
    if (clientData) {
      setFormData(clientData);
    }
  }, [clientData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    updateClient({clientId: clientId, payload: formData})
      .unwrap()
      .then((result) => {
        console.log('Client updated successfully:', result);
      })
      .catch((error) => {
        console.error('Error updating client:', error);
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
              value={formData.clientId}
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
            <label htmlFor="address" className="text-sm font-medium">
              Dirección
            </label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
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
              value={formData.phone}
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
            Actualizar Cliente
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateClientForm;