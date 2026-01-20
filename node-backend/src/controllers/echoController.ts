import type { Request, Response } from "express";

export const postEcho = (req: Request, res: Response) => {
  res.status(200).json({ recibido: req.body });
};
