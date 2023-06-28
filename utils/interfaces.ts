export interface Machine {
    machineId: string;
    name: string;
    category: string;
    totalQuantity: number;
    supplierId: string;
  }

export interface Supplier {
    supplierId: string;
    name: string;
}