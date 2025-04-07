import { Routes, Route, Navigate } from "react-router-dom";
import { useRef, useState } from "react";
import { ReactLenis } from "lenis/react";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import CVContainer from "./components/CVContainer/CVContainer.jsx";
import SideMenu from "./components/SideMenu/SideMenu.jsx";
import RouteParamsWrapper from "./components/RouteParamsWrapper.jsx";

function App() {
  const a4ContainerRef = useRef(null);
  const [currentCvType, setCurrentCvType] = useState("frontEnd");
  const [currentLanguage, setCurrentLanguage] = useState("fr");

  const downloadPDF = () => {
    import("html2pdf.js").then((module) => {
      const html2pdf = module.default;
      const today = new Date();
      const day = today.getDate();
      const month = today.getMonth() + 1;
      const year = today.getFullYear();
      const fileName = `CV_ErwanRobin_${currentCvType}_${day}-${month}-${year}.pdf`;
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
    <ReactLenis
      root
      options={{
        easing: function easeOutQuint(x) {
          return 1 - Math.pow(1 - x, 5);
        },
        duration: 0.75,
        wheelMultiplier: 0.5,
      }}
    >
      <div className="App">
        <Header downloadPDF={downloadPDF} />
        <SideMenu />
        <div className="mainContainer">
          <div className="a4SizedContainer" ref={a4ContainerRef}>
            <Routes>
              <Route path="/" element={<Navigate to="/cv/fr/frontEnd" />} />
              <Route
                path="/cv/:language/:cvType"
                element={
                  <RouteParamsWrapper>
                    {({ language, cvType }) => {
                      //update file name based on url params
                      if (language !== currentLanguage) {
                        setCurrentLanguage(language);
                      }
                      if (cvType !== currentCvType) {
                        setCurrentCvType(cvType);
                      }
                      return (
                        <CVContainer language={language} cvType={cvType} />
                      );
                    }}
                  </RouteParamsWrapper>
                }
              />
              <Route path="/*" element={<Navigate to="/" />} />
            </Routes>
          </div>
        </div>
        <Footer />
      </div>
    </ReactLenis>
  );
}

export default App;

// Callback functions for additional control
/*   callback: (pdf) => {
          // Optional: Additional PDF modifications
          pdf.setDisplayMode("fullwidth");
        }, */
