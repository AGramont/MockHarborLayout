import { Route, Routes, Link } from "react-router-dom";
import A from "./components/a/a";
import B from "./components/b/b";
import "./App.css";
import Header from "./components/header/header";

function App() {
  return (
    <div className="host">
      <div className="map-container">
        <img src="/images/old-map.jpg" alt="old map" className="old-map" />
      </div>
      <div className="app-container">
        <Header />
        <div className="page-container">
          <Routes>
            <Route path="/" element={<A />} />
            <Route path="/a" element={<A />} />
            <Route path="/b" element={<B />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
