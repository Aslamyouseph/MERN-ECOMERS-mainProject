import React from "react";
import "./AdminAddHowToDo.css";
function AdminAddHowToDo() {
  return (
    <div className="HowToDo-form-container min-h-screen flex items-center justify-center py-8 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
      <div className="HowToDo-form bg-white shadow-xl rounded-lg w-3/4 sm:w-1/2 md:w-1/3 p-8">
        <h2 className=" HowToDoName">Add The Latest HowToDo Something</h2>
        <form action="" method="post" encType="multipart/form-data">
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
              className="form-input p-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 w-full"
              placeholder="Enter the HowToDo title"
              autoComplete="off"
              required
            />
          </div>
          {/*  Description */}
          <div className="form-outline mb-6">
            <label
              htmlFor="description"
              className="form-label text-gray-700 font-medium"
            >
              <b>HowToDo Description:</b>
            </label>
            <textarea
              name="description"
              id="description"
              className="form-input p-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 w-full"
              placeholder="Enter the HowToDo description"
              autoComplete="off"
              rows="4"
              required
            ></textarea>
          </div>

          {/* HowToDo detail */}
          <div className="form-outline mb-6">
            <label
              htmlFor="description"
              className="form-label text-gray-700 font-medium"
            >
              <b>HowToDo Detail:</b>
            </label>
            <textarea
              name="Detail"
              id="Detail"
              className="form-input p-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 w-full"
              placeholder="Enter the HowToDo Detail"
              autoComplete="off"
              rows="4"
              required
            ></textarea>
          </div>

          {/* HowToDo Images */}
          <div className="form-outline mb-6">
            <label
              htmlFor="HowToDo_image"
              className="form-label text-gray-700 font-medium"
            >
              <b>HowToDo Image (small size):</b>
            </label>
            <input
              type="file"
              name="HowToDo_image"
              id="HowToDo_image"
              className="form-input p-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 w-full"
              required
            />
          </div>
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
