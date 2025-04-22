// src/controllers/user.controller.ts
import { ProductService } from "../services/product.service";
import { BaseController } from "./base.controller";

export class ProductController extends BaseController<any> {
  constructor() {
    super(new ProductService());
  }

  // You can add user-specific endpoints if needed
}
