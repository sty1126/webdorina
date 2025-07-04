import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HeaderMenu from "./components/HeaderMenu";
import Inicio from "./pages/Inicio";
import Biografia from "./pages/Biografia";
import Cultura from "./pages/Cultura";
import Contacto from "./pages/Contacto";

function App() {
  return (
    <Router>
      <div className="App">
        <HeaderMenu />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/biografia" element={<Biografia />} />
          <Route path="/cultura" element={<Cultura />} />
          <Route
            path="/documentos"
            element={<div>Página de Documentos (próximamente)</div>}
          />
          <Route
            path="/finanzas"
            element={<div>Página de Finanzas (próximamente)</div>}
          />
          <Route
            path="/noticias"
            element={<div>Página de Noticias (próximamente)</div>}
          />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
