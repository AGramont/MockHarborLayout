import { createBrowserRouter, RouterProvider } from "react-router-dom";
import A from "./components/a/a";
import B from "./components/b/b";
import "./App.css";

const router = createBrowserRouter([
  { path: "/", element: <A /> },
  { path: "/a", element: <A /> },
  { path: "/b", element: <B /> },
]);
function App() {
  return (
    <div className="host">
      <div className="map-container">
        <img src="/images/old-map.jpg" alt="old map" className="old-map" />
      </div>
      <div className="route-container">
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
