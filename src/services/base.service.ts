// src/services/base.service.ts
import { Model, Document } from "mongoose";

export class BaseService<T extends Document> {
  constructor(protected model: Model<T>) {}

  async create(data: Partial<T>) {
    return await this.model.create(data);
  }

  async findAll() {
    return await this.model.find();
  }

  async findById(id: string) {
    return await this.model.findById(id);
  }

  async update(id: string, data: Partial<T>) {
    return await this.model.findByIdAndUpdate(id, data, { new: true });
  }

  async delete(id: string) {
    return await this.model.findByIdAndDelete(id);
  }
}
