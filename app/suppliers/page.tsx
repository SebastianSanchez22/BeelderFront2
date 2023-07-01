import SuppliersList from "@/components/lists/SuppliersList";

export default function SuppliersPage() {
    return (
    <div className="flex flex-col items-center justify-start min-h-screen pt-16">
      <h1 className="text-black text-center text-3xl font-bold mb-8">Lista de proveedores</h1>
      <SuppliersList/>
    </div>
    )
  }