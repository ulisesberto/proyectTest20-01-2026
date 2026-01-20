import type { Request, Response } from "express";

export const getHello = (req: Request, res: Response) => {
  res.status(200).json({ message: "Hola mundo desde Node.js con TypeScript!" });
};
