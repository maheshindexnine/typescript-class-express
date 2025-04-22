// src/controllers/user.controller.ts
import { UserService } from "../services/user.service";
import { BaseController } from "./base.controller";
import { Request, Response } from "express";

interface User {
  name: string;
  email: string;
  age: number;
}

export class UserController extends BaseController<any> {
  constructor() {
    super(new UserService());
  }

  async findByEmail(req: Request, res: Response) {
    const email = req.query?.email;

    if (!email) {
      res.status(400).json({ message: "Email Field is empty" });
      return;
    }

    const user: Partial<User> = await this.service.getUserByEmail(email);
    if (user) res.json(user);
    else res.status(404).json({ message: "User not found" });
  }
}
