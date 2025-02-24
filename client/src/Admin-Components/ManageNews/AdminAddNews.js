import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AdminAddNews.css";

function AdminAddNews() {
  const [formData, setFormData] = useState({
    News_title: "",
    News_description: "",
    News_Details: "",
    News_image_small: null,
    News_image_large: null,
  });

  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate();

  const validateForm = () => {
    const {
      News_title,
      News_description,
      News_Details,
      News_image_small,
      News_image_large,
    } = formData;

    if (
      !News_title ||
      !News_description ||
      !News_Details ||
      !News_image_small ||
      !News_image_large
    ) {
      setError("All fields are required.");
      return false;
    }
    if (
      !(News_image_small instanceof File) ||
      !(News_image_large instanceof File)
    ) {
      setError("Please upload valid image files.");
      return false;
    }
    setError(""); // Clear error if validation passes
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
      const res = await fetch("http://localhost:5000/api/admin/addNewNews", {
        method: "POST",
        credentials: "include",
        body: formDataToSend,
      });

      const data = await res.json();

      if (res.ok) {
        setSuccessMessage("Latest News Added Successfully");

        setFormData({
          News_title: "",
          News_description: "",
          News_Details: "",
          News_image_small: null,
          News_image_large: null,
        });

        setTimeout(() => navigate("/AdminHome"), 1000);
      } else {
        setError(data.message || "Adding Latest News failed. Try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      setError("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="News-form-container min-h-screen flex items-center justify-center py-8 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
      <div className="News-form bg-white shadow-xl rounded-lg w-3/4 sm:w-1/2 md:w-1/3 p-8">
        <h2 className="NewsName">Add The Latest Tech News</h2>
        {error && <p className="error-message">{error}</p>}
        {successMessage && <p className="success-message">{successMessage}</p>}

        <form onSubmit={handleSubmit}>
          <div className="form-outline mb-6">
            <label
              htmlFor="News_title"
              className="form-label text-gray-700 font-medium"
            >
              <b>News Title:</b>
            </label>
            <input
              type="text"
              name="News_title"
              id="News_title"
              onChange={handleChange}
              value={formData.News_title}
              className="form-input p-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 w-full"
              placeholder="Enter the News title"
              autoComplete="off"
              required
            />
          </div>

          <div className="form-outline mb-6">
            <label
              htmlFor="News_description"
              className="form-label text-gray-700 font-medium"
            >
              <b>News Description:</b>
            </label>
            <textarea
              name="News_description"
              id="News_description"
              onChange={handleChange}
              value={formData.News_description}
              className="form-input p-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 w-full"
              placeholder="Enter the News description"
              rows="4"
              required
            ></textarea>
          </div>

          <div className="form-outline mb-6">
            <label
              htmlFor="News_Details"
              className="form-label text-gray-700 font-medium"
            >
              <b>News Details:</b>
            </label>
            <textarea
              name="News_Details"
              id="News_Details"
              onChange={handleChange}
              value={formData.News_Details}
              className="form-input p-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 w-full"
              placeholder="Enter the News Details"
              rows="4"
              required
            ></textarea>
          </div>

          <div className="form-outline mb-6">
            <label
              htmlFor="News_image_small"
              className="form-label text-gray-700 font-medium"
            >
              <b>News Image (Small):</b>
            </label>
            <input
              type="file"
              name="News_image_small"
              id="News_image_small"
              onChange={handleChange}
              className="form-input w-full"
              required
            />
          </div>

          <div className="form-outline mb-6">
            <label
              htmlFor="News_image_large"
              className="form-label text-gray-700 font-medium"
            >
              <b>News Image (Large):</b>
            </label>
            <input
              type="file"
              name="News_image_large"
              id="News_image_large"
              onChange={handleChange}
              className="form-input w-full"
              required
            />
          </div>

          <div className="form-outline mb-6">
            <input
              type="submit"
              className="btn-submit w-full p-4 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold shadow-lg hover:opacity-80 transition-all"
              value="Insert News"
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default AdminAddNews;
