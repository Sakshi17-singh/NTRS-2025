import { useState } from "react";
import { Header } from "../components/header/Header";
import "./App.css";
import { SignedIn } from "@clerk/clerk-react";
import { FaFacebookF, FaInstagram, FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import SplashScreen from "./pages/SplashScreen"; // ✅ adjust path if needed

function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [footerContent, setFooterContent] = useState(""); // "about" | "contact" | ""

  const handleStart = () => setShowSplash(false);

  if (showSplash) {
    return <SplashScreen onStart={handleStart} />;
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-between">
      {/* Header */}
      <Header setFooterContent={setFooterContent} />

      {/* 👇 Welcome message just below header */}
      <div className="bg-white-50 py-4 shadow-sm">
        <h1 className="text-2xl font-bold text-pink-700 text-center">
          Welcome to Roamio Wanderly! 🌄
        </h1>
        <p className="text-gray-600 text-center text-base mt-1">
          Discover. Explore. Experience the beauty of Nepal.
        </p>
      </div>

      {/* Main content */}
      <SignedIn>
        <div className="max-w-sm mx-auto mt-10 p-6 bg-white rounded-lg shadow-md flex flex-col items-center">
          <h2 className="text-2xl font-semibold text-gray-800">Welcome 💖</h2>
          <p className="text-gray-600 mt-2">Here you go and enjoy! 😉</p>
        </div>
      </SignedIn>

      {/* Footer */}
      <footer className="bg-pink-100 p-6 text-center mt-auto">
        {footerContent === "about" && (
          <div className="text-gray-700 space-y-4">
            <h3 className="text-xl font-semibold">About Roamio Wanderly Travel App 🌄</h3>
            <p>
              Roamio Wanderly is your ultimate travel companion. Discover hidden gems, plan your
              trips, and make unforgettable memories of Nepal.
            </p>
            <ul className="list-disc list-inside">
              <li>Personalized travel recommendations</li>
              <li>Exclusive hotels and travel destinations</li>
              <li>Interactive maps and itineraries</li>
              <li>Community reviews and tips</li>
            </ul>
            <p>Join thousands of travelers and explore the world with Roamio Wanderly! 🌄</p>
          </div>
        )}

        {footerContent === "contact" && (
          <div className="text-gray-700 space-y-4 flex flex-col items-center">
            <h3 className="text-xl font-semibold">Contact Us</h3>
            <p>We’d love to hear from you! Reach us through any of the channels below:</p>
            <a
              href="tel:+977-9861402251"
              className="flex items-center gap-2 px-4 py-2 bg-white rounded shadow hover:bg-pink-50 transition"
            >
              <FaPhoneAlt className="text-pink-600" /> 9861402251
            </a>
            <div className="flex flex-wrap justify-center gap-4 mt-2">
              <a
                href="mailto:contact@mycutu.com"
                className="flex items-center gap-2 px-4 py-2 bg-white rounded shadow hover:bg-pink-50 transition"
              >
                <MdEmail className="text-pink-600" /> Email
              </a>
              <a
                href="https://www.instagram.com/sakshisingh_0817/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-white rounded shadow hover:bg-pink-50 transition"
              >
                <FaInstagram className="text-pink-600" /> Instagram
              </a>
              <a
                href="https://www.facebook.com/sakshi.singh.691437"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-white rounded shadow hover:bg-pink-50 transition"
              >
                <FaFacebookF className="text-pink-600" /> Facebook
              </a>
            </div>
            <p className="mt-2">We’re here to help you plan your dream trips! ⛰️🌄✈️</p>
          </div>
        )}
      </footer>
    </div>
  );
}

export default App;
