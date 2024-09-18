import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type OrderUpdateInput = {
  product?: ProductWhereUniqueInput | null;
  total?: number | null;
  user?: UserWhereUniqueInput | null;
};
