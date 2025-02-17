import React, { useState, useEffect } from "react";
import "./imageSlider.css";
import laptop1 from "../../User-images/ImageSlider1.jpg";
import laptop2 from "../../User-images/ImageSlider2.jpg";
import laptop3 from "../../User-images/ImageSlider3.jpg";
import laptop4 from "../../User-images/ImageSlider4.jpg";

function ImageSlider() {
  const [slideIndex, setSlideIndex] = useState(0);

  const slides = [
    {
      id: 1,
      src: laptop1,
      text: "Discover a wide range of laptops suited for all your needs, from powerful gaming machines to sleek business ultrabooks, ensuring you find the perfect fit for both work and play.",
    },
    {
      id: 2,
      src: laptop2,
      text: "At LapTopia, we bring you the best deals on top-rated laptops from trusted brands, ensuring you get the best value for your money with unbeatable offers and reliable performance",
    },
    {
      id: 3,
      src: laptop3,
      text: "Whether you're a student looking for budget-friendly options, a professional needing reliable performance, or a tech enthusiast craving the latest features, we have the perfect laptop for you.",
    },
    {
      id: 4,
      src: laptop4,
      text: "Browse through our extensive laptop categories, featuring everything from budget options to high-end performance machines, and find the perfect device that matches your unique style and performance needs.",
    },
  ];

  const nextSlide = () => {
    setSlideIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setSlideIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const setCurrentSlide = (index) => {
    setSlideIndex(index);
  };

  // Auto Slide Feature
  useEffect(() => {
    const timer = setInterval(nextSlide, 3000); // Change interval to 3000ms for better visibility
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="slideshow-container">
      {slides.map((slide, index) => (
        <div
          className={`mySlides ${index === slideIndex ? "active" : ""}`}
          key={slide.id}
          style={{ position: "relative" }}
        >
          <img
            src={slide.src}
            alt={`Slide ${index + 1}`}
            style={{
              width: "100%",
              height: "480px",
              objectFit: "cover",
              borderRadius: "25px",
            }}
          />
          {/* Text Overlay */}
          <div
            className="text-overlay"
            style={{
              position: "absolute",
              top: "30%",
              left: "35%",
              transform: "translate(-50%, -50%)",
              color: "white",
              fontSize: "24px",
              fontWeight: "bold",
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
            }}
          >
            {slide.text}
          </div>
        </div>
      ))}

      {/* Navigation Buttons */}
      <button className="prev" onClick={prevSlide}>
        &#10094;
      </button>
      <button className="next" onClick={nextSlide}>
        &#10095;
      </button>
    </div>
  );
}

export default ImageSlider;
