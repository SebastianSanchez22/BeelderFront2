"use client"

import { useDispatch, useSelector } from 'react-redux';
import { createMachine, initialState } from '../utils/machinesSlice';
import { setField, Machine} from '../utils/machinesSlice';
import { AppDispatch, RootState } from '@/utils/store';

export default function MachinesForm() {
  const dispatch = useDispatch<AppDispatch>();
  const machineData = useSelector((state: RootState) => state.machines[0] || initialState);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    // Update form state
    if (name in machineData) {
      dispatch(setField({ field: name as keyof Machine, value }));
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Send POST request to API
    dispatch(createMachine(machineData));

    // Reset form
    dispatch(setField({ field: 'machineId', value: '' }));
    dispatch(setField({ field: 'name', value: '' }));
    dispatch(setField({ field: 'category', value: '' }));
    dispatch(setField({ field: 'totalQuantity', value: 0 }));
    dispatch(setField({ field: 'supplierId', value: '' }));
  };

  return (
    <div className="flex justify-center items-center h-screen">
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
              className="w-full mt-1 focus:ring-amber-500 focus:border-amber-500 block shadow-sm sm:text-sm border-gray-300 rounded-md bg-amber-300 text-white"
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
            className="w-full mt-1 focus:ring-amber-500 focus:border-amber-500 block shadow-sm sm:text-sm border-gray-300 rounded-md bg-amber-300 text-white"
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
            className="w-full mt-1 focus:ring-amber-500 focus:border-amber-500 block shadow-sm sm:text-sm border-gray-300 rounded-md bg-amber-300 text-white"
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
            className="w-full mt-1 focus:ring-amber-500 focus:border-amber-500 block shadow-sm sm:text-sm border-gray-300 rounded-md bg-amber-300 text-white"
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
            className="w-full mt-1 focus:ring-amber-500 focus:border-amber-500 block shadow-sm sm:text-sm border-gray-300 rounded-md bg-amber-300 text-white"
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