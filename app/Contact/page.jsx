

export default function page() {
  return (
    <div>
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-indigo-500 to-teal-400 text-gray-800">
    <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full text-center">
        <h2 className="text-3xl font-bold mb-6 text-indigo-600">Contact Us</h2>
        <p className="mb-8 text-lg text-gray-700">We’d love to hear from you! Please fill out the form below.</p>
        <form className="space-y-6">
            <div>
                <label className="block text-gray-600 font-semibold mb-2">Name</label>
                <input
                    type="text"
                    required
                    className="w-full px-4 py-2 rounded-lg border-2 border-indigo-500 text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="Enter your name"
                />
            </div>
            <div>
                <label className="block text-gray-600 font-semibold mb-2">Email</label>
                <input
                    type="email"
                    required
                    className="w-full px-4 py-2 rounded-lg border-2 border-teal-400 text-gray-800 focus:outline-none focus:ring-2 focus:ring-teal-400"
                    placeholder="Enter your email"
                />
            </div>
            <div>
                <label className="block text-gray-600 font-semibold mb-2">Message</label>
                <textarea
                    required
                    className="w-full px-4 py-2 rounded-lg border-2 border-indigo-500 text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="Write your message here..."
                    rows="4"
                />
            </div>
            <button
                type="submit"
                className="w-full py-3 rounded-full bg-teal-400 text-white font-bold hover:bg-teal-500 transition duration-300"
            >
                Send Message
            </button>
        </form>
    </div>
</div>

    </div>
  )
}
