import React from "react";
import "./RemoveUpdate.css";

function RemoveUpdateGamingLaptops() {
  return (
    <div>
      <br />
      <h1 className="Managing-heading">Remove or Update Gaming Laptops</h1>
      <div className="table-container-Laptop">
        <table>
          <thead>
            <tr>
              <th>Product ID</th>
              <th>Title</th>
              <th>Small Description</th>
              <th>Detailed Description</th>
              <th>Keyword 1</th>
              <th>Keyword 2</th>
              <th>Keyword 3</th>
              <th>Keyword 4</th>
              <th>Keyword 5</th>
              <th>Keyword 6</th>
              <th>Keyword 7</th>
              <th>Keyword 8</th>
              <th>Keyword 9</th>
              <th>Keyword 10</th>
              <th>Small Image</th>
              <th>Large Image</th>
              <th>Original Price</th>
              <th>Discount Price</th>
              <th>Operations</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Asus ROG Strix</td>
              <td>High-performance gaming laptop</td>
              <td>
                Powerful gaming laptop with advanced cooling and high-end
                graphics.
              </td>
              <td>Gaming</td>
              <td>Asus</td>
              <td>ROG</td>
              <td>Laptop</td>
              <td>Performance</td>
              <td>RGB</td>
              <td>16GB RAM</td>
              <td>1TB SSD</td>
              <td>NVIDIA</td>
              <td>Windows 11</td>
              <td>
                <img
                  src="https://via.placeholder.com/50"
                  alt="Asus ROG Strix"
                  width="50"
                />
              </td>
              <td>
                <img
                  src="https://via.placeholder.com/150"
                  alt="Asus ROG Strix"
                  width="150"
                />
              </td>
              <td>$2000</td>
              <td>$1800</td>
              <td>
                <button className="delete-btn">
                  <b>Delete</b>
                </button>
                <button className="update-btn">
                  <b>Update</b>
                </button>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>MSI Raider</td>
              <td>Ultimate gaming performance</td>
              <td>
                High-end gaming laptop with superior build quality and
                performance.
              </td>
              <td>Gaming</td>
              <td>MSI</td>
              <td>Raider</td>
              <td>Performance</td>
              <td>RGB</td>
              <td>32GB RAM</td>
              <td>2TB SSD</td>
              <td>NVIDIA RTX</td>
              <td>144Hz Display</td>
              <td>Windows 11</td>
              <td>
                <img
                  src="https://via.placeholder.com/50"
                  alt="MSI Raider"
                  width="50"
                />
              </td>
              <td>
                <img
                  src="https://via.placeholder.com/150"
                  alt="MSI Raider"
                  width="150"
                />
              </td>
              <td>$2200</td>
              <td>$2000</td>
              <td>
                <button className="delete-btn">
                  <b>Delete</b>
                </button>
                <button className="update-btn">
                  <b>Update</b>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default RemoveUpdateGamingLaptops;
