import { useEffect } from "react";
import "./style.css";

function Toast({ message, show, onClose }) {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        onClose();
      }, 2000); // se cierra automáticamente a los 2 segundos
      return () => clearTimeout(timer);
    }
  }, [show, onClose]);

  if (!show) return null;

  return <div className="toast">{message}</div>;
}

export default Toast;
