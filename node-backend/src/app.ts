import express, {
  type Request,
  type Response,
  type NextFunction,
} from "express";
import cors from "cors";
import routes from "./routes/index.js";

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use("/api", routes);

// Generic error handler
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).json({
    status: "error",
    message: "Something went wrong!",
  });
});

export default app;
