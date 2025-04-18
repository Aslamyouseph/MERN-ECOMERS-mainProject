import React, { useState, useEffect } from "react"; // Import useState and useEffect
import "../ManageLaptop/AddingLaptops/AddingLaptop.css";
import { useNavigate, useParams } from "react-router-dom";

function UpdatingNews() {
  const { id } = useParams(); // Get product ID from the URL
  const navigate = useNavigate();
  const [NewsDetails, setNewsDetails] = useState(null);
  const [formData, setFormData] = useState({
    News_title: "",
    News_description: "",
    News_Details: "",
  });
  const [successMessage, setSuccessMessage] = useState("");
  const [error, setError] = useState("");
  const [imagePreview, setImagePreview] = useState({
    small: null,
    large: null,
  });

  // Fetch News Details on Component Mount
  useEffect(() => {
    const fetchNewsDetails = async () => {
      try {
        const res = await fetch(
          `${process.env.REACT_APP_API_BASE_URL}/api/admin/getNewsDetails/${id}`,
          {
            method: "GET",
            credentials: "include",
          }
        );
        if (!res.ok) throw new Error("Network response was not ok");

        const data = await res.json();
        setNewsDetails(data.NewsDetails);
        setFormData({
          News_title: data.NewsDetails.News_title,
          News_description: data.NewsDetails.News_description,
          News_Details: data.NewsDetails.News_Details,
        });
      } catch (error) {
        console.error("Error fetching news details:", error);
        setError("Something went wrong. Please try again.");
      }
    };

    fetchNewsDetails();
  }, [id]);

  // Handle Input Change
  const handleChange = (e) => {
    const { name, value, type, files } = e.target;

    if (type === "file") {
      const file = files[0];
      if (file) {
        setImagePreview((prev) => ({
          ...prev,
          [name === "News_image_small" ? "small" : "large"]:
            URL.createObjectURL(file),
        }));
      }
    }

    setFormData((prev) => ({
      ...prev,
      [name]: type === "file" ? files[0] : value,
    }));
  };

  // Handle Form Submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataToSend = new FormData();

    // Append all form data to FormData
    for (const key in formData) {
      if (Array.isArray(formData[key])) {
        formData[key].forEach((keyword, index) => {
          formDataToSend.append(`Laptop_keywords[${index}]`, keyword); // Append each keyword separately
        });
      } else {
        formDataToSend.append(key, formData[key]);
      }
    }

    try {
      const res = await fetch(
        `${process.env.REACT_APP_API_BASE_URL}/api/admin/updateNews/${id}`,
        {
          method: "PUT",
          credentials: "include",
          body: formDataToSend,
        }
      );
      if (!res.ok) throw new Error("Failed to update News");

      setSuccessMessage("News updated successfully!");
      setTimeout(() => navigate("/AdminHome"), 2000);
    } catch (error) {
      console.error("Error updating News:", error);
      setError("Failed to update News. Please try again.");
    }
  };

  return (
    <div className="News-form-container min-h-screen flex items-center justify-center py-8 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
      <div className="News-form bg-white shadow-xl rounded-lg w-3/4 sm:w-1/2 md:w-1/3 p-8">
        <h2 className="NewsName">Update The Latest Tech News</h2>{" "}
        {/* Updated title */}
        {error && <p className="error-message">{error}</p>}
        {successMessage && <p className="success-message">{successMessage}</p>}
        {NewsDetails && (
          <form onSubmit={handleSubmit}>
            {/* News Title */}
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

            {/* News Images */}
            <div className="form-outline mb-6">
              <label className="form-label text-gray-700 font-medium">
                <b>News Image (Small):</b>
              </label>
              <input
                type="file"
                name="News_image_small"
                id="News_image_small"
                onChange={handleChange}
                className="form-input p-2 rounded-lg border w-full"
              />
              {imagePreview.small && (
                <img
                  src={imagePreview.small}
                  alt="Preview"
                  className="mt-2 w-32 h-32 object-cover rounded border" // Increased size
                />
              )}
            </div>

            <div className="form-outline mb-6">
              <label className="form-label text-gray-700 font-medium">
                <b>News Image (Large):</b>
              </label>
              <input
                type="file"
                name="News_image_large"
                id="News_image_large"
                onChange={handleChange}
                className="form-input p-2 rounded-lg border w-full"
              />
              {imagePreview.large && (
                <img
                  src={imagePreview.large}
                  alt="Preview"
                  className="mt-2 w-32 h-32 object-cover rounded border" // Increased size
                />
              )}
            </div>
            {/* Submit Button */}
            <div className="form-outline mb-6">
              <input
                type="submit"
                name="Update_News" // Updated name
                id="Update_News" // Updated id
                className="btn btn-submit w-full p-4 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold shadow-lg hover:opacity-80 transition-all"
                value="Update News" // Updated value
              />
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

export default UpdatingNews;
