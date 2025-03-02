import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import CV from "./components/CV/CV.jsx";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="mainContainer">
        <div className="a4SizedContainer">
          <CV />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
