import React from "react";
import "./AdminAddNews.css";
function AdminAddNews() {
  return (
    <div className="News-form-container min-h-screen flex items-center justify-center py-8 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
      <div className="News-form bg-white shadow-xl rounded-lg w-3/4 sm:w-1/2 md:w-1/3 p-8">
        <h2 className=" NewsName">Add The Latest Tech News</h2>
        <form action="" method="post" encType="multipart/form-data">
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
              className="form-input p-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 w-full"
              placeholder="Enter the News title"
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
              <b>News Description:</b>
            </label>
            <textarea
              name="description"
              id="description"
              className="form-input p-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 w-full"
              placeholder="Enter the News description"
              autoComplete="off"
              rows="4"
              required
            ></textarea>
          </div>

          {/* News detail */}
          <div className="form-outline mb-6">
            <label
              htmlFor="description"
              className="form-label text-gray-700 font-medium"
            >
              <b>News Detail:</b>
            </label>
            <textarea
              name="Detail"
              id="Detail"
              className="form-input p-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 w-full"
              placeholder="Enter the News Detail"
              autoComplete="off"
              rows="4"
              required
            ></textarea>
          </div>

          {/* News Images */}
          <div className="form-outline mb-6">
            <label
              htmlFor="News_image"
              className="form-label text-gray-700 font-medium"
            >
              <b>News Image (small size):</b>
            </label>
            <input
              type="file"
              name="News_image"
              id="News_image"
              className="form-input p-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 w-full"
              required
            />
          </div>
          <div className="form-outline mb-6">
            <label
              htmlFor="News_image_large"
              className="form-label text-gray-700 font-medium"
            >
              <b>News Image (Large size):</b>
            </label>
            <input
              type="file"
              name="News_image_large"
              id="News_image_large"
              className="form-input p-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 w-full"
              required
            />
          </div>

          {/* Submit Button */}
          <div className="form-outline mb-6">
            <input
              type="submit"
              name="insert_News"
              id="insert_News"
              className="btn btn-submit w-full p-4 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold shadow-lg hover:opacity-80 transition-all"
              value="Insert News"
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default AdminAddNews;
