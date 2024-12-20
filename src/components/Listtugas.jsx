import React, { useState, useEffect } from "react";

const ListTugas = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState({ title: "", deadline: "", description: "" });

  // Fungsi untuk menambahkan tugas baru
  const addTask = () => {
    if (newTask.title && newTask.deadline) {
      const newId = tasks.length ? tasks[tasks.length - 1].id + 1 : 1;
      const task = { 
        id: newId, 
        title: newTask.title, 
        deadline: newTask.deadline, 
        description: newTask.description,
        status: "Belum Selesai" 
      };
      setTasks([...tasks, task]);
      setNewTask({ title: "", deadline: "", description: "" });
    } else {
      alert("Judul dan deadline harus diisi!");
    }
  };

  // Fungsi untuk menandai tugas sebagai selesai
  const markAsComplete = (id) => {
    const updatedTasks = tasks.map(task => 
      task.id === id ? { ...task, status: "Selesai" } : task
    );
    const completedTask = updatedTasks.find(task => task.id === id);
    
    // Pindahkan tugas yang selesai ke localStorage untuk Riwayat
    if (completedTask) {
      const riwayat = JSON.parse(localStorage.getItem('riwayatTugas')) || [];
      localStorage.setItem('riwayatTugas', JSON.stringify([...riwayat, completedTask]));
    }
    
    // Perbarui daftar tugas
    setTasks(updatedTasks.filter(task => task.status !== "Selesai"));
  };

  // Fungsi untuk menghapus tugas
  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  // Fungsi untuk mengedit tugas (judul, deadline, dan keterangan)
  const editTask = (id) => {
    const newTitle = prompt("Masukkan judul baru");
    const newDeadline = prompt("Masukkan deadline baru (yyyy-mm-dd)");
    const newDescription = prompt("Masukkan keterangan baru");
    if (newTitle && newDeadline && newDescription) {
      setTasks(tasks.map(task => 
        task.id === id ? { ...task, title: newTitle, deadline: newDeadline, description: newDescription } : task
      ));
    }
  };

  // Notifikasi jika ada deadline hari ini
  useEffect(() => {
    const today = new Date().toISOString().split('T')[0];
    const deadlineToday = tasks.filter(task => task.deadline === today);
    if (deadlineToday.length > 0) {
      alert(`Anda memiliki ${deadlineToday.length} tugas yang harus diselesaikan hari ini!`);
    }
  }, [tasks]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-100 to-purple-200 p-4">
      <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">List Tugas</h1>

      <div className="max-w-4xl mx-auto mb-6">
        <input 
          type="text" 
          placeholder="Nama Tugas" 
          value={newTask.title} 
          onChange={(e) => setNewTask({ ...newTask, title: e.target.value })} 
          className="border p-2 rounded-md w-full mb-2" 
        />
        <input 
          type="date" 
          value={newTask.deadline} 
          onChange={(e) => setNewTask({ ...newTask, deadline: e.target.value })} 
          className="border p-2 rounded-md w-full mb-2" 
        />
        <textarea 
          placeholder="Keterangan" 
          value={newTask.description} 
          onChange={(e) => setNewTask({ ...newTask, description: e.target.value })} 
          className="border p-2 rounded-md w-full mb-2" 
        />
        <button 
          onClick={addTask} 
          className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-600"
        >
          Tambah Tugas
        </button>
      </div>

      <div className="max-w-4xl mx-auto">
        {tasks.map((task) => (
          <div 
            key={task.id} 
            className="bg-blue-100 rounded-lg shadow-lg p-4 mb-4 flex justify-between items-center"
          >
            <div>
              <h2 className="text-xl font-bold text-gray-700">{task.title}</h2>
              <p className="text-gray-600">Deadline: {task.deadline}</p>
              <p className="text-gray-600">Keterangan: {task.description}</p>
              <p className={`text-sm mt-2 ${task.status === "Selesai" ? "text-green-500" : "text-red-500"}`}>
                Status: {task.status}
              </p>
            </div>
            <div className="flex space-x-2">
              <button 
                onClick={() => markAsComplete(task.id)} 
                className="bg-green-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-green-600"
              >
                Selesai
              </button>
              <button 
                onClick={() => deleteTask(task.id)} 
                className="bg-red-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-red-600"
              >
                Hapus
              </button>
              <button 
                onClick={() => editTask(task.id)} 
                className="bg-yellow-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-yellow-600"
              >
                Edit
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListTugas;
