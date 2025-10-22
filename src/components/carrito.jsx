const Carrito = ({ carrito, eliminarDelCarrito }) => {
  return (
    <div>
      <h2>Carrito</h2>
      {carrito.length === 0 ? (
        <p>El carrito está vacío.</p>
      ) : (
        carrito.map((producto, indice) => (
          <div key={indice}>
            <img
              src={producto.image}
              alt={producto.title}
              height={80}
              width={80}
            />
            <p>
              {producto.title} : {producto.price}$
            </p>
            <button onClick={() => eliminarDelCarrito(indice)}>Eliminar</button>
          </div>
        ))
      )}
    </div>
  );
};

export default Carrito;