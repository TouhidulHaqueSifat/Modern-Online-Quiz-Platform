import { useState } from "react";
import { Link } from "react-router";

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="border-b sticky top-0 z-50 bg-white">
      <div className="max-w-[1280px] mx-auto flex h-16 items-center justify-between px-6">

        {/* Logo */}
        <Link
          to="/"
          className="text-[24px] font-bold text-[#4338CA] leading-8"
        >
          CognitiveFlow
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6">
          <Link to="/" className="hover:text-indigo-600">Feature</Link>
          <Link to="/" className="hover:text-indigo-600">Pricing</Link>
          <Link to="/" className="hover:text-indigo-600">About</Link>
        </nav>

        {/* Desktop Buttons */}
        <div className="hidden md:flex gap-4 items-center">
          <Link to="/login" className="hover:text-indigo-600">Login</Link>
          <Link
            to="/"
            className="bg-indigo-600 text-white px-4 py-2 rounded-[50px]"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden px-6 pb-4 flex flex-col gap-4">
          <Link to="/">Feature</Link>
          <Link to="/">Pricing</Link>
          <Link to="/">About</Link>
          <Link to="/login">Login</Link>
          <Link
            to="/"
            className="bg-indigo-600 text-white px-4 py-2 rounded-lg"
          >
            Get Started
          </Link>
        </div>
      )}
    </header>
  );
}