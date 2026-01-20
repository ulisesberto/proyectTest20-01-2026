import React, { useEffect, useState } from "react";
import { fetchHello } from "../services/api";

const HelloComponent: React.FC = () => {
  const [message, setMessage] = useState<string>("Cargando...");
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getHello = async () => {
      try {
        const data = await fetchHello();
        setMessage(data.message);
      } catch (err) {
        setError("Error al conectar con el servidor");
        setMessage("");
      }
    };

    getHello();
  }, []);

  return (
    <div
      style={{
        padding: "20px",
        borderRadius: "12px",
        background: "rgba(255, 255, 255, 0.1)",
        backdropFilter: "blur(10px)",
        border: "1px solid rgba(255, 255, 255, 0.2)",
        marginTop: "20px",
        textAlign: "center",
      }}
    >
      <h2 style={{ color: "#646cff" }}>Status del Backend</h2>
      {error ? (
        <p style={{ color: "#ff4646" }}>{error}</p>
      ) : (
        <p style={{ fontSize: "1.2rem", fontWeight: "500" }}>{message}</p>
      )}
    </div>
  );
};

export default HelloComponent;
