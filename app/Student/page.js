'use client';
import React from 'react';
import Link from 'next/link';
import { useAuth } from '@/context/AuthContext';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
// Sample data for upcoming sessions and instructors
const upcomingSessions = [
  { id: 1, date: '2024-11-15', time: '10:00 AM', instructor: 'Sams Mulan' },
  { id: 2, date: '2024-11-17', time: '2:00 PM', instructor: 'John Doe' },
];

const instructors = [
  { id: 1, name: 'Sams Mulan', profilePicture: '/images/Sama.jpg', expertise: 'Music' },
  { id: 2, name: 'John Doe', profilePicture: '/images/john.jpg', expertise: 'Sports' },
  { id: 3, name: 'Alice Smith', profilePicture: '/images/alice.jpg', expertise: 'Art' },
 
];

const StudentPage = () => {

  const { currentUser, logout } = useAuth();
  const router = useRouter();

  // Auto-logout after a specified time (e.g., 30 minutes)
  useEffect(() => {
      const timer = setTimeout(() => {
          logout(); // Automatically log out the user after 30 minutes
          router.push('/login'); // Redirect to the login page after logout
      }, 30 * 60 * 1000); // 30 minutes in milliseconds

      // Cleanup the timer if the component unmounts
      return () => clearTimeout(timer);
  }, [currentUser, logout, router]);

  const handleLogout = () => {
      logout();
      router.push('/Login'); // Redirect to the login page after logout
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
      {/* Header */}
      <header className="bg-blue-600 text-white p-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold">PocketClass</div>
          <nav>
            <Link href="/dashboard" className="px-4 hover:underline">Dashboard</Link>
            <Link href="/profile" className="px-4 hover:underline">Profile</Link>
            <button href="/Login" className="px-4 hover:underline" onClick={handleLogout}>Logout</button>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto p-6">
        <h2 className="text-3xl font-semibold mb-6">Welcome</h2>

        {/* Upcoming Sessions Section */}
        <section className="mb-8">
          <h3 className="text-2xl font-semibold mb-4">Upcoming Sessions</h3>
          {upcomingSessions.length > 0 ? (
            <div className="space-y-4">
              {upcomingSessions.map((session) => (
                <div key={session.id} className="bg-white p-6 rounded-lg shadow-lg">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-xl font-semibold">{session.instructor}</p>
                      <p className="text-sm text-gray-500">{session.date} at {session.time}</p>
                    </div>
                    <button className="text-blue-500 hover:underline">Cancel</button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p>No upcoming sessions.</p>
          )}
        </section>

        {/* Available Instructors Section */}
        <section className="mb-8">
          <h3 className="text-2xl font-semibold mb-4">Available Instructors</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {instructors.map((instructor) => (
              <div key={instructor.id} className="bg-white p-6 rounded-lg shadow-lg">
                <img
                  src={instructor.profilePicture}
                  alt={instructor.name}
                  className="w-32 h-32 rounded-full mb-4 mx-auto"
                />
                <h4 className="text-xl font-semibold text-center">{instructor.name}</h4>
                <p className="text-sm text-gray-500 text-center">{instructor.expertise}</p>
                <div className="mt-4 text-center">
                  <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700">
                    Book Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-blue-600 text-white p-4 mt-8">
        <div className="max-w-7xl mx-auto text-center">
          <p>&copy; 2024 PocketClass. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default StudentPage;
