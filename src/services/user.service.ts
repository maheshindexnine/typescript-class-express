// src/services/user.service.ts
import { UserModel, IUser } from "../models/user.model";
import { BaseService } from "./base.service";

export class UserService extends BaseService<IUser> {
  constructor() {
    super(UserModel);
  }

  async getUserByEmail(email: string) {
    return await this.model.findOne({ email });
  }

  // You can add user-specific methods here, e.g., findByEmail, etc.
}
