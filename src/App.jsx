import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import CV from "./components/CV/CV.jsx";
import { Routes, Route, Navigate } from "react-router-dom";
import { useRef } from "react";

function App() {
  const a4ContainerRef = useRef(null);
  const downloadPDF = () => {
    import("html2pdf.js").then((module) => {
      const html2pdf = module.default;
      const today = new Date();
      const day = today.getDate();
      const month = today.getMonth() + 1;
      const year = today.getFullYear();
      const fileName = `CV_ErwanRobin_${day}-${month}-${year}.pdf`;
      const options = {
        filename: fileName,
        image: {
          type: "jpeg",
          quality: 1,
        },
        html2canvas: {
          scale: 4, // Increased scale for better quality
          useCORS: true, // Enable cross-origin resource sharing
          /*   logging: false, */ // Disable logging
          dpi: 192, // Higher DPI for better print quality
          letterRendering: true, // Improve text rendering
          allowTaint: true, // Allow rendering of cross-origin images
        },
        jsPDF: {
          unit: "in",
          format: "A4",
          orientation: "portrait",
          compress: false, // Compress PDF to reduce file size
        },
      };
      // Create PDF with enhanced options
      html2pdf()
        .set(options)
        .from(a4ContainerRef.current)
        .save()
        .catch((err) => {
          console.error("PDF Generation Error:", err);
        });
    });
  };

  return (
    <div className="App">
      <Header downloadPDF={downloadPDF} />
      <div className="mainContainer">
        <div className="a4SizedContainer" ref={a4ContainerRef}>
          <Routes>
            <Route path="/" element={<Navigate to="/cv/fr/barrista" />} />
            <Route path="/cv/:language/:cvType" element={<CV />} />
          </Routes>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;

// Callback functions for additional control
/*   callback: (pdf) => {
          // Optional: Additional PDF modifications
          pdf.setDisplayMode("fullwidth");
        }, */
