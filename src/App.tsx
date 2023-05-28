import { Routes, Route } from "react-router-dom";
import Container from "react-bootstrap/Container";
import { Store } from "./pages/Store";
import { About } from "./pages/About";
import { Navbar } from "./components/Navbar";
import { ShoppingCartProvider } from "./context/ShoppingCartProvider";
import { NotFound } from "./pages/NotFound";

function App() {
  return (
    <ShoppingCartProvider>
      <Navbar />
      <Container className="mb-4">
        <Routes>
          <Route path="/" element={<Store />} />
          <Route path="/about" element={<About />} />
          <Route path='*' element={<NotFound />}/>
        </Routes>
      </Container>
    </ShoppingCartProvider>
  );
}

export default App;
