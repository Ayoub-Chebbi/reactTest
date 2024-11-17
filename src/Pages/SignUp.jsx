import React, { useState } from "react";

const SignUp = () => {
  const [country, setCountry] = useState("");
  const [states, setStates] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    budget: "",
    interests: "",
    state: "",
  });

  const countriesWithStates = {
    Tunisia : ["Ariana", "Béja", "Ben Arous"],
    USA: ["California", "Texas", "New York", "Florida", "Illinois"],
    Canada: ["Ontario", "Quebec", "British Columbia", "Alberta", "Manitoba"],
    India: ["Maharashtra", "Karnataka", "Tamil Nadu", "Gujarat", "West Bengal"],
  };

  const climateInterests = [
    "Renewable Energy",
    "Carbon Offsetting",
    "Sustainable Agriculture",
    "Green Transportation",
    "Eco-Friendly Products",
  ];

  const handleCountryChange = (e) => {
    const selectedCountry = e.target.value;
    setCountry(selectedCountry);
    setStates(countriesWithStates[selectedCountry] || []);
    setFormData({ ...formData, state: "" });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
      <form onSubmit={handleSubmit}>
        {/* Name */}
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border rounded-lg px-3 py-2 focus:ring focus:ring-green-300"
            required
          />
        </div>

        {/* Email */}
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border rounded-lg px-3 py-2 focus:ring focus:ring-green-300"
            required
          />
        </div>

        {/* Password */}
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-gray-700 font-bold mb-2"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full border rounded-lg px-3 py-2 focus:ring focus:ring-green-300"
            required
          />
        </div>

        {/* Budget */}
        <div className="mb-4">
          <label htmlFor="budget" className="block text-gray-700 font-bold mb-2">
            Budget
          </label>
          <input
            type="number"
            id="budget"
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            className="w-full border rounded-lg px-3 py-2 focus:ring focus:ring-green-300"
            required
          />
        </div>

        {/* Interests */}
        <div className="mb-4">
          <label
            htmlFor="interests"
            className="block text-gray-700 font-bold mb-2"
          >
            Interests
          </label>
          <select
            id="interests"
            name="interests"
            value={formData.interests}
            onChange={handleChange}
            className="w-full border rounded-lg px-3 py-2 focus:ring focus:ring-green-300"
            required
          >
            <option value="">Select an interest</option>
            {climateInterests.map((interest) => (
              <option key={interest} value={interest}>
                {interest}
              </option>
            ))}
          </select>
        </div>

        {/* Country */}
        <div className="mb-4">
          <label
            htmlFor="country"
            className="block text-gray-700 font-bold mb-2"
          >
            Country
          </label>
          <select
            id="country"
            name="country"
            value={country}
            onChange={handleCountryChange}
            className="w-full border rounded-lg px-3 py-2 focus:ring focus:ring-green-300"
            required
          >
            <option value="">Select a country</option>
            {Object.keys(countriesWithStates).map((country) => (
              <option key={country} value={country}>
                {country}
              </option>
            ))}
          </select>
        </div>

        {/* State */}
        {states.length > 0 && (
          <div className="mb-4">
            <label
              htmlFor="state"
              className="block text-gray-700 font-bold mb-2"
            >
              State
            </label>
            <select
              id="state"
              name="state"
              value={formData.state}
              onChange={handleChange}
              className="w-full border rounded-lg px-3 py-2 focus:ring focus:ring-green-300"
              required
            >
              <option value="">Select a state</option>
              {states.map((state) => (
                <option key={state} value={state}>
                  {state}
                </option>
              ))}
            </select>
          </div>
        )}

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUp;
