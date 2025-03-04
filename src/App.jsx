import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import CV from "./components/CV/CV.jsx";
import { Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="mainContainer">
        <div className="a4SizedContainer">
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
