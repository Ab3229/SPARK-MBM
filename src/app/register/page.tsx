"use client";
import { useState, FormEvent } from "react";
import { ToastContainer, toast } from "react-toastify";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

interface FormData {
  fullName: string;
  branch: string;
  contact: string;
  email: string;
  difficulty: string;
}

export default function RegisterForm() {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    branch: "",
    contact: "",
    email: "",
    difficulty: "Starter",
  });

  const [isLoading, setIsLoading] = useState(false); // State to track loading status

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (localStorage.getItem("contest") === "Spark 2.0") {
      toast("You are already Registered! 🎉");
      return;
    }
    setIsLoading(true);
    try {
      const response = await fetch("/api/submit-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success("Registration Successful! ✅");
        setFormData({
          fullName: "",
          branch: "",
          contact: "",
          email: "",
          difficulty: "Starter",
        });
        localStorage.setItem("contest", "Spark 2.0");
        setIsLoading(false);
      } else {
        alert("❌ Error: " + data.error);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("❌ Error submitting form");
      setFormData({
        fullName: "",
        branch: "",
        contact: "",
        email: "",
        difficulty: "Starter",
      });
      setIsLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900">
      <ToastContainer />
      <div className="w-full max-w-lg p-8 bg-gray-800 bg-opacity-50 backdrop-blur-lg rounded-2xl shadow-xl border border-gray-700">
        <h2 className="text-3xl font-bold text-center text-white mb-6">
          Register for SPARK 🚀
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Full Name */}
          <div>
            <label
              htmlFor="fullName"
              className="block text-gray-300 font-medium"
            >
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              disabled={isLoading} // Disable when loading
              className="mt-2 w-full px-4 py-2  border-gray-600 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500 bg-gray-700 text-white"
              placeholder="Enter your full name"
              required
            />
          </div>

          {/* Branch */}
          <div>
            <label htmlFor="branch" className="block text-gray-300 font-medium">
              Branch (Short Form)
            </label>
            <input
              type="text"
              id="branch"
              name="branch"
              value={formData.branch}
              onChange={handleChange}
              disabled={isLoading} // Disable when loading
              className="mt-2 w-full px-4 py-2  border-gray-600 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500 bg-gray-700 text-white"
              placeholder="e.g., CSE, IT, ECE"
              required
            />
          </div>

          {/* WhatsApp Contact */}
          <div>
            <label
              htmlFor="contact"
              className="block text-gray-300 font-medium"
            >
              WhatsApp Contact
            </label>
            <input
              type="tel"
              id="contact"
              name="contact"
              value={formData.contact}
              onChange={handleChange}
              disabled={isLoading} // Disable when loading
              pattern="[0-9]{10}"
              className="mt-2 w-full px-4 py-2 border-gray-600 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500 bg-gray-700 text-white"
              placeholder="Enter your WhatsApp number"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-gray-300 font-medium">
              Email ID
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              disabled={isLoading} // Disable when loading
              className="mt-2 w-full px-4 py-2 border-gray-600 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500 bg-gray-700 text-white"
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Difficulty Level */}
          <div>
            <label
              htmlFor="difficulty"
              className="block text-gray-300 font-medium"
            >
              Level of Difficulty
            </label>
            <select
              id="difficulty"
              name="difficulty"
              value={formData.difficulty}
              onChange={handleChange}
              disabled={isLoading} // Disable when loading
              className="mt-2 w-full px-4 py-2 border-gray-600 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500 bg-gray-700 text-white"
              required
            >
              <option value="Starter">Starter</option>
              <option value="Challenger">Challenger</option>
              <option value="Pro">Pro</option>
            </select>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 text-lg font-semibold text-gray-900 bg-yellow-500 rounded-lg hover:bg-yellow-400 transition-all duration-300 shadow-md transform hover:scale-105 cursor-pointer"
          >
            {isLoading ? "Registering..." : "Register 🎯"}
          </button>
        </form>
      </div>
    </div>
  );
}
