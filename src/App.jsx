import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HeaderMenu from "./components/HeaderMenu";
import Inicio from "./pages/Inicio";
import Biografia from "./pages/Biografia";
import Cultura from "./pages/Cultura";
import Contacto from "./pages/Contacto";
import Documentos from "./pages/Documentos";
import Finanzas from "./pages/Finanzas";
import Noticias from "./pages/Noticias";

function App() {
  return (
    <Router>
      <div className="App">
        <HeaderMenu />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/biografia" element={<Biografia />} />
          <Route path="/cultura" element={<Cultura />} />
          <Route path="/documentos" element={<Documentos />} />
          <Route path="/finanzas" element={<Finanzas />} />
          <Route path="/noticias" element={<Noticias />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
