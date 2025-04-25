import { useProducts } from "../../context/ContextProvider";
import style from "./cart.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
function CartPage() {
  const { cart, removeFromCart, updateQuantity } = useProducts();

  const total = cart.reduce(
    (acc, product) => acc + product.price * product.quantity,
    0
  );

  const handleQuantityChange = (productId, quantity) => {
    if (quantity < 1) return; // Evita quantità negative
    updateQuantity(productId, quantity);
  };

  const handleCheckout = () => {
    alert("Checkout finto completato!");
  };

  return (
    <div className={style.cartContainer}>
      <div className={style.cartPage}>
        <div className={style.cartItems}>
          <p>Your Cart</p>
          {cart.length === 0 ? (
            <p>Your cart is empty</p>
          ) : (
            cart.map((product) => (
              <div key={product.id} className={style.cartItem}>
                <img src={product.images[0]} alt={product.name} />
                <div className={style.itemDetails}>
                  <div className={style.productInfo}>
                    <h3 className={style.productName}>{product.name}</h3>
                    <button
                      className={style.removeButton}
                      onClick={() => removeFromCart(product)}
                    >
                      <FontAwesomeIcon icon={faXmark} className="fa-solid" />
                    </button>
                  </div>
                  <p className={style.productDescription}>
                    {product.description}
                  </p>
                  <p className={style.productPrice}>{product.price}€</p>
                  <div>
                    <label>Quantity: </label>
                    <input
                      type="number"
                      min="1"
                      value={product.quantity}
                      onChange={(e) =>
                        handleQuantityChange(
                          product.id,
                          parseInt(e.target.value)
                        )
                      }
                    />
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {cart.length > 0 && (
          <div className={style.checkOutContainer}>
            <h3>Summary</h3>

            <div className={style.productSummaryList}>
              {cart.map((product) => (
                <div key={product.id} className={style.productSummaryRow}>
                  <span className={style.productSummaryName}>
                    {product.name} × {product.quantity}
                  </span>
                  <span className={style.productSummaryPrice}>
                    {(product.price * product.quantity).toFixed(2)}€
                  </span>
                </div>
              ))}
            </div>

            <div className={style.summaryRow}>
              <span className={style.label}>Subtotal</span>
              <span className={style.value}>{total.toFixed(2)}€</span>
            </div>
            <div className={style.summaryRow}>
              <span className={style.label}>Taxes (Included)</span>
              <span className={style.value}>{(total * 0.2).toFixed(2)}€</span>
            </div>
            <div className={style.totalRow}>
              <span>Total</span>
              <span>{(total * 1.2).toFixed(2)}€</span>
            </div>

            <button onClick={handleCheckout}>Proceed to Checkout</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default CartPage;
