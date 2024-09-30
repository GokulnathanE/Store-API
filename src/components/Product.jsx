const Product = ({ product, addToCart }) => {
  return (
    <div className="bg-white p-4 rounded shadow ">
      <img
        src={product.image}
        alt={product.title}
        className="h-48 w-full object-cover mb-4"
      />
      <h2 className="text-lg font-semibold">{product.title}</h2>
      <p className="text-gray-700">${product.price.toFixed(2)}</p>
      <button
        onClick={() => addToCart(product)}
        className="mt-4 bg-pink-500 text-white px-4 py-2 rounded-lg"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default Product;
