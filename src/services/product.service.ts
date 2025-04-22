// src/services/user.service.ts
import { ProductModel, IProduct } from "../models/product.model";
import { BaseService } from "./base.service";

export class ProductService extends BaseService<IProduct> {
  constructor() {
    super(ProductModel);
  }

  // You can add user-specific methods here, e.g., findByEmail, etc.
}
