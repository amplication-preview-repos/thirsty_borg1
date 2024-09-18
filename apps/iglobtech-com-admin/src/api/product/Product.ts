import { Order } from "../order/Order";
import { Review } from "../review/Review";

export type Product = {
  createdAt: Date;
  description: string | null;
  id: string;
  name: string | null;
  orders?: Array<Order>;
  price: number | null;
  reviews?: Array<Review>;
  stock: number | null;
  updatedAt: Date;
};
