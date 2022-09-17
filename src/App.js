import "./App.css";

import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Link to="/">Home</Link>
      <Link to="/ruta1">Ruta 1</Link>
      <Link to="/ruta2">Ruta 2</Link>
      <Routes>
        <Route path="/" element={<h1>Version 2</h1>} />
        <Route path="ruta1" element={<h1>Ruta 1</h1>} />
        <Route path="ruta2" element={<h1>Ruta 2</h1>} />
      </Routes>
    </div>
  );
}

export default App;
