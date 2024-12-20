import React from "react";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Home = () => {
  const navigate = useNavigate();

  const goToListTugas = () => {
    navigate("/list-tugas");
  };

  const goToJadwalBelajar = () => {
    navigate("/jadwal-belajar");
  };

  const goToCatatan = () => {
    navigate("/catatan");
  };

  const goToRiwayat = () => {
    navigate("/riwayat");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-100 to-purple-200 flex flex-col items-center p-4">
      {/* Navbar */}
      <header className="w-full flex justify-between items-center p-4 bg-blue-300 rounded-lg shadow-lg mb-6">
        <div className="flex items-center space-x-4">
          <img src="/gambar/logo.png" alt="Logo StudyMate" className="h-10 w-10" />
          <h1 className="text-2xl font-bold text-gray-700">StudyMate</h1>
        </div>
      </header>

      {/* Slider Section */}
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        className="w-full mb-7"
      >
        <SwiperSlide>
          <img src="/gambar/foto1.png" alt="Slide 1" className="w-full h-83 object-cover" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/gambar/slide2.jpg" alt="Slide 2" className="w-full h-83 object-cover" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/gambar/slide3.jpg" alt="Slide 3" className="w-full h-83 object-cover" />
        </SwiperSlide>
      </Swiper>

      {/* Main Section */}
      <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full max-w-6x1">
        {/* List Tugas */}
        <div
          onClick={goToListTugas}
          className="bg-blue-100 rounded-lg shadow-lg p-4 flex flex-col items-center cursor-pointer hover:bg-blue-200">
          <img src="/gambar/list.png" alt="List Tugas" />
          <h2 className="text-xl font-bold text-gray-700 mb-10">List Tugas</h2>
        </div>

         {/* Selamat Datang */}
         <div className="bg-blue-100 rounded-lg shadow-lg p-4 flex flex-col items-center">
          <img src="/gambar/img1.jpg" alt="Avatar" className="h-30 w-20 rounded-full mb-4" />
          <h2 className="text-xl font-bold text-gray-700 mb-2">Selamat datang!</h2>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Falisa Alfiani Heriansyah</h2>
          <p className="text-center font-semibold text-black mb-2">
            "Selamat Datang di StudyMate! Tempat terbaik untuk mengelola tugas, jadwal belajar, dan catatan Anda.
            Ayo, mulai perjalanan belajar yang lebih terorganisir bersama kami!"
          </p>
        </div>

        {/* Jadwal Belajar */}
        <div
          onClick={goToJadwalBelajar}
          className="bg-blue-100 rounded-lg shadow-lg p-4 flex flex-col items-center cursor-pointer hover:bg-blue-200">
          <img src="/gambar/jadwal.png" alt="Jadwal Belajar" />
          <h2 className="text-xl font-bold text-gray-700 mb-10">Jadwal Belajar</h2>
        </div>

        {/* Catatan */}
        <div 
          onClick={goToCatatan}
          className="bg-blue-100 rounded-lg shadow-lg p-4 flex flex-col items-center  cursor-pointer hover:bg-blue-200">
          <img src="/gambar/catatan.png" alt="Catatan" />
          <h2 className="text-xl font-bold text-gray-700 mb-10">Catatan</h2>
        </div>

        {/* Kalender */}
        <div className="bg-blue-100 rounded-lg shadow-lg p-4 flex flex-col items-center">
          <img src="/path-to-calendar-image.png" alt="Kalender" />
          <h2 className="text-xl font-bold text-gray-700 mb-10">Kalender</h2>
        </div>

        {/* Riwayat Tugas */}
        <div 
          onClick={goToRiwayat}
          className="bg-blue-100 rounded-lg shadow-lg p-4 flex flex-col items-center cursor-pointer hover:bg-blue-200">
          <img src="/gambar/riwayat.png" alt="Riwayat" />
          <h2 className="text-xl font-bold text-gray-700 mb-10">Riwayat Tugas</h2>
        </div>
      </main>
    </div>
  );
};

export default Home;
