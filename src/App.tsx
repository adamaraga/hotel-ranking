import Home from "./pages/Home";
// import { useAppSelector, useAppDispatch } from "./hooks/reduxHooks";
// import { incrementByAmount } from "./store/slices/hotelsSlice";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainLayout } from "./components/layouts/MainLayout";
import NotFound from "./pages/NotFound";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";
import "./assets/styles/scss/main.scss";

function App() {
  // const count = useAppSelector((state) => state.hotels.value);
  // const dispatch = useAppDispatch();

  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
