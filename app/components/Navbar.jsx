import Link from "next/link";

const Navbar = () => {
  return (
    <div className="bg-blue-500 shadow-md p-4 flex justify-between items-center">

      <div className="text-2xl font-bold text-white">
        PocketClass
      </div>

    
      <div className="flex space-x-6">
        <Link href="/" className="text-gray-300 hover:text-white">Home</Link>
        <Link href="/Instructor" className="text-gray-300 hover:text-white ">Students</Link>
        <Link href="/Student" className="text-gray-300 hover:text-white ">Instructors</Link>
        <Link href="/Contact" className="text-gray-300 hover:text-white ">Contact</Link>
      </div>

      <div>
        <button className="bg-blue-300 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
        <Link href="/Login" className="text-gray-300 hover:text-white ">Log In/SignUp</Link>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
