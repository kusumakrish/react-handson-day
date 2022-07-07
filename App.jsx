import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./component/Home";
import Contact from "./component/contact";
import About from "./component/About";
import Nav from "./component/Nav";
import NotFound from "./component/NotFound";
import CompB from "./component/compB";
import CompA from "./component/compA";
export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/About" element={<About />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      <CompA />
      <CompB />
    </div>
  );
}
