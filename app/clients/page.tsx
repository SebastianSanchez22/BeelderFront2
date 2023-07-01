import ClientsList from "@/components/lists/ClientsList"

export default function ClientsPage() {
  return (
    <div className="flex flex-col items-center justify-start min-h-screen pt-16">
      <h1 className="text-black text-center text-3xl font-bold mb-8">Lista de clientes</h1>
      <ClientsList/>
    </div>
  )
}