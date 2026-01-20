import type { Request, Response } from "express";
import { db } from "../config/firebase.js";
import { ref, set, get } from "firebase/database";

// Método de escritura
export const addData = async (req: Request, res: Response) => {
  try {
    const { key, value } = req.body;
    if (!key || !value) {
      return res.status(400).json({ error: "Se requieren 'key' y 'value'" });
    }

    const dataRef = ref(db, `examples/${key}`);
    await set(dataRef, {
      content: value,
      timestamp: Date.now(),
    });

    res
      .status(201)
      .json({ message: "Datos guardados correctamente", data: { key, value } });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

// Método de lectura
export const getData = async (req: Request, res: Response) => {
  try {
    const { key } = req.params;
    const dataRef = ref(db, `examples/${key}`);
    const snapshot = await get(dataRef);
    const data = snapshot.val();

    if (!data) {
      return res
        .status(404)
        .json({ error: "No se encontraron datos para esa clave" });
    }

    res.status(200).json({ key, data });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

// Método para listar todas las claves de ejemplo
export const getAllData = async (req: Request, res: Response) => {
  try {
    const dataRef = ref(db, "examples");
    const snapshot = await get(dataRef);
    const data = snapshot.val();

    res.status(200).json({ data: data || {} });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};
