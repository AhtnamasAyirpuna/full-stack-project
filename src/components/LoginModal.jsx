import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

export default function LoginModal({ onClose }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, email, password);
            onClose();  // close modal after login
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center">
            <div className="bg-white p-6 rounded-lg w-80">
                <h2 className="text-xl font-bold mb-4">Login</h2>

                {error && <p className="text-red-500 mb-2">{error}</p>}

                <form onSubmit={handleLogin}>
                    <input
                        className="border p-2 w-full mb-3"
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />

                    <input
                        className="border p-2 w-full mb-3"
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />

                    <button className="bg-blue-500 text-white w-full p-2 rounded hover:bg-blue-600">
                        Sign In
                    </button>
                </form>

                <button className="mt-3 text-gray-600 w-full" onClick={onClose}>
                    Close
                </button>
            </div>
        </div>
    );
}
