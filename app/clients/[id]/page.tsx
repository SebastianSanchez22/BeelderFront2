import UpdateClientForm from "@/components/forms/updateClientForm"

export default function ClientsPage({ params }: { params: { id: string } }) {
  return (
    <div className="flex flex-col items-center justify-start min-h-screen pt-16">
      <h1 className="text-black text-center text-3xl font-bold mb-8">Edita este cliente</h1>
      <UpdateClientForm clientId={params.id}/>
    </div>
  )
}