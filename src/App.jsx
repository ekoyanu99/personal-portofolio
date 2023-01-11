import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header, Footer } from "./Components";
import {Home, Projects, Contact, Technologies, About} from "./Pages";
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/technologies" element={<Technologies />} />
      </Routes>
      <Footer />
    </Router>
  );
}
export default App;
