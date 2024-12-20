import React, { useState } from "react";

const Catatan = () => {
  const [judul, setJudul] = useState(""); // Input judul catatan
  const [konten, setKonten] = useState(""); // Input isi catatan
  const [catatan, setCatatan] = useState([]); // Menyimpan daftar catatan
  const [editIndex, setEditIndex] = useState(null); // Index catatan yang sedang diedit
  const [editJudul, setEditJudul] = useState(""); // Input judul saat edit
  const [editKonten, setEditKonten] = useState(""); // Input konten saat edit

  // Menambah catatan baru
  const tambahCatatan = () => {
    if (judul.trim() && konten.trim()) {
      setCatatan([...catatan, { judul, konten }]);
      setJudul("");
      setKonten("");
    }
  };

  // Menghapus catatan
  const hapusCatatan = (index) => {
    setCatatan(catatan.filter((_, i) => i !== index));
  };

  // Memulai proses edit
  const mulaiEdit = (index) => {
    setEditIndex(index);
    setEditJudul(catatan[index].judul);
    setEditKonten(catatan[index].konten);
  };

  // Menyimpan hasil edit
  const simpanEdit = () => {
    if (editJudul.trim() && editKonten.trim()) {
      const updatedCatatan = [...catatan];
      updatedCatatan[editIndex] = { judul: editJudul, konten: editKonten };
      setCatatan(updatedCatatan);
      setEditIndex(null);
      setEditJudul("");
      setEditKonten("");
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4 font-bold">
      <h2 className="text-2xl font-bold text-blue-400 mb-4 text-center">
        CATATAN
      </h2>

      {/* Input Tambah Catatan */}
      <div className="mb-6">
        <input
          type="text"
          value={judul}
          onChange={(e) => setJudul(e.target.value)}
          placeholder="Note Title"
          className="w-full border border-gray-300 rounded p-2 mb-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <textarea
          value={konten}
          onChange={(e) => setKonten(e.target.value)}
          placeholder="Note Content"
          rows="6"
          className="w-full border border-gray-300 rounded p-2 mb-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        ></textarea>
        <button
          onClick={tambahCatatan}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-400"
        >
          Save
        </button>
      </div>

      {/* Daftar Catatan */}
      <ul className="space-y-4">
        {catatan.map((item, index) => (
          <li key={index} className="border border-gray-300 rounded p-4">
            {editIndex === index ? (
              <>
                <input
                  type="text"
                  value={editJudul}
                  onChange={(e) => setEditJudul(e.target.value)}
                  placeholder="Edit Title"
                  className="w-full border border-gray-300 rounded p-2 mb-2"
                />
                <textarea
                  value={editKonten}
                  onChange={(e) => setEditKonten(e.target.value)}
                  placeholder="Edit Content"
                  rows="4"
                  className="w-full border border-gray-300 rounded p-2 mb-2"
                ></textarea>
                <button
                  onClick={simpanEdit}
                  className="bg-green-500 text-white px-4 py-1 rounded mr-2 hover:bg-green-600"
                >
                  Save
                </button>
                <button
                  onClick={() => setEditIndex(null)}
                  className="bg-gray-400 text-white px-4 py-1 rounded hover:bg-gray-500"
                >
                  Cancel
                </button>
              </>
            ) : (
              <>
                <h3 className="text-lg font-semibold text-blue-600">
                  {item.judul}
                </h3>
                <p className="text-gray-700">{item.konten}</p>
                <div className="mt-2">
                  <button
                    onClick={() => mulaiEdit(index)}
                    className="bg-pink-300 text-white px-4 py-1 rounded mr-2 hover:bg-blue-300"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => hapusCatatan(index)}
                    className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600"
                  >
                    Delete
                  </button>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Catatan;
