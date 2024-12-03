'use client'
import { useState } from 'react';
import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { login, signup, currentUser } = useAuth(); 
    const router = useRouter();
    const [error, setError] = useState(null);
    const [role, setRole] = useState("");

    const handleLoginSubmit = async (e) => {
        e.preventDefault();
        try {
            await login(email, password); 
            role.toLowerCase() === "student" ? router.push('/Student') : router.push('/Instructor'); 
        } catch (err) {
            setError(err.message); 
        }
    };

    const handleSignupSubmit = async (e) => {
        e.preventDefault();
        try {
            await signup(email, password); 
            router.push('/Signup'); 
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
                    {currentUser ? 'Welcome Back!' : 'Login'}
                </h2>
                <form onSubmit={handleLoginSubmit} className="space-y-6">
                    <div>
                        <label className="block text-gray-600 font-medium mb-1">Email</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-indigo-500"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-600 font-medium mb-1">Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-indigo-500"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-600 font-medium mb-1">Student/Teacher</label>
                        <input
                            value={role}
                            onChange={(e) => setRole(e.target.value)}
                            required
                            className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-indigo-500"
                        />
                    </div>
                    {error && <p className="text-red-500 text-sm text-center">{error}</p>}
                    <button type="submit" className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition duration-200">
                        Log In
                    </button>
                </form>
                
                {!currentUser && (
                    <div className="mt-6 text-center">
                        <p className="text-gray-600">Don&apos;t have an account?{' '}
                            <button
                                onClick={() => router.push('/Signup')}
                                className="text-indigo-600 hover:underline font-medium"
                            >
                                Sign Up
                            </button>
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}
