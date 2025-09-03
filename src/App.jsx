import { Route, Routes } from "react-router";
import {Navigate} from "react-router";
import Home from "./pages/Home";
import Links from "./pages/Links";
import Nav from "./components/Nav";
import Clients from "./pages/Clients";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ClientDetail from "./pages/ClientDetail";

function App() {
  return (
    <main className ="App">
      <Nav />
      <Routes>
        {/* Routes go here */}
        <Route path="*" element={<Navigate to="/" />} />
        <Route path="/" element={<Home />} />
        <Route path="/links" element={<Links />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/clients/:id" element={<ClientDetail />} />
      </Routes>
      </main>
  );
}

export default App;
