import { ProductResponse } from "./product";

export interface SalesOrderDetailsResponse {
  product: ProductResponse;
  productName: string;
  quantity: number;
  price: number;
  amount: number;
}

export interface SalesOrderResponse {
  id: string;
  amount: number;
  invoiceStatus: string;
  orderDate: string;
  invoiceDetails: SalesOrderDetailsResponse[];
  createdTime: string;
  updatedTime: string;
  createdBy: string;
  updatedBy: string;
}
