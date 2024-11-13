'use client'
import React from 'react';
import Link from 'next/link';
import { useAuth } from '@/context/AuthContext';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const upcomingSessions = [
  { id: 1, date: '2024-11-15', time: '10:00 AM', student: 'Shatadru Bhattacharya' },
  { id: 2, date: '2024-11-17', time: '2:00 PM', student: 'John Doe' },
];

const InstructorPage = () => {
  const { currentUser, logout } = useAuth();
  const router = useRouter();

 
  useEffect(() => {
      const timer = setTimeout(() => {
          logout(); 
          router.push('/Login'); 
      }, 30 * 60 * 1000); 

      
      return () => clearTimeout(timer);
  }, [currentUser, logout, router]);

  const handleLogout = () => {
      logout();
      router.push('/Login'); 
  };
  if (!currentUser) {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-600 to-blue-500">
            <div className="bg-white p-10 rounded-lg shadow-lg text-center w-full max-w-md">
                <p className="text-gray-800 text-xl font-semibold mb-6">
                    You are not logged in. Please log in.
                </p>
                <button
                    onClick={() => router.push('/Login')}
                    className="bg-purple-600 text-white font-medium py-2 px-6 rounded-full hover:bg-purple-700 transition duration-300 transform hover:scale-105"
                >
                    Go to Login
                </button>
            </div>
        </div>
    );
}

  return (
    <div className="min-h-screen bg-gray-100">
      
      <header className="bg-blue-600 text-white p-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold">PocketClass</div>
          <nav>
            <Link href="/dashboard" className="px-4 hover:underline">Dashboard</Link>
            <Link href="/profile" className="px-4 hover:underline">Profile</Link>
            <Link href="/Login" className="px-4 hover:underline">Logout</Link>
          </nav>
        </div>
      </header>

      
      <div className="max-w-7xl mx-auto p-6">
        <h2 className="text-3xl font-semibold mb-6">Instructor Dashboard</h2>

        
        <section className="mb-8">
          <h3 className="text-2xl font-semibold mb-4">Upcoming Sessions</h3>
          {upcomingSessions.length > 0 ? (
            <div className="space-y-4">
              {upcomingSessions.map((session) => (
                <div key={session.id} className="bg-white p-6 rounded-lg shadow-lg">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-xl font-semibold">{session.student}</p>
                      <p className="text-sm text-gray-500">{session.date} at {session.time}</p>
                    </div>
                    <button className="text-red-500 hover:underline">Cancel Session</button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p>No upcoming sessions.</p>
          )}
        </section>

      
        <section>
          <h3 className="text-2xl font-semibold mb-4">Manage Courses</h3>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <p>Manage your courses and availability for student bookings.</p>
            <button className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700">Create New Course</button>
          </div>
        </section>
      </div>

      
      <footer className="bg-blue-600 text-white p-4 mt-8">
        <div className="max-w-7xl mx-auto text-center">
          <p>&copy; 2024 PocketClass. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default InstructorPage;
