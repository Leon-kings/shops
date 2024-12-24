import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import { CartProvider } from "./CartContext";
import OrderModal from "./components/OrderModal";
import React, { useState } from "react";
React;
function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleConfirmOrder = () => {
    setIsModalOpen(true);
  };

  const handleStartNewOrder = () => {
    setIsModalOpen(false);
  };

  return (
    <CartProvider>
      <div className="relative">
        <div className="flex px-4 md:px-0 gap-8 md:container mx-auto py-10  justify-center md:justify-between md:items-start flex-col md:flex-row">
          <ProductList />
          <Cart onConfirmOrder={handleConfirmOrder} />
        </div>
        <OrderModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onStartNewOrder={handleStartNewOrder}
        />
      </div>
    </CartProvider>
  );
}

export default App;
