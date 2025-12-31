import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Tutors from "./pages/Tutors";

export default function App() {
  return (
    <main className="overflow-hidden bg-light text-text-secondary">
      <Header />
      <div className="pt-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tutors" element={<Tutors />} />
        </Routes>
      </div>
    </main>
  );
}
