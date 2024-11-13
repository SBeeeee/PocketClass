
import "./globals.css";
import { AuthProvider } from "@/context/AuthContext";


export const metadata = {
  title: "PocketClass",
  description: "Get All Your Skills Trained here",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <AuthProvider>
      <body className="bg-slate-500 text-gray-800 min-h-screen">
     
        {children}
      </body>
      </AuthProvider>
    </html>
  );
}
