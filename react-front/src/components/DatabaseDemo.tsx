import React, { useState, useEffect } from "react";

const DatabaseDemo: React.FC = () => {
  const [key, setKey] = useState("");
  const [value, setValue] = useState("");
  const [dbData, setDbData] = useState<any>({});
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const fetchAllData = async () => {
    try {
      setLoading(true);
      const response = await fetch("http://localhost:3000/api/db/all");
      const result = await response.json();
      setDbData(result.data || {});
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!key || !value) return;

    try {
      setStatus("Guardando...");
      const response = await fetch("http://localhost:3000/api/db/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ key, value }),
      });

      if (response.ok) {
        setStatus("✅ Guardado con éxito");
        setKey("");
        setValue("");
        fetchAllData();
      } else {
        const err = await response.json();
        setStatus(`❌ Error: ${err.error || "No inicializado"}`);
      }
    } catch (error) {
      setStatus("❌ Error al conectar");
    }
  };

  useEffect(() => {
    fetchAllData();
  }, []);

  return (
    <div
      style={{
        padding: "2rem",
        maxWidth: "600px",
        margin: "2rem auto",
        background: "rgba(255, 255, 255, 0.05)",
        borderRadius: "20px",
        border: "1px solid rgba(255, 255, 255, 0.1)",
        color: "white",
      }}
    >
      <h2 style={{ marginBottom: "1.5rem", color: "#8884d8" }}>
        Firebase DB Demo
      </h2>

      <form
        onSubmit={handleSave}
        style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
      >
        <input
          type="text"
          placeholder="Clave (ej: usuario_1)"
          value={key}
          onChange={(e) => setKey(e.target.value)}
          style={{
            padding: "0.8rem",
            borderRadius: "8px",
            border: "none",
            background: "#333",
            color: "white",
          }}
        />
        <input
          type="text"
          placeholder="Valor (ej: Hola Firebase)"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          style={{
            padding: "0.8rem",
            borderRadius: "8px",
            border: "none",
            background: "#333",
            color: "white",
          }}
        />
        <button
          type="submit"
          style={{
            padding: "0.8rem",
            borderRadius: "8px",
            border: "none",
            background: "#8884d8",
            color: "white",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          Guardar en DB
        </button>
      </form>

      {status && (
        <p style={{ marginTop: "1rem", fontSize: "0.9rem" }}>{status}</p>
      )}

      <div style={{ marginTop: "2rem" }}>
        <h3 style={{ fontSize: "1.2rem", marginBottom: "1rem" }}>
          Datos actuales:
        </h3>
        {loading ? (
          <p>Cargando...</p>
        ) : (
          <pre
            style={{
              background: "#1a1a1a",
              padding: "1rem",
              borderRadius: "10px",
              overflow: "auto",
              fontSize: "0.8rem",
            }}
          >
            {JSON.stringify(dbData, null, 2)}
          </pre>
        )}
        <button
          onClick={fetchAllData}
          style={{
            marginTop: "1rem",
            background: "transparent",
            border: "1px solid #ccc",
            color: "#ccc",
            padding: "0.5rem 1rem",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Refrescar
        </button>
      </div>
    </div>
  );
};

export default DatabaseDemo;
