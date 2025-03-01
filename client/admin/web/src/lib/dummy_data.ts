import { CategoryProductResponse } from "@/laduny/types/category";
import { ProductResponse } from "@/laduny/types/product";

export const categoriesData: CategoryProductResponse[] = [
  {
    id: 1,
    name: "Electronics",
    type: "Gadgets",
    description: "Devices and gadgets",
    created_by: "admin",
    updated_by: "admin",
    created_time: "2025-02-28T10:00:00Z",
    updated_time: "2025-02-28T10:00:00Z",
  },
  {
    id: 2,
    name: "Furniture",
    type: "Home",
    description: "Home and office furniture",
    created_by: "admin",
    updated_by: "admin",
    created_time: "2025-02-28T11:00:00Z",
    updated_time: "2025-02-28T11:00:00Z",
  },
];

export const productsData: ProductResponse[] = [
  {
    id: 101,
    category_id: 1,
    name: "Smartphone X",
    description: "Latest smartphone with advanced features",
    sku_code: "SMX-001",
    sell_price: 699,
    buy_price: 500,
    status: "ACTIVE",
    show_web: true,
    created_by: "admin",
    updated_by: "admin",
    created_time: "2025-02-28T12:00:00Z",
    updated_time: "2025-02-28T12:00:00Z",
  },
  {
    id: 102,
    category_id: 2,
    name: "Office Chair",
    description: "Ergonomic office chair for comfort",
    sku_code: "OFC-CH-002",
    sell_price: 149,
    buy_price: 100,
    status: "INACTIVE",
    show_web: false,
    created_by: "admin",
    updated_by: "admin",
    created_time: "2025-02-28T12:30:00Z",
    updated_time: "2025-02-28T12:30:00Z",
  },
];
