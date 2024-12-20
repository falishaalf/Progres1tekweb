import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home";
import ListTugas from "./components/Listtugas"; 
import JadwalBelajar from "./components/Jadwalbelajar";
import Catatan from "./components/Catatan";
import Riwayat from "./components/Riwayat";

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100 w-full">
        <div className="p-0 w-full">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/list-tugas" element={<ListTugas />} />
            <Route path="/jadwal-belajar" element={<JadwalBelajar />} />
            <Route path="/catatan" element={<Catatan />} />
            <Route path="/riwayat" element={<Riwayat />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
