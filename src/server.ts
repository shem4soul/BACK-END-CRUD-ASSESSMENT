import express, { Application, Request, Response } from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db";
import userRoutes from "./routes/userRoutes";
import itemRoutes from "./routes/itemRoutes";
import { notFound, errorHandler } from "./middlewares/errorMiddleware";

// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB();

const app: Application = express();

// Middleware to parse JSON
app.use(express.json());

// Root route
app.get("/", (_req: Request, res: Response) => {
  res.send("API is running 🚀");
});

// Routes
app.use("/api/users", userRoutes);
app.use("/api/items", itemRoutes);

// Error Handling Middleware
app.use(notFound);
app.use(errorHandler);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
