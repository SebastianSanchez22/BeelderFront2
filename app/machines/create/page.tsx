import MachinesForm from "@/components/forms/MachinesForm";

export default function CreateMachinePage() {
  return (
    <div className="flex flex-col items-center justify-start min-h-screen pt-16">
      <h1 className="text-black text-center text-3xl font-bold mb-8">Crea una nueva máquina</h1>
      <MachinesForm />
    </div>
  );
}