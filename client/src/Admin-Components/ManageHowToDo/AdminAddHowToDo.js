import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AdminAddHowToDo.css";

function AdminAddHowToDo() {
  const [formData, setFormData] = useState({
    HowToDo_title: "",
    HowToDo_description: "",
    HowToDo_Details: "",
    HowToDo_image_small: null,
    HowToDo_image_large: null,
  });

  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate();

  const validateForm = () => {
    const {
      HowToDo_title,
      HowToDo_description,
      HowToDo_Details,
      HowToDo_image_small,
      HowToDo_image_large,
    } = formData;

    if (
      !HowToDo_title ||
      !HowToDo_description ||
      !HowToDo_Details ||
      !HowToDo_image_small ||
      !HowToDo_image_large
    ) {
      setError("All fields are required.");
      return false;
    }
    if (
      !(HowToDo_image_small instanceof File) ||
      !(HowToDo_image_large instanceof File)
    ) {
      setError("Please upload valid image files.");
      return false;
    }
    setError("");
    return true;
  };

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData({
      ...formData,
      [name]: type === "file" && files.length > 0 ? files[0] : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const formDataToSend = new FormData();
    for (const key in formData) {
      formDataToSend.append(key, formData[key]);
    }

    try {
      const res = await fetch(
        `${process.env.REACT_APP_API_BASE_URL}/api/admin/addNewHowToDo`,
        {
          method: "POST",
          credentials: "include",
          body: formDataToSend,
        }
      );

      const data = await res.json();

      if (res.ok) {
        setSuccessMessage("Latest HowToDo Added Successfully");
        setFormData({
          HowToDo_title: "",
          HowToDo_description: "",
          HowToDo_Details: "",
          HowToDo_image_small: null,
          HowToDo_image_large: null,
        });

        setTimeout(() => navigate("/AdminHome"), 1000);
      } else {
        setError(data.message || "Adding Latest HowToDo failed. Try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      setError("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="HowToDo-form-container min-h-screen flex items-center justify-center py-8 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
      <div className="HowToDo-form bg-white shadow-xl rounded-lg w-3/4 sm:w-1/2 md:w-1/3 p-8">
        <h2 className="HowToDoName">Add The Latest HowToDo Something</h2>
        {error && <p className="error-message">{error}</p>}
        {successMessage && <p className="success-message">{successMessage}</p>}

        <form onSubmit={handleSubmit}>
          {/* HowToDo Title */}
          <div className="form-outline mb-6">
            <label
              htmlFor="HowToDo_title"
              className="form-label text-gray-700 font-medium"
            >
              <b>HowToDo Title:</b>
            </label>
            <input
              type="text"
              name="HowToDo_title"
              id="HowToDo_title"
              onChange={handleChange}
              value={formData.HowToDo_title}
              className="form-input p-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 w-full"
              placeholder="Enter the HowToDo title"
              autoComplete="off"
              required
            />
          </div>

          {/* Description */}
          <div className="form-outline mb-6">
            <label
              htmlFor="HowToDo_description"
              className="form-label text-gray-700 font-medium"
            >
              <b>HowToDo Description:</b>
            </label>
            <textarea
              name="HowToDo_description"
              id="HowToDo_description"
              onChange={handleChange}
              value={formData.HowToDo_description}
              className="form-input p-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 w-full"
              placeholder="Enter the HowToDo description"
              autoComplete="off"
              rows="4"
              required
            ></textarea>
          </div>

          {/* HowToDo Detail */}
          <div className="form-outline mb-6">
            <label
              htmlFor="HowToDo_Details"
              className="form-label text-gray-700 font-medium"
            >
              <b>HowToDo Detail:</b>
            </label>
            <textarea
              name="HowToDo_Details"
              id="HowToDo_Details"
              onChange={handleChange}
              value={formData.HowToDo_Details}
              className="form-input p-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 w-full"
              placeholder="Enter the HowToDo Detail"
              autoComplete="off"
              rows="4"
              required
            ></textarea>
          </div>

          {/* Small Image Upload */}
          <div className="form-outline mb-6">
            <label
              htmlFor="HowToDo_image_small"
              className="form-label text-gray-700 font-medium"
            >
              <b>HowToDo Image (Small size):</b>
            </label>
            <input
              type="file"
              name="HowToDo_image_small"
              id="HowToDo_image_small"
              onChange={handleChange}
              className="form-input p-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 w-full"
              required
            />
          </div>

          {/* Large Image Upload */}
          <div className="form-outline mb-6">
            <label
              htmlFor="HowToDo_image_large"
              className="form-label text-gray-700 font-medium"
            >
              <b>HowToDo Image (Large size):</b>
            </label>
            <input
              type="file"
              name="HowToDo_image_large"
              id="HowToDo_image_large"
              onChange={handleChange}
              className="form-input p-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 w-full"
              required
            />
          </div>

          {/* Submit Button */}
          <div className="form-outline mb-6">
            <input
              type="submit"
              name="insert_HowToDo"
              id="insert_HowToDo"
              className="btn btn-submit w-full p-4 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold shadow-lg hover:opacity-80 transition-all"
              value="Insert HowToDo"
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default AdminAddHowToDo;
