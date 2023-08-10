import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header, Footer } from "./Components";
import { Home, Projects, Contact, Technologies, About } from "./Pages";
function App() {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Technologies />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}
export default App;
