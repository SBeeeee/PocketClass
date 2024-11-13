'use client'
import { useState } from 'react';
import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';

export default function Signup() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const { signup } = useAuth(); 
    const router = useRouter();
    const [error, setError] = useState(null);
    const [role,setRole]=useState();
    const handleSignupSubmit = async (e) => {
        e.preventDefault();
        
        
        if (password !== confirmPassword) {
            setError("Passwords don't match");
            return;
        }

        try {
            await signup(email, password); 
            role.toLowerCase() == "student" ?router.push('/Student'):router.push('/Instructor'); 
        } catch (err) {
            setError(err.message); 
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
    <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">Sign Up</h2>
        <form onSubmit={handleSignupSubmit} className="space-y-6">
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
                <label className="block text-gray-600 font-medium mb-1">Confirm Password</label>
                <input
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                    className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-indigo-500"
                />
            </div>
            <label className="block text-gray-600 font-medium mb-1">Student/Teacher</label>
                <input
                        value={role}
                        onChange={(e) => setRole(e.target.value)}
                        required
                        className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-indigo-500"
                    />
            {error && <p className="text-red-500 text-sm text-center">{error}</p>}
            <button type="submit" className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition duration-200">
                Sign Up
            </button>
        </form>
    </div>
</div>

    );
}
