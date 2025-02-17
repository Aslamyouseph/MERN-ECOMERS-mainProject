import React from "react";
import "./AddingLaptop.css"; // Ensure your custom styles are added here

function AddingGamingLaptops() {
  return (
    <div className="laptop-form-container min-h-screen flex items-center justify-center py-8 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
      <div className="laptop-form bg-white shadow-xl rounded-lg w-3/4 sm:w-1/2 md:w-1/3 p-8">
        <h2 className=" laptopName">Add the Latest Gaming Laptops</h2>
        <form action="" method="post" encType="multipart/form-data">
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
              className="form-input p-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 w-full"
              placeholder="Enter the Laptop title"
              autoComplete="off"
              required
            />
          </div>

          {/* Description */}
          <div className="form-outline mb-6">
            <label
              htmlFor="description"
              className="form-label text-gray-700 font-medium"
            >
              <b>Laptop Description:</b>
            </label>
            <textarea
              name="description"
              id="description"
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
              htmlFor="Details"
              className="form-label text-gray-700 font-medium"
            >
              <b>Laptop Details:</b>
            </label>
            <textarea
              name="Details"
              id="Details"
              className="form-input p-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 w-full"
              placeholder="Enter the Laptop Details"
              autoComplete="off"
              rows="4"
              required
            ></textarea>
          </div>

          {/* Keywords */}
          {Array.from({ length: 10 }, (_, index) => (
            <div key={index} className="form-outline mb-6">
              <label
                htmlFor={`keyword${index + 1}`}
                className="form-label text-gray-700 font-medium"
              >
                <b>Laptop Keyword </b>({index + 1}):
              </label>
              <input
                type="text"
                name={`keyword${index + 1}`}
                id={`keyword${index + 1}`}
                className="form-input p-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 w-full"
                placeholder={`Enter the ${index + 1} Laptop keyword`}
                autoComplete="off"
                required
              />
            </div>
          ))}

          {/* Laptop Images */}
          <div className="form-outline mb-6">
            <label
              htmlFor="Laptop_image"
              className="form-label text-gray-700 font-medium"
            >
              <b>Laptop Image (small size):</b>
            </label>
            <input
              type="file"
              name="Laptop_image"
              id="Laptop_image"
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

export default AddingGamingLaptops;
