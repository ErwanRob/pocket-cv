import { useLocation } from "react-router-dom";
import html2pdf from "html2pdf.js";
import { useRef } from "react";

const useDownloadPDF = () => {
  const location = useLocation();
  // Extract route parameters via regex assuming route "/cv/:language/:cvType"
  const match = location.pathname.match(/\/cv\/([^/]+)\/([^/]+)/);
  const language = match ? match[1] : "fr";
  const cvType = match ? match[2] : "frontEnd";

  const a4ContainerRef = useRef(null);

  const downloadPDF = () => {
    const today = new Date();
    const day = today.getDate().toString().padStart(2, "0");
    const month = (today.getMonth() + 1).toString().padStart(2, "0");
    const year = today.getFullYear();
    const fileName = `CV_ErwanRobin_${cvType.toUpperCase()}_[${language}]_(${day}-${month}-${year}).pdf`;

    const options = {
      filename: fileName,
      image: { type: "jpeg", quality: 1 },
      html2canvas: {
        scale: 4,
        useCORS: true,
        dpi: 192,
        letterRendering: true,
        allowTaint: true,
      },
      jsPDF: {
        unit: "in",
        format: "A4",
        orientation: "portrait",
        compress: false,
      },
    };

    html2pdf()
      .set(options)
      .from(a4ContainerRef.current)
      .save()
      .catch((err) => console.error("PDF Generation Error:", err));
  };

  return { a4ContainerRef, downloadPDF };
};

export default useDownloadPDF;
