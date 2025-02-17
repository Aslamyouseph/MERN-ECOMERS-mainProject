import "./productDetails.css";
import image from "../User-images/ProductDetails1.jpg";

export default function ProductPage() {
  return (
    <div className="container">
      <br />
      {/* Product Section */}
      <section className="product-section">
        {/* Left Side - Images */}
        <div className="image-container">
          <img src={image} alt="LapTop image" className="featured-image" />
        </div>

        {/* Right Side - Product Details */}
        <div className="details-container">
          <h3 className="product-title">Lenovo Legion 5</h3>
          <h5 className="price">
            Price: $45999 <del className="original-price">$50000</del>
          </h5>
          <p className="description">
            The Lenovo Legion 5 is a powerful gaming laptop designed for
            performance and efficiency. It features AMD Ryzen or Intel Core
            processors, NVIDIA GeForce RTX graphics, and a high-refresh-rate
            display for smooth gameplay. With a sleek design, customizable RGB
            keyboard, and advanced cooling system, the Legion 5 is ideal for
            gamers and content creators. It also offers ample RAM, fast SSD
            storage, and immersive audio, making it a well-balanced choice for
            gaming and productivity.
          </p>

          {/*  Cart Button */}
          <div className="quantity-container">
            <button className="add-to-cart">Add to Cart</button>
          </div>

          <div className="delivery-info">
            <h4 className="delivery-title"> Key specifications:</h4>

            <div className="delivery-options">
              <div className="delivery-row">
                <span> Processor</span>
                <span>AMD Ryzen 5 5600H / Ryzen 7 5800H</span>
              </div>
              <div className="delivery-row">
                <span> Graphics (GPU)</span>
                <span>NVIDIA GeForce GTX 1650 (Entry-level)</span>
              </div>
              <div className="delivery-row">
                <span> Display</span>
                <span>120Hz / 144Hz / 165Hz refresh rate</span>
              </div>
              <div className="delivery-row">
                <span> Memory (RAM)</span>
                <span>8GB / 16GB / 32GB DDR4 (expandable up to 32GB)</span>
              </div>
              <div className="delivery-row">
                <span> Storage</span>
                <span>512GB / 1TB NVMe SSD</span>
              </div>
              <div className="delivery-row">
                <span>Keyboard</span>
                <span>1.5mm key travel, anti-ghosting</span>
              </div>
              <div className="delivery-row">
                <span> Battery</span>
                <span>60Wh / 80Wh battery</span>
              </div>
              <div className="delivery-row">
                <span> Cooling System</span>
                <span>
                  Legion Coldfront 3.0 with dual fans and multiple vents
                </span>
              </div>
              <div className="delivery-row">
                <span> Ports & Connectivity</span>
                <span>USB-C, USB-A, HDMI 2.1, Ethernet, 3.5mm jack</span>
              </div>
              <div className="delivery-row">
                <span> Operating System</span>
                <span>Windows 10 / Windows 11</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <br />
    </div>
  );
}
