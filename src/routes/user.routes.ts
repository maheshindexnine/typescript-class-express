// src/routes/user.routes.ts
import { Router } from "express";
import { UserController } from "../controllers/user.controller";

const router = Router();
const controller = new UserController();

router.post("/", (req, res) => controller.create(req, res));
router.get("/", (req, res) => controller.findAll(req, res));
router.get("/email", (req, res) => controller.findByEmail(req, res));
router.get("/:id", (req, res) => controller.findById(req, res));
router.put("/:id", (req, res) => controller.update(req, res));
router.delete("/:id", (req, res) => controller.delete(req, res));

export default router;
