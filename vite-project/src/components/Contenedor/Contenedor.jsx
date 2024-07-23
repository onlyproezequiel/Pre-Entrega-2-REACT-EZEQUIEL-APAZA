import ProductCard from './ProductCard/ProductCard';

const Contenedor = ({ mensajeBienvenida, productos }) => {
  return (
    <div className="contenedor">
      <h1>{mensajeBienvenida}</h1>
      <div className="catalogo">
        {productos.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default Contenedor;
