import React, { useEffect, useState } from 'react';

const Riwayat = () => {
  const [riwayat, setRiwayat] = useState([]);

  useEffect(() => {
    const storedRiwayat = JSON.parse(localStorage.getItem('riwayatTugas')) || [];
    setRiwayat(storedRiwayat);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-100 to-purple-200 p-4">
      <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Riwayat Tugas</h1>

      {riwayat.length === 0 ? (
        <p className="text-center text-gray-700">Belum ada tugas yang selesai.</p>
      ) : (
        <div className="max-w-4xl mx-auto">
          {riwayat.map((task, index) => (
            <div 
              key={index} 
              className="bg-green-100 rounded-lg shadow-lg p-4 mb-4"
            >
              <h2 className="text-xl font-bold text-gray-700">{task.title}</h2>
              <p className="text-gray-600">Deadline: {task.deadline}</p>
              <p className="text-green-500 font-semibold">Status: {task.status}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Riwayat;
