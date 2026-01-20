import { motion, type Variants } from "framer-motion";
import { Zap, Shield, Rocket, Sparkles } from "lucide-react";
import "./App.css";

function App() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <div className="app-container">
      <div className="background-glow" />

      <nav className="navbar">
        <div className="logo">Vortex UI</div>
        <ul className="nav-links">
          <li>
            <a href="#" className="nav-link">
              Inicio
            </a>
          </li>
          <li>
            <a href="#" className="nav-link">
              Características
            </a>
          </li>
          <li>
            <a href="#" className="nav-link">
              Precios
            </a>
          </li>
        </ul>
      </nav>

      <main>
        <motion.section
          className="hero"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="hero-badge">
            <span className="badge-text">
              <Sparkles size={14} /> Nueva Generación
            </span>
          </motion.div>

          <motion.h1 variants={itemVariants} className="hero-title">
            Diseña el futuro <br /> más rápido.
          </motion.h1>

          <motion.p variants={itemVariants} className="hero-subtitle">
            Crea aplicaciones web asombrosas con una estética premium y un
            rendimiento inigualable. El kit de herramientas definitivo para
            desarrolladores modernos.
          </motion.p>

          <motion.div variants={itemVariants}>
            <button className="cta-button">Empezar Ahora</button>
          </motion.div>
        </motion.section>

        <section className="features">
          <motion.div
            className="feature-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="icon-wrapper">
              <Zap size={24} />
            </div>
            <h3>Rendimiento Ultra</h3>
            <p>
              Optimizado para cargar en milisegundos. La velocidad ya no es un
              problema.
            </p>
          </motion.div>

          <motion.div
            className="feature-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            transition={{ delay: 0.1 }}
          >
            <div
              className="icon-wrapper"
              style={{
                color: "var(--secondary)",
                backgroundColor: "rgba(253, 29, 29, 0.1)",
              }}
            >
              <Shield size={24} />
            </div>
            <h3>Seguridad Total</h3>
            <p>
              Integridad de nivel empresarial integrada en cada línea de código.
            </p>
          </motion.div>

          <motion.div
            className="feature-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            transition={{ delay: 0.2 }}
          >
            <div
              className="icon-wrapper"
              style={{
                color: "var(--accent)",
                backgroundColor: "rgba(252, 176, 69, 0.1)",
              }}
            >
              <Rocket size={24} />
            </div>
            <h3>Escalabilidad</h3>
            <p>
              Desde prototipos hasta millones de usuarios, crecemos contigo sin
              esfuerzo.
            </p>
          </motion.div>
        </section>
      </main>

      <style>{`
        .hero-badge {
          background: rgba(131, 58, 180, 0.1);
          border: 1px solid rgba(131, 58, 180, 0.2);
          padding: 0.5rem 1rem;
          border-radius: 100px;
          margin-bottom: 2rem;
          color: var(--primary);
          font-weight: 600;
          font-size: 0.9rem;
          display: inline-flex;
          align-items: center;
        }
        .badge-text {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
      `}</style>
    </div>
  );
}

export default App;
