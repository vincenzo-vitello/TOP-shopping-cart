import style from "./cart-notification.module.css";
import { useProducts } from "../../context/ContextProvider";

export default function CartNotification() {
  const { notification } = useProducts();

  return (
    <>
      <div
        className={
          notification.visible
            ? `${style.notification} ${style.visible}`
            : style.notification
        }
      >
        {notification.message}
      </div>
    </>
  );
}
