import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AddingLaptop.css";
function AddingBudgetLaptops() {
  const [formData, setFormData] = useState({
    Laptop_title: "",
    Laptop_description: "",
    Laptop_Details: "",
    Laptop_keyword1: "",
    Laptop_keyword2: "",
    Laptop_keyword3: "",
    Laptop_keyword4: "",
    Laptop_keyword5: "",
    Laptop_keyword6: "",
    Laptop_keyword7: "",
    Laptop_keyword8: "",
    Laptop_keyword9: "",
    Laptop_keyword10: "",
    Laptop_image_small: null,
    Laptop_image_large: null,
    Laptop_original_price: "",
    Laptop_discount_price: "",
  });
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData({
      ...formData,
      [name]: type === "file" ? files[0] : value,
    });
  };

  const validateForm = () => {
    const {
      Laptop_title,
      Laptop_description,
      Laptop_Details,
      Laptop_image_small,
      Laptop_image_large,
      Laptop_original_price,
      Laptop_discount_price,
    } = formData;

    if (
      !Laptop_title ||
      !Laptop_description ||
      !Laptop_Details ||
      !Laptop_image_small ||
      !Laptop_image_large ||
      !Laptop_original_price ||
      !Laptop_discount_price
    ) {
      setError("All fields are required.");
      return false;
    }

    // Validate prices
    if (isNaN(Laptop_original_price) || isNaN(Laptop_discount_price)) {
      setError("Original and Discount prices must be valid numbers.");
      return false;
    }

    setError(""); // Clear error if validation passes
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return; // Run validation

    const formDataToSend = new FormData();
    for (const key in formData) {
      formDataToSend.append(key, formData[key]);
    }

    // Append keywords as a comma-separated string
    const keywords = [
      formData.Laptop_keyword1,
      formData.Laptop_keyword2,
      formData.Laptop_keyword3,
      formData.Laptop_keyword4,
      formData.Laptop_keyword5,
      formData.Laptop_keyword6,
      formData.Laptop_keyword7,
      formData.Laptop_keyword8,
      formData.Laptop_keyword9,
      formData.Laptop_keyword10,
    ].filter(Boolean); // Filter out empty keywords
    formDataToSend.append("Laptop_keywords", keywords.join(","));

    // Log the FormData contents
    // for (const [key, value] of formDataToSend.entries()) {
    //   console.log(`${key}: ${value}`);
    // }
    // console.log("Laptop_image_small:", formData.Laptop_image_small.name);
    // console.log("Laptop_image_large:", formData.Laptop_image_large.name);

    try {
      // console.log("Control came to here");
      const res = await fetch(
        `${process.env.REACT_APP_API_BASE_URL}/api/admin/addBudgetLaptop`,
        {
          method: "POST",
          credentials: "include",
          body: formDataToSend,
        }
      );
      const data = await res.json();
      // console.log("Control came to here");
      // console.log("data", data);
      if (res.ok) {
        setSuccessMessage("Budget Laptop Added Successfully");
        // Reset form data
        setFormData({
          Laptop_title: "",
          Laptop_description: "",
          Laptop_Details: "",
          Laptop_keyword1: "",
          Laptop_keyword2: "",
          Laptop_keyword3: "",
          Laptop_keyword4: "",
          Laptop_keyword5: "",
          Laptop_keyword6: "",
          Laptop_keyword7: "",
          Laptop_keyword8: "",
          Laptop_keyword9: "",
          Laptop_keyword10: "",
          Laptop_image_small: null,
          Laptop_image_large: null,
          Laptop_original_price: "",
          Laptop_discount_price: "",
        });
        setTimeout(() => navigate("/AdminHome"), 1000);
      } else {
        setError(data.message || "Budget Laptop Adding failed. Try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      setError("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="laptop-form-container min-h-screen flex items-center justify-center py-8 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
      <div className="laptop-form bg-white shadow-xl rounded-lg w-3/4 sm:w-1/2 md:w-1/3 p-8">
        <h2 className="laptopName">Add the Latest Budget Laptops</h2>
        {error && <p className="error-message">{error}</p>}
        {successMessage && <p className="success-message">{successMessage}</p>}
        <form onSubmit={handleSubmit}>
          {/* Laptop Title */}
          <div className="form-outline mb-6">
            <label
              htmlFor="Laptop_title"
              className="form-label text-gray-700 font-medium"
            >
              <b>Laptop Title:</b>
            </label>
            <input
              type="text"
              name="Laptop_title"
              id="Laptop_title"
              onChange={handleChange}
              value={formData.Laptop_title}
              className="form-input p-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 w-full"
              placeholder="Enter the Laptop title"
              autoComplete="off"
              required
            />
          </div>

          {/* Description */}
          <div className="form-outline mb-6">
            <label
              htmlFor="Laptop_description"
              className="form-label text-gray-700 font-medium"
            >
              <b>Laptop Description:</b>
            </label>
            <textarea
              name="Laptop_description"
              id="Laptop_description"
              onChange={handleChange}
              value={formData.Laptop_description}
              className="form-input p-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 w-full"
              placeholder="Enter the Laptop description"
              autoComplete="off"
              rows="4"
              required
            ></textarea>
          </div>

          {/* Details */}
          <div className="form-outline mb-6">
            <label
              htmlFor="Laptop_Details"
              className="form-label text-gray-700 font-medium"
            >
              <b>Laptop Details:</b>
            </label>
            <textarea
              name="Laptop_Details"
              id="Laptop_Details"
              onChange={handleChange}
              value={formData.Laptop_Details}
              className="form-input p-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 w-full"
              placeholder="Enter the Laptop Details"
              autoComplete="off"
              rows="4"
              required
            ></textarea>
          </div>

          {/* Keywords */}
          {Array.from({ length: 10 }, (_, index) => (
            <div key={index}>
              <label
                htmlFor={`Laptop_keyword${index + 1}`}
                className="form-label"
              >
                Product Keywords ({index + 1}):
              </label>
              <input
                type="text"
                name={`Laptop_keyword${index + 1}`}
                id={`Laptop_keyword${index + 1}`}
                onChange={handleChange}
                value={formData[`Laptop_keyword${index + 1}`]}
                className="form-control"
                placeholder={`Enter the keyword ${index + 1}`}
                autoComplete="off"
              />
            </div>
          ))}

          {/* Laptop Images */}
          <div className="form-outline mb-6">
            <label
              htmlFor="Laptop_image_small"
              className="form-label text-gray-700 font-medium"
            >
              <b>Laptop Image (small size):</b>
            </label>
            <input
              type="file"
              name="Laptop_image_small"
              id="Laptop_image_small"
              onChange={handleChange}
              className="form-input p-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 w-full"
              required
            />
          </div>
          <div className="form-outline mb-6">
            <label
              htmlFor="Laptop_image_large"
              className="form-label text-gray-700 font-medium"
            >
              <b>Laptop Image (Large size):</b>
            </label>
            <input
              type="file"
              name="Laptop_image_large"
              id="Laptop_image_large"
              onChange={handleChange}
              className="form-input p-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 w-full"
              required
            />
          </div>

          {/* Pricing */}
          <div className="form-outline mb-6">
            <label
              htmlFor="Laptop_original_price"
              className="form-label text-gray-700 font-medium"
            >
              <b>Original Price:</b>
            </label>
            <input
              type="text"
              name="Laptop_original_price"
              id="Laptop_original_price"
              onChange={handleChange}
              value={formData.Laptop_original_price}
              className="form-input p-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 w-full"
              placeholder="Enter the original price of the Laptop"
              autoComplete="off"
              required
            />
          </div>
          <div className="form-outline mb-6">
            <label
              htmlFor="Laptop_discount_price"
              className="form-label text-gray-700 font-medium"
            >
              <b>Discount Price:</b>
            </label>
            <input
              type="text"
              name="Laptop_discount_price"
              id="Laptop_discount_price"
              onChange={handleChange}
              value={formData.Laptop_discount_price}
              className="form-input p-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 w-full"
              placeholder="Enter the discount price of the Laptop"
              autoComplete="off"
              required
            />
          </div>

          {/* Submit Button */}
          <div className="form-outline mb-6">
            <input
              type="submit"
              name="insert_Laptop"
              id="insert_Laptop"
              className="btn btn-submit w-full p-4 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold shadow-lg hover:opacity-80 transition-all"
              value="Insert Laptop"
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddingBudgetLaptops;
