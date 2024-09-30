const Navbar = ({ cartCount, openCart }) => {
  return (
    <nav className="mx-auto bg-pink-300 p-4 text-white flex justify-between rounded sticky top-0">
      <h1 className="font-bold text-xl">Fake Store</h1>
      <button
        onClick={openCart}
        className="bg-pink-600 px-4 py-2 rounded-lg font-semibold"
      >
        Cart ({cartCount})
      </button>
    </nav>
  );
};

export default Navbar;
