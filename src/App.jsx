import { Routes, Route, Navigate } from "react-router-dom";
import { ReactLenis } from "lenis/react";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import CVContainer from "./components/CVContainer/CVContainer.jsx";
import SideMenu from "./components/SideMenu/SideMenu.jsx";
import useDownloadPDF from "./components/Download/useDownloadPDF.jsx";

const DEFAULT_LANGUAGE = "fr";
const DEFAULT_CV_TYPE = "frontEnd";

function App() {
  const { a4ContainerRef, downloadPDF } = useDownloadPDF();

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
              <Route
                path="/"
                element={
                  <Navigate to={`/cv/${DEFAULT_LANGUAGE}/${DEFAULT_CV_TYPE}`} />
                }
              />
              <Route path="/cv/:language/:cvType" element={<CVContainer />} />
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
