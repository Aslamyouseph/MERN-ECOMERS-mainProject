import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../AddingLaptops/AddingLaptop.css";

function TwoInOneLaptopUpdating() {
  const { id } = useParams(); // Get product ID from the URL
  const navigate = useNavigate();
  const [laptopDetails, setLaptopDetails] = useState(null);
  const [formData, setFormData] = useState({
    Laptop_title: "",
    Laptop_description: "",
    Laptop_Details: "",
    Laptop_keywords: Array(10).fill(""), // Initialize an array for keywords
    Laptop_original_price: "",
    Laptop_discount_price: "",
  });
  const [successMessage, setSuccessMessage] = useState("");
  const [error, setError] = useState("");
  const [imagePreview, setImagePreview] = useState({
    small: null,
    large: null,
  });

  // Fetch Laptop Details on Component Mount
  useEffect(() => {
    const fetchLaptopDetails = async () => {
      try {
        const res = await fetch(
          `http://localhost:5000/api/admin/getTwoInOneLaptopDetails/${id}`,
          {
            method: "GET",
            credentials: "include",
          }
        );
        if (!res.ok) throw new Error("Network response was not ok");

        const data = await res.json();
        setLaptopDetails(data.laptopDetails);
        setFormData({
          Laptop_title: data.laptopDetails.Laptop_title,
          Laptop_description: data.laptopDetails.Laptop_description,
          Laptop_Details: data.laptopDetails.Laptop_Details,
          Laptop_keywords:
            data.laptopDetails.Laptop_keywords || Array(10).fill(""), // Ensure it's an array
          Laptop_original_price: data.laptopDetails.Laptop_original_price,
          Laptop_discount_price: data.laptopDetails.Laptop_discount_price,
        });
      } catch (error) {
        console.error("Error fetching laptop details:", error);
        setError("Something went wrong. Please try again.");
      }
    };

    fetchLaptopDetails();
  }, [id]);

  // Handle Input Change
  const handleChange = (e) => {
    const { name, value, type, files } = e.target;

    if (name.startsWith("Laptop_keywords")) {
      const index = parseInt(name.replace("Laptop_keywords", "")) - 1; // Get the index from the name
      setFormData((prev) => {
        const updatedKeywords = [...prev.Laptop_keywords];
        updatedKeywords[index] = value; // Update the specific keyword
        return { ...prev, Laptop_keywords: updatedKeywords };
      });
      return; // Exit early to avoid the rest of the function
    }

    if (type === "file") {
      const file = files[0];
      if (file) {
        setImagePreview((prev) => ({
          ...prev,
          [name === "Laptop_image_small" ? "small" : "large"]:
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
        `http://localhost:5000/api/admin/updateTwoInOneLaptops/${id}`,
        {
          method: "PUT",
          credentials: "include",
          body: formDataToSend,
        }
      );
      if (!res.ok) throw new Error("Failed to update laptop");

      setSuccessMessage("Laptop updated successfully!");
      setTimeout(() => navigate("/AdminHome"), 2000);
    } catch (error) {
      console.error("Error updating laptop:", error);
      setError("Failed to update laptop. Please try again.");
    }
  };

  return (
    <div className="laptop-form-container min-h-screen flex items-center justify-center py-8 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
      <div className="laptop-form bg-white shadow-xl rounded-lg w-3/4 sm:w-1/2 md:w-1/3 p-8">
        <h2 className="laptopName">Update Two-In-One Laptops </h2>
        {error && <p className="error-message">{error}</p>}
        {successMessage && <p className="success-message">{successMessage}</p>}

        {laptopDetails && (
          <form onSubmit={handleSubmit}>
            {/* Laptop Title */}
            <div className="form-outline mb-6">
              <label className="form-label text-gray-700 font-medium">
                <b>Laptop Title:</b>
              </label>
              <input
                type="text"
                name="Laptop_title"
                onChange={handleChange}
                value={formData.Laptop_title}
                className="form-input p-4 rounded-lg border w-full"
                placeholder="Enter Laptop title"
                required
              />
            </div>

            {/* Description */}
            <div className="form-outline mb-6">
              <label className="form-label text-gray-700 font-medium">
                <b>Laptop Description:</b>
              </label>
              <textarea
                name="Laptop_description"
                onChange={handleChange}
                value={formData.Laptop_description}
                className="form-input p-4 rounded-lg border w-full"
                placeholder="Enter Laptop description"
                rows="4"
                required
              ></textarea>
            </div>

            {/* Details */}
            <div className="form-outline mb-6">
              <label className="form-label text-gray-700 font-medium">
                <b>Laptop Details:</b>
              </label>
              <textarea
                name="Laptop_Details"
                onChange={handleChange}
                value={formData.Laptop_Details}
                className="form-input p-4 rounded-lg border w-full"
                placeholder="Enter Laptop Details"
                rows="4"
                required
              ></textarea>
            </div>

            {/* Keywords */}
            {Array.from({ length: 10 }, (_, index) => (
              <div key={index}>
                <label className="form-label">
                  Product Keywords ({index + 1}):
                </label>
                <input
                  type="text"
                  name={`Laptop_keywords${index + 1}`} // This can remain the same
                  onChange={handleChange}
                  value={formData.Laptop_keywords[index] || ""} // Access the array correctly
                  className="form-control"
                  placeholder={`Enter keyword ${index + 1}`}
                />
              </div>
            ))}

            {/* Laptop Images */}
            <div className="form-outline mb-6">
              <label className="form-label text-gray-700 font-medium">
                <b>Laptop Image (small size):</b>
              </label>
              <input
                type="file"
                name="Laptop_image_small"
                onChange={handleChange}
                className="form-input p-2 rounded-lg border w-full"
              />
              {imagePreview.small && (
                <img
                  src={imagePreview.small}
                  alt="Preview"
                  className="mt-2 w-8 h-8 object-cover rounded border"
                />
              )}
            </div>

            <div className="form-outline mb-6">
              <label className="form-label text-gray-700 font-medium">
                <b>Laptop Image (large size):</b>
              </label>
              <input
                type="file"
                name="Laptop_image_large"
                onChange={handleChange}
                className="form-input p-2 rounded-lg border w-full"
              />
              {imagePreview.large && (
                <img
                  src={imagePreview.large}
                  alt="Preview"
                  className="mt-2 w-1 h-1 object-cover rounded border"
                />
              )}
            </div>

            {/* Pricing */}
            <div className="form-outline mb-6">
              <label className="form-label text-gray-700 font-medium">
                <b>Original Price:</b>
              </label>
              <input
                type="text"
                name="Laptop_original_price"
                onChange={handleChange}
                value={formData.Laptop_original_price}
                className="form-input p-4 rounded-lg border w-full"
                required
              />
            </div>
            {/* Pricing */}
            <div className="form-outline mb-6">
              <label className="form-label text-gray-700 font-medium">
                <b>Discount Price:</b>
              </label>
              <input
                type="text"
                name="Laptop_discount_price"
                onChange={handleChange}
                value={formData.Laptop_discount_price}
                className="form-input p-4 rounded-lg border w-full"
                required
              />
            </div>

            {/* Submit Button */}
            <div className="form-outline mb-6">
              <input
                type="submit"
                name="Update_Laptop"
                id="Update_Laptop"
                className="btn btn-submit w-full p-4 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold shadow-lg hover:opacity-80 transition-all"
                value="Update Laptop"
              />
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

export default TwoInOneLaptopUpdating;
