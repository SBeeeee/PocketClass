import React from "react";

const Home = () => {
  return (
    <div className="min-h-screen">
    
      <div className="bg-blue-600 text-white py-20 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">
          Welcome to PocketClass
        </h1>
        <p className="text-lg max-w-2xl mx-auto mb-6">
          Connecting students with top instructors in sports, arts, and music for personalized skill development.
        </p>
        <button className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-full hover:bg-blue-100 transition">
          Get Started
        </button>
      </div>

      
      <section className="py-20 px-6 text-center bg-slate-100">
        <h2 className="text-3xl font-bold text-gray-800 mb-10">
          How PocketClass Works
        </h2>
        <div className="flex flex-col md:flex-row justify-center gap-8 max-w-4xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow-md flex-1 transform hover:scale-105">
            <h3 className="text-xl font-semibold text-blue-600 mb-2  ">1. Find an Instructor</h3>
            <p className="text-gray-700">
              Browse through our list of skilled instructors and find the perfect match for your learning needs.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md flex-1 transform hover:scale-105">
            <h3 className="text-xl font-semibold text-blue-600 mb-2 ">2. Book a Slot</h3>
            <p className="text-gray-700">
              Choose a convenient time slot with your instructor and confirm your booking seamlessly.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md flex-1 transform hover:scale-105">
            <h3 className="text-xl font-semibold text-blue-600 mb-2">3. Start Learning</h3>
            <p className="text-gray-700">
              Join your instructor at the scheduled time and start developing your skills!
            </p>
          </div>
        </div>
      </section>

    
      <section className="bg-blue-50 py-16 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          Ready to Start Your Learning Journey?
        </h2>
        <p className="text-lg text-gray-600 max-w-xl mx-auto mb-6">
          Sign up today and unlock your potential with expert guidance in sports, arts, and music.
        </p>
        <button className="bg-blue-600 text-white font-semibold px-8 py-3 rounded-full hover:bg-blue-700 transition">
          Join PocketClass
        </button>
      </section>
    </div>
  );
};

export default Home;
