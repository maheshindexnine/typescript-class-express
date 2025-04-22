// src/controllers/user.controller.ts
import { UserService } from "../services/user.service";
import { BaseController } from "./base.controller";

export class UserController extends BaseController<any> {
  constructor() {
    super(new UserService());
  }

  // You can add user-specific endpoints if needed
}
