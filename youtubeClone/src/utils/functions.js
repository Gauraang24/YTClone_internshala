import { toast } from "react-toastify";
import CrossIcon from "/images/Toast-msg-icons/Cross.svg";
import InfoIcon from "/images/Toast-msg-icons/info.svg";
import TickIcon from "/images/Toast-msg-icons/Tick.svg";

export const getBase64 = (file, callback) => {
  const reader = new FileReader();
  reader.onload = () => callback(reader.result); // Convert to Base64
  reader.onerror = (error) => console.error("Error reading file:", error);
  reader.readAsDataURL(file); // Read file as Data URL
};

export const toastMessage = (message, type, closeButton) => {
  if (type === "error") {
    toast.error(message, {
      closeButton: closeButton ? false : true,
      hideProgressBar: true,
      className: "toast-msg toast-error",
      icon: () => <img src={CrossIcon} alt="Error-icon" />,
      autoClose: 3000,
    });
  } else if (type === "info") {
    toast.info(message, {
      hideProgressBar: true,
      closeButton: closeButton ? false : true,
      icon: () => <img src={InfoIcon} alt="Info-icon" />,
      className: "toast-msg toast-info",
      autoClose: 3000,
    });
  } else {
    toast.success(message, {
      hideProgressBar: true,
      closeButton: closeButton ? false : true,
      className: "toast-msg toast-success",
      icon: () => <img src={TickIcon} alt="success-icon" />,
      autoClose: 3000,
    });
  }
};
