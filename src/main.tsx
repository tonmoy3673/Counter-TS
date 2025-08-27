import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import RootLayouts from "./layout/RootLayouts";
import Home from "./components/Home";
import "./index.css";
import Contact from "./components/Contact";
import {CounterContextProvider } from "./context/CounterContext";
import Users from "./components/Users";
import { UserContextProvider } from "./context/UserContext";

const root = document.getElementById("root") as HTMLElement;

ReactDOM.createRoot(root).render(
<CounterContextProvider>
  <UserContextProvider>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<RootLayouts />}>
        <Route index element={<Home />} />
        <Route path="users" element={<Users/>}/>
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  </BrowserRouter>
  </UserContextProvider>
</CounterContextProvider>
);
