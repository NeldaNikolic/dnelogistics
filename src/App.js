import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./component/home/Home";
import NavBar from "./component/navBar/NavBar";
import Footer from "./component/footer/Footer";
import About from "./component/about/About";
import Infromation from "./component/infromation/Infromation";

const App = () => {
  return (
    <div className="App">
      <header>
        <NavBar />
      </header>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home /> <About /> <Infromation />
            </>
          }
        />
        <Route path="About" element={<About />} />
        <Route path="Infromation" element={<Infromation />} />
        <Route
          path="*"
          element={
            <>
              <Home />
            </>
          }
        />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
