import HeaderMenu from "./components/HeaderMenu";
import Inicio from "./pages/Inicio";

const App = () => {
  return (
    <div style={{ minHeight: "100vh", width: "100%", margin: 0, padding: 0 }}>
      <HeaderMenu />
      <Inicio />
    </div>
  );
};

export default App;
