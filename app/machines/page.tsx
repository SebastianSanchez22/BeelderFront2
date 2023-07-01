import MachinesList from "@/components/lists/MachinesList"

export default function MachinesPage() {
    return (
    <div className="flex flex-col items-center justify-start min-h-screen pt-16">
      <h1 className="text-black text-center text-3xl font-bold mb-8">Lista de máquinas</h1>
      <MachinesList/>
    </div>
    )
  }