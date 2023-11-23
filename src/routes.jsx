import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Page404 from "./pages/page404";
import Container from "/src/components/Container";
import Footer from "/src/components/Footer";
import Header from "/src/components/Header";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Header />
      <Container>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="*" element={<Page404 />}></Route>
        </Routes>
      </Container>
      <Footer />
    </BrowserRouter>
  );
}

export default AppRoutes;
