// Utility functions for formatting file size and date
export const formatFileSize = (size) => {
    return (size / (1024 * 1024)).toFixed(2) + " MB";
  };
  
  export const formatDate = (date) => {
    const d = new Date(date);
    return `${d.getDate().toString().padStart(2, "0")}/${(d.getMonth() + 1).toString().padStart(2, "0")}/${d.getFullYear()} ${d.getHours().toString().padStart(2, "0")}:${d.getMinutes().toString().padStart(2, "0")}`;
  };
  