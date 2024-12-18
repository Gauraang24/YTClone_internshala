import { toast } from "react-toastify";

export const getBase64 = (file, callback) => {
  const reader = new FileReader();
  reader.onload = () => callback(reader.result); // Convert to Base64
  reader.onerror = (error) => console.error("Error reading file:", error);
  reader.readAsDataURL(file); // Read file as Data URL
};

export const toastMessage = (message, type, closeButton = true) => {
  const baseConfig = {
    hideProgressBar: true,
    closeButton,
    autoClose: 3000,
  };

  switch (type) {
    case "error":
      toast.error(message, baseConfig);
      break;
    case "info":
      toast.info(message, baseConfig);
      break;
    case "":
      toast.success(message, baseConfig);
      break;
    default:
      console.error("Invalid toast type:", type);
  }
};
