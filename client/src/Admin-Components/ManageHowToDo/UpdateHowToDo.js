import React, { useState, useEffect } from "react"; // Import useState and useEffect
import "../ManageLaptop/AddingLaptops/AddingLaptop.css";
import { useNavigate, useParams } from "react-router-dom";

function UpdateHowToDo() {
  const { id } = useParams(); // Get HowToDo ID from the URL
  const navigate = useNavigate();
  const [HowToDODetails, setHowToDoDetails] = useState(null);
  const [formData, setFormData] = useState({
    HowToDo_title: "",
    HowToDo_description: "",
    HowToDo_Details: "",
  });
  const [successMessage, setSuccessMessage] = useState("");
  const [error, setError] = useState("");
  const [imagePreview, setImagePreview] = useState({
    small: null,
    large: null,
  });

  // Fetch HowToDo Details on Component Mount
  useEffect(() => {
    const fetchHowToDoDetails = async () => {
      try {
        const res = await fetch(
          `${process.env.REACT_APP_API_BASE_URL}/api/admin/getHowToDoDetails/${id}`,
          {
            method: "GET",
            credentials: "include",
          }
        );
        if (!res.ok) throw new Error("Network response was not ok");

        const data = await res.json();
        setHowToDoDetails(data.HowToDODetails);
        setFormData({
          HowToDo_title: data.HowToDODetails.HowToDo_title,
          HowToDo_description: data.HowToDODetails.HowToDo_description,
          HowToDo_Details: data.HowToDODetails.HowToDo_Details,
        });
      } catch (error) {
        console.error("Error fetching HowToDo details:", error);
        setError("Something went wrong. Please try again.");
      }
    };

    fetchHowToDoDetails();
  }, [id]);

  // Handle Input Change
  const handleChange = (e) => {
    const { name, value, type, files } = e.target;

    if (type === "file") {
      const file = files[0];
      if (file) {
        setImagePreview((prev) => ({
          ...prev,
          [name === "HowToDo_image_small" ? "small" : "large"]:
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
      formDataToSend.append(key, formData[key]);
    }

    try {
      const res = await fetch(
        `${process.env.REACT_APP_API_BASE_URL}/api/admin/updateHowToDo/${id}`,
        {
          method: "PUT",
          credentials: "include",
          body: formDataToSend,
        }
      );
      if (!res.ok) throw new Error("Failed to update HowToDo");

      setSuccessMessage("HowToDo updated successfully!");
      setTimeout(() => navigate("/AdminHome"), 2000);
    } catch (error) {
      console.error("Error updating HowToDo:", error);
      setError("Failed to update HowToDo. Please try again.");
    }
  };

  return (
    <div className="HowToDo-form-container min-h-screen flex items-center justify-center py-8 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
      <div className="HowToDo-form bg-white shadow-xl rounded-lg w-3/4 sm:w-1/2 md:w-1/3 p-8">
        <h2 className="HowToDoName">Update The Latest Tech HowToDo</h2>
        {error && <p className="error-message">{error}</p>}
        {successMessage && <p className="success-message">{successMessage}</p>}
        {HowToDODetails && (
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
                required
              />
            </div>

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
                rows="4"
                required
              ></textarea>
            </div>

            <div className="form-outline mb-6">
              <label
                htmlFor="HowToDo_Details"
                className="form-label text-gray-700 font-medium"
              >
                <b>HowToDo Details:</b>
              </label>
              <textarea
                name="HowToDo_Details"
                id="HowToDo_Details"
                onChange={handleChange}
                value={formData.HowToDo_Details}
                className="form-input p-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 w-full"
                placeholder="Enter the HowToDo Details"
                rows="4"
                required
              ></textarea>
            </div>

            {/* HowToDo Images */}
            <div className="form-outline mb-6">
              <label className="form-label text-gray-700 font-medium">
                <b>HowToDo Image (Small):</b>
              </label>
              <input
                type="file"
                name="HowToDo_image_small"
                id="HowToDo_image_small"
                onChange={handleChange}
                className="form-input p-2 rounded-lg border w-full"
              />
              {imagePreview.small && (
                <img
                  src={imagePreview.small}
                  alt="Preview"
                  className="mt-2 w-32 h-32 object-cover rounded border"
                />
              )}
            </div>

            <div className="form-outline mb-6">
              <label className="form-label text-gray-700 font-medium">
                <b>HowToDo Image (Large):</b>
              </label>
              <input
                type="file"
                name="HowToDo_image_large"
                id="HowToDo_image_large"
                onChange={handleChange}
                className="form-input p-2 rounded-lg border w-full"
              />
              {imagePreview.large && (
                <img
                  src={imagePreview.large}
                  alt="Preview"
                  className="mt-2 w-32 h-32 object-cover rounded border"
                />
              )}
            </div>
            {/* Submit Button */}
            <div className="form-outline mb-6">
              <input
                type="submit"
                name="Update_HowToDo"
                id="Update_HowToDo"
                className="btn btn-submit w-full p-4 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold shadow-lg hover:opacity-80 transition-all"
                value="Update HowToDo"
              />
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

export default UpdateHowToDo;
