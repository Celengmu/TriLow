import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {

  // 1️⃣ STATE KERANJANG
  const [cart, setCart] = useState([]);

  // 2️⃣ STATE DATA PEMESAN  ← TAMBAHKAN DI SINI
  const [customer, setCustomer] = useState(null);

  // 3️⃣ FUNGSI TAMBAH ITEM
  const addItem = (item) => {
    setCart(prev => {
      const exist = prev.find(p => p.id === item.id);
      if (exist) {
        return prev.map(p =>
          p.id === item.id
            ? { ...p, qty: p.qty + 1 }
            : p
        );
      }
      return [...prev, { ...item, qty: 1 }];
    });
  };

  // 4️⃣ UPDATE JUMLAH
  const updateQty = (id, qty) => {
    setCart(prev =>
      prev
        .map(item =>
          item.id === id ? { ...item, qty } : item
        )
        .filter(item => item.qty > 0)
    );
  };

  // 5️⃣ HAPUS ITEM
  const removeItem = (id) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  // 6️⃣ RETURN PROVIDER  ← customer & setCustomer DI SINI
  return (
    <CartContext.Provider
      value={{
        cart,
        addItem,
        updateQty,
        removeItem,
        customer,     // ← TAMBAHKAN
        setCustomer   // ← TAMBAHKAN
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

// 7️⃣ HOOK
export const useCart = () => useContext(CartContext);