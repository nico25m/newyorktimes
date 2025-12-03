import "./App.css";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import AsideRight from "./components/Aside-right";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Main />
      <AsideRight />
      <Footer />
    </div>
  );
}

export default App;
