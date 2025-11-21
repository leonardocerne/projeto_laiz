import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PlaylistCarousel from "./pages/PlaylistPage";
import FinalPage from "./pages/FinalPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/playlist" element={<PlaylistCarousel />} />
        <Route path="/final" element={<FinalPage />} />
      </Routes>
    </BrowserRouter>
  );
}
