const CartModal = ({ isOpen, closeCart, cart, removeFromCart }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-4 rounded shadow-lg">
        <h2 className="text-lg font-semibold mb-4">Cart Items</h2>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <ul>
            {cart.map((item) => (
              <li
                key={item.id}
                className="flex justify-between items-center mb-2"
              >
                <span>{item.title}</span>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        )}
        <button
          onClick={closeCart}
          className="mt-4 bg-blue-600 text-white px-4 py-2 rounded"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default CartModal;
