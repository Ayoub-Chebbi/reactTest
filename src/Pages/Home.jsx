import React from 'react';
import img from '../assets/img1.jpeg';
import img2 from '../assets/cit.png';
import img3 from '../assets/img3.jpeg';
import img4 from '../assets/img4.png';
import img5 from '../assets/img5.jpg';
import { Link } from 'react-router-dom';
const Home = () => {
  return (
    <div>
      {/* Navbar */}
<nav className="bg-gray-800 text-white py-4 fixed w-full z-10">
  <div className="container mx-auto flex justify-between items-center px-4">
    <h1 className="text-2xl font-bold">FinancifAI</h1>
    {/* Hamburger Menu */}
    <div className="md:hidden">
      <button
        id="menu-btn"
        className="text-white focus:outline-none"
        onClick={() =>
          document.getElementById('menu').classList.toggle('hidden')
        }
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </button>
    </div>
    {/* Links */}
    <ul
      id="menu"
      className="hidden md:flex space-x-6 items-center"
    >
      <li>
        <a href="#home" className="hover:text-green-400 transition">
          Home
        </a>
      </li>
      <li>
        <a href="#services" className="hover:text-green-400 transition">
          Services
        </a>
      </li>
      <li>
        <a href="#about" className="hover:text-green-400 transition">
          About Us
        </a>
      </li>
      <li>
        <a href="#contact" className="hover:text-green-400 transition">
          Contact
        </a>
      </li>
      <li>
        <Link to="/login" className="hover:text-green-400 transition">
          Log In
        </Link>
      </li>
    </ul>
  </div>
  {/* Mobile Dropdown */}
  <div className="md:hidden">
    <ul
      id="menu-dropdown"
      className="hidden flex flex-col bg-gray-700 px-4 py-2"
    >
      <li className="py-1">
        <a href="#home" className="hover:text-green-400 transition block">
          Home
        </a>
      </li>
      <li className="py-1">
        <a href="#services" className="hover:text-green-400 transition block">
          Services
        </a>
      </li>
      <li className="py-1">
        <a href="#about" className="hover:text-green-400 transition block">
          About Us
        </a>
      </li>
      <li className="py-1">
        <a href="#contact" className="hover:text-green-400 transition block">
          Contact
        </a>
      </li>
      <li className="py-1">
        <Link to="/login" className="hover:text-green-400 transition block">
          Log In
        </Link>
      </li>
    </ul>
  </div>
</nav>


      {/* Hero Section */}
      <section
        id="home"
        className="h-screen flex flex-col justify-center items-center text-center relative text-white"
        style={{
          backgroundImage: `url(${img4})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="bg-black bg-opacity-50 w-full h-full absolute"></div>
        <div className="relative z-10">
          <h1 className="text-5xl md:text-5xl font-bold mb-6">
            Empowering Citizens to Fight Climate Change
          </h1>
          <p className="text-lg md:text-xl mb-8">
            Invest in impactful climate projects for a sustainable future.
          </p>
          <button className="px-6 py-3 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600 transition">
            Get Started
          </button>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>

          {/* Service 1 */}
          <div className="flex flex-col md:flex-row items-center mb-12">
            <div className="md:w-1/2 mb-6 md:mb-0 px-4">
              <h3 className="text-xl font-bold mb-4">Funding Climate Projects</h3>
              <p className="text-gray-600">
                Connect with climate projects needing financial support and monitor their impact.
              </p>
            </div>
            <div className="md:w-1/2 px-4">
              <img
                src={img}
                alt="Funding Climate Projects"
                className="rounded-lg shadow-md w-full object-cover h-80"
              />
            </div>
          </div>

          {/* Service 2 */}
          <div className="flex flex-col md:flex-row-reverse items-center mb-12">
            <div className="md:w-1/2 mb-6 md:mb-0 px-4">
              <h3 className="text-xl font-bold mb-4">Citizen Investment Tools</h3>
              <p className="text-gray-600">
                User-friendly tools to empower individuals to invest in sustainable initiatives.
              </p>
            </div>
            <div className="md:w-1/2 px-4">
              <img
                src={img2}
                alt="Citizen Investment Tools"
                className="rounded-lg shadow-md w-full object-cover h-80"
              />
            </div>
          </div>

          {/* Service 3 */}
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-6 md:mb-0 px-4">
              <h3 className="text-xl font-bold mb-4">Impact Analysis</h3>
              <p className="text-gray-600">
                Track and analyze the positive environmental changes resulting from your investments.
              </p>
            </div>
            <div className="md:w-1/2 px-4">
              <img
                src={img3}
                alt="Impact Analysis"
                className="rounded-lg shadow-md w-full object-cover h-80"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">About Us</h2>
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-6 md:mb-0 px-4">
              <h3 className="text-xl font-bold mb-4">Our Mission</h3>
              <p className="text-gray-600">
                Climate Action Exchange is a platform dedicated to connecting citizens with
                climate-related projects, fostering collaboration for impactful environmental
                change.
              </p>
              <p className="text-gray-600 mt-4">
                Our mission is to provide a transparent and effective way to fight climate change
                through citizen-driven investments.
              </p>
            </div>
            <div className="md:w-1/2 px-4">
              <img
                src={img5}
                alt="About Us"
                className="rounded-lg shadow-md w-full object-cover h-80"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
          <p className="text-lg text-gray-600 mb-6">
            Join us in the fight against climate change. Contact us for partnerships or inquiries.
          </p>
          <form className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md">
            <div className="mb-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-green-300"
              />
            </div>
            <div className="mb-4">
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-green-300"
              />
            </div>
            <div className="mb-4">
              <textarea
                placeholder="Your Message"
                rows="4"
                className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-green-300"
              ></textarea>
            </div>
            <button
              type="submit"
              className="px-6 py-2 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto text-center">
          <p className="text-sm">
            &copy; 2024 FinancifAI. All Rights Reserved. | Empowering Change.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
