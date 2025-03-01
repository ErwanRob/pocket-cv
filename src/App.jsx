import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="mainContainer">
        <div className="a4SizedContainer">
          <div className="cvs"></div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
