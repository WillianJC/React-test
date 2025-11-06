import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Saludo from "./components/saludo";
import Contador from "./components/contador";
import Formulario from "./components/formulario";
import Tareas from "./components/tareas";
function App() {
  return (
    <BrowserRouter>
      <nav style={{ margin: "1rem" }}>
        <Link to="/">Inicio</Link> |
        <Link to="/contador">Contador</Link> |
        <Link to="/formulario">Formulario</Link> |
        <Link to="/tareas">Tareas</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Saludo nombre="Estudiante" />} />
        <Route path="/contador" element={<Contador />} />
        <Route path="/formulario" element={<Formulario />} />
        <Route path="/tareas" element={<Tareas />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
