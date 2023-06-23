import { Provider } from 'react-redux';
import store from '@/utils/store';
import MachinesForm from "@/components/MachinesForm";

export default function CreateMachinePage() {
  return (
    <Provider store={store}>
      <div>
        <h1>Crear máquina</h1>
        <MachinesForm />
      </div>
    </Provider>
  );
};