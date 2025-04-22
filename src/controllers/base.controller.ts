// src/controllers/base.controller.ts
import { Request, Response } from "express";

export class BaseController<TService> {
  constructor(protected service: TService) {}

  async create(req: Request, res: Response) {
    const data = await (this.service as any).create(req.body);
    res.status(201).json(data);
  }

  async findAll(req: Request, res: Response) {
    const data = await (this.service as any).findAll();
    res.json(data);
  }

  async findById(req: Request, res: Response) {
    const data = await (this.service as any).findById(req.params.id);
    if (data) res.json(data);
    else res.status(404).json({ message: "Not found" });
  }

  async update(req: Request, res: Response) {
    const data = await (this.service as any).update(req.params.id, req.body);
    if (data) res.json(data);
    else res.status(404).json({ message: "Not found" });
  }

  async delete(req: Request, res: Response) {
    const data = await (this.service as any).delete(req.params.id);
    if (data) res.json({ message: "Deleted" });
    else res.status(404).json({ message: "Not found" });
  }
}
