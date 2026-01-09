import "./App.css";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import AsideRight from "./components/Aside-right";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { News } from "./pages/news";
import { Election } from "./pages/election";
import { Movie } from "./pages/movie";
import { OldNews } from "./pages/oldnews";

function App() {
  return (
    <div className="app">
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" element={<><Main /> <AsideRight /></>}/>
          <Route path="/news" element={<News />} />
          <Route path="/election" element={<Election />} />
          <Route path="/movie" element={<Movie />} />
          <Route path="/oldnews" element={<OldNews />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
