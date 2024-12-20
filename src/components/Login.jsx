import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from "../firebaseConfig";

const Login = () => {
  const [email, setEmail] = useState(""); 
  const [password, setPassword] = useState("");
  const [isCreatingAccount, setIsCreatingAccount] = useState(false); 
  const navigate = useNavigate();

  const auth = getAuth(app); //Firebase authentication

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // Sign in with email and password
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      navigate("/home"); 
    } catch (error) {
      console.error("Error signing in:", error);
      alert("Email atau password salah!"); 
    }
  };

  const handleCreateAccount = async (e) => {
    e.preventDefault();

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      alert("Akun berhasil dibuat! Silakan login.");
      setIsCreatingAccount(false); // Switch back to login form after account creation
    } catch (error) {
      console.error("Error creating account:", error);
      alert("Terjadi kesalahan, coba lagi nanti."); // General error message
    }
  };

  return (
    <div className="bg-cover h-screen bg-gradient-to-r from-pink-300 to-pink-500 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-4xl font-bold text-center text-gray-700 mb-2">StudyMate</h1>
        <h2 className="text-3xl font-bold text-center text-gray-700 mb-6">
          {isCreatingAccount ? "Create Account" : "Login"}
        </h2>

        <form
          onSubmit={isCreatingAccount ? handleCreateAccount : handleLogin}
          className="space-y-4"
        >
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Masukkan email Anda"
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              required
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-pink-500 focus:outline-none"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Masukkan password Anda"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-pink-500 focus:outline-none"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-pink-600 hover:bg-pink-700 text-white font-bold py-2 rounded-lg transition duration-200"
          >
            {isCreatingAccount ? "Create Account" : "Login"}
          </button>
        </form>

        {/* Toggle between Login and Create Account */}
        <div className="text-center mt-4">
          {isCreatingAccount ? (
            <p>
              Sudah punya akun?{" "}
              <button
                onClick={() => setIsCreatingAccount(false)}
                className="text-pink-600 font-bold"
              >
                Login
              </button>
            </p>
          ) : (
            <p>
              Belum punya akun?{" "}
              <button
                onClick={() => setIsCreatingAccount(true)}
                className="text-pink-600 font-bold"
              >
                Create Account
              </button>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
