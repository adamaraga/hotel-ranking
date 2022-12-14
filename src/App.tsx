import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainLayout } from "./components/layouts/MainLayout";
import NotFound from "./pages/NotFound";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";
import "./assets/styles/scss/main.scss";
import Chains from "./pages/Chains";
import Map from "./pages/Map";

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chains" element={<Chains />} />
          <Route path="/map/:id" element={<Map />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
