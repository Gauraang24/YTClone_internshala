export const getBase64 = (file, callback) => {
  const reader = new FileReader();
  reader.onload = () => callback(reader.result); // Convert to Base64
  reader.onerror = (error) => console.error("Error reading file:", error);
  reader.readAsDataURL(file); // Read file as Data URL
};
