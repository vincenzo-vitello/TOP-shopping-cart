import { createContext, useContext, useState, useEffect } from "react";

const ProductContext = createContext();

export function ProductProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState(() => {
    try {
      const storedCart = localStorage.getItem("cart");
      return storedCart ? JSON.parse(storedCart) : [];
    } catch (error) {
      console.error("Errore parsing localStorage cart:", error);
      return [];
    }
  });

  const [notification, setNotification] = useState({
    message: "",
    visible: false,
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    fetch("/data/products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.log(err));
  }, []);

  const showNotification = (message) => {
    setNotification({ message, visible: true });

    setTimeout(() => {
      setNotification((prev) => ({ ...prev, visible: false }));

      setTimeout(() => {
        setNotification({ message: "", visible: false });
      }, 500);
    }, 2000);
  };

  const addToCart = (product) => {
    setCart((prev) => {
      const productIndex = prev.findIndex((item) => item.id === product.id);
      if (productIndex !== -1) {
        const updatedCart = [...prev];
        updatedCart[productIndex] = {
          ...updatedCart[productIndex],
          quantity: updatedCart[productIndex].quantity + 1,
        };
        return updatedCart;
      } else {
        return [...prev, { ...product, quantity: 1 }];
      }
    });

    showNotification("Product added to cart!");
  };

  const removeFromCart = (product) => {
    setCart((prev) => prev.filter((item) => item.id !== product.id));
    showNotification("Product removed from cart!");
  };

  const updateQuantity = (productId, quantity) => {
    setCart((prev) =>
      prev.map((item) => (item.id === productId ? { ...item, quantity } : item))
    );
  };

  return (
    <ProductContext.Provider
      value={{
        products,
        setProducts,
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        notification,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}

export function useProducts() {
  return useContext(ProductContext);
}
