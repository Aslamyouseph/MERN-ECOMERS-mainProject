import React from "react";
import "./footer.css";
import { Link } from "react-router-dom"; // This is used to enable routing in react example (http://localhost:3000/page1)

function Footer() {
  return (
    <div className="footer-full">
      <footer>
        <div className="up-section">
          <ul>
            <h1>Quick Links</h1>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/news">News</Link>
            </li>
            <li>
              <Link to="/HowToDO">How To</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/ContactUs">Contact Us</Link>
            </li>
          </ul>
          <ul>
            <h1>Services</h1>
            <li>
              <Link to="/news">Latest News</Link>
            </li>
            <li>
              <Link to="/Return&Refund">Return & Refunds policies</Link>
            </li>
          </ul>
          <ul>
            <h1>Contact Us</h1>
            <li>
              <p>Lappora 114 Fifth Avenue</p>
            </li>
            <li>
              <p>H.NO. B-23 F/F BLOCK-B</p>
            </li>
            <li>
              <p>SECTOR-12 , 5th Floor </p>
            </li>
            <li>
              <p>Techno Park kerala india</p>
            </li>
          </ul>
        </div>
        <div className="down-section">
          <ul>
            <h1>Explore</h1>
            <li>
              <Link to="/gamingLaptops">Gaming Laptops</Link>
            </li>
            <li>
              <Link to="/BusinessLaptops">Business Laptops</Link>
            </li>
            <li>
              <Link to="/BudgetLaptops">Budget Laptops</Link>
            </li>
            <li>
              <Link to="/StudentLaptops">Student Laptops</Link>
            </li>
            <li>
              <Link to="/Tablets">Who need tablets</Link>
            </li>
            <li>
              <Link to="/TwoInOne">2 in one</Link>
            </li>
          </ul>
          <ul>
            <h1>Brands</h1>
            <li>
              <a href="https://www.hp.com/in-en/shop/?optly_qa_cookie=optly_hp_test&gclid=SEM&gclsrc=3p.ds&msclkid=e51dfcb45c4d1ebe79439a1e7d0b9088&utm_source=bing&utm_medium=cpc&utm_campaign=IN%20-%20HPCOM%7CHPStore%7CHHO%7CHome%26HomeOffice%7CIN%7CBrand%7CExact%7CEN%7C%20(Always-On)&utm_term=h%20h%20p&utm_content=Generic%20EM">
                HP
              </a>
            </li>
            <li>
              <a href="https://www.dell.com/en-in?msockid=11fb50993a826b96385b445f3bdc6a23">
                Dell
              </a>
            </li>
            <li>
              <a href="https://store.acer.com/en-in/">Acer</a>
            </li>
            <li>
              <a href="https://www.lenovo.com/in/en/d/deals/?sortBy=priceUp&visibleDatas=4376%3ALOQ%2CLegion%2CIdeaPad%2CYoga&cid=in:sem:ndop2c&msclkid=9d036e69a0141a7b2d8708c381b62a8c&utm_source=bing&utm_medium=cpc&utm_campaign=CN~ECOMM_CONS_PUB_MTM_BING_TEXT_BR_EXACT_CCFNET_IN-AN~ECOMM-SB~CONS-SC~PUB-YR~NONE-MK~IN-AG~8651&utm_term=lenovo%20official%20website&utm_content=Core%20Brand">
                Lenovo
              </a>
            </li>{" "}
            <li>
              <a href="https://www.asus.com/us/content/nuc-overview/?utm_source=gads&utm_medium=sem&utm_campaign=2024Q2-MiniPC-NUC14Pro&msclkid=9fba0183a6151c7a0245672986b77d87&utm_term=gaming%20mini%20pc&utm_content=US%20%7C%202024%20Q2%20%7C%20Mini%20PC%7C%20NUC%20%7C%20SEM">
                Asus
              </a>
            </li>{" "}
            <li>
              <a href="https://www.apple.com/in/ipad-pro/">Apple</a>
            </li>
          </ul>
          <div className="social">
            <h1>Social</h1>
            <div className="social-icons">
              <a href="https://www.facebook.com/">
                <i className="fa-brands fa-facebook-f"></i>
              </a>
              <a href="https://x.com/?lang=en-in&mx=2">
                <i className="fa-brands fa-twitter"></i>
              </a>
              <a href="https://www.instagram.com/?hl=en">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="https://www.youtube.com/">
                <i className="fa-brands fa-youtube"></i>
              </a>
            </div>
          </div>
        </div>
        <p className="copyright">
          <span className="f-logo">Lappora</span> © 2025 All rights reserved
        </p>
      </footer>
    </div>
  );
}

export default Footer;
