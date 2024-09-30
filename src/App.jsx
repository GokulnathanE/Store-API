import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Product from "./components/Product";
import CartModal from "./components/CartModal";

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [isCartOpen, setCartOpen] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setProducts(data);
    };
    fetchProducts();
  }, []);

  const addToCart = (product) => {
    if (cart.some((item) => item.id === product.id)) {
      alert("Item already added to the cart");
    } else {
      setCart([...cart, product]);
    }
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar cartCount={cart.length} openCart={() => setCartOpen(true)} />
      <div className="container mx-auto p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {products.map((product) => (
          <Product key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
      <CartModal
        isOpen={isCartOpen}
        closeCart={() => setCartOpen(false)}
        cart={cart}
        removeFromCart={removeFromCart}
      />
    </div>
  );
};

export default App;
