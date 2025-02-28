export interface ProductResponse {
  id: number;
  category_id: number;
  name: string;
  description: string;
  sku_code: string;
  sell_price: number;
  buy_price: number;
  status: "ACTIVE" | "INACTIVE";
  show_web: boolean;
  created_by: string;
  updated_by: string;
  created_time: string;
  updated_time: string;
}
