import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import RootLayouts from "./layout/RootLayouts";
import Home from "./components/Home";
import "./index.css";
import About from "./components/About";
import Contact from "./components/Contact";

const root = document.getElementById("root") as HTMLElement;

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<RootLayouts />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
