import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";

import Header from "./components/Header";

import Home from "./page/Home";
import Recipe from "./page/Recipe";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipe" element={<Recipe />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
export default App;
