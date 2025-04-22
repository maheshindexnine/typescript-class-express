import express from "express";
import userRoutes from "./routes/user.routes";
import productRoutes from "./routes/product.route";

const app = express();
app.use(express.json());

app.use("/api/users", userRoutes);
app.use("/api/products", productRoutes);

export default app;

