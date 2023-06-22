import FormMaquina from "@/components/formMaquina";
import { Provider } from 'react-redux';
import store from '@/utils/store';

export default function CreateMachinePage() {
  return (
    <Provider store={store}>
      <div>
        <h1>Crear máquina</h1>
        <FormMaquina />
      </div>
    </Provider>
  );
};