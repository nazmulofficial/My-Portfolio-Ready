import { Inter } from "next/font/google";
import "./globals.css";
// Fixed import path: Using relative path because Navbar is located in src/app/components/Navbar
import Navbar from "./components/Navbar";
import Footer from "./components/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Nazmul Hossain - Portfolio",
  description: "Freelance Graphic Designer & Web Developer",
};

export default function RootLayout({ children }) {
  return (
    // Set default dark theme for DaisyUI on the root HTML tag
    <html lang="en" data-theme="dark">
      <body className={`${inter.className} bg-base-100 text-base-content transition-colors duration-300`}>
        {/* Global Navigation Bar */}
        <Navbar />
        {/* Main page content container */}
        <main>{children}</main>
        <Footer/>
      </body>
    </html>
  );
}