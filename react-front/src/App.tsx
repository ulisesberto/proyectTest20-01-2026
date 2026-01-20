import "./App.css";
import HelloComponent from "./components/HelloComponent";
import DatabaseDemo from "./components/DatabaseDemo";

function App() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        padding: "20px",
      }}
    >
      <HelloComponent />
      <DatabaseDemo />
    </div>
  );
}

export default App;
