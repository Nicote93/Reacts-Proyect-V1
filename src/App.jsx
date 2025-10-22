import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Carrito from "./components/carrito";
import Header from "./components/Header";
import Inicio from "./pages/Inicio";
import Populares from "./pages/populares";
import ProductoDetalle from "./pages/ProductoDetalle";
import Footer from "./components/Footer";
import Tecnologia from "./pages/importados";

function App() {
  // 🛒 Estado del carrito
  const [carrito, setCarrito] = useState([]);

  // Agregar producto al carrito
  const agregarAlCarrito = (producto) => {
    setCarrito([...carrito, producto]);
  };

  // Eliminar producto del carrito
  const eliminarDelCarrito = (indice) => {
    setCarrito(carrito.filter((_, i) => i !== indice));
  };

  // Calcular total del carrito
  const totalCarrito = carrito.reduce((total, item) => total + item.price, 0);

  return (
    <>
      <Header totalCarrito={totalCarrito} cantidad={carrito.length} />

      <Routes>
        <Route
          path="/"
          element={<Inicio agregarAlCarrito={agregarAlCarrito} />}
        />
        <Route
          path="/populares"
          element={<Populares agregarAlCarrito={agregarAlCarrito} />}
        />
        <Route
          path="/tecnologia"
          element={<Tecnologia agregarAlCarrito={agregarAlCarrito} />}
        />
        <Route path="/productos/:id" element={<ProductoDetalle />} />
        <Route
          path="/carrito"
          element={
            <Carrito
              carrito={carrito}
              eliminarDelCarrito={eliminarDelCarrito}
            />
          }
        />
      </Routes>

      <Footer />
    </>
  );
}

export default App;