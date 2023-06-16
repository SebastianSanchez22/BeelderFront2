interface ClientesPageProps {
    params: {
      id: string;
    };
  }

export default function ClientesPage({ params }: ClientesPageProps) {
    const { id } = params;
    return (
      <h1 className="text-center text-xl text-amber-400 underline">Esta es la información de un cliente en particular con ID: { id }</h1>
    )
  }