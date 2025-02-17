import React from "react";
import "./AdminDeleteUpdateToDo.css";
function AdminDeleteUpdateHowToDo() {
  return (
    <div>
      <div>
        <br />
        <h1 className="Managing-heading">Remove or Update How To Do Section</h1>
        <div className="table-container-Laptop">
          <table>
            <thead>
              <tr>
                <th>Product ID</th>
                <th>Title</th>
                <th>Small Description</th>
                <th>Detailed Description</th>
                <th>Small Image</th>
                <th>Large Image</th>
                <th>Operations</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Asus ROG Strix</td>
                <td>High-performance gaming laptop</td>
                <td>
                  The Asus ROG Strix is a cutting-edge gaming laptop designed
                  for enthusiasts who demand top-tier performance. Equipped with
                  advanced cooling technology, high refresh rate displays, and
                  powerful graphics, this laptop delivers an immersive gaming
                  experience. Ideal for hardcore gamers and creative
                  professionals.
                </td>
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
                  The MSI Raider is a premium gaming laptop known for its sleek
                  design, high-performance hardware, and RGB lighting. Featuring
                  the latest NVIDIA RTX graphics, ultra-fast SSDs, and a 144Hz
                  display, this machine ensures seamless gameplay and smooth
                  multitasking. Built for both professional gaming and heavy
                  workloads.
                </td>
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
                <td>3</td>
                <td>Dell XPS 15</td>
                <td>Powerful ultrabook for professionals</td>
                <td>
                  The Dell XPS 15 is a sleek and powerful ultrabook, perfect for
                  professionals and content creators. It comes with a
                  high-resolution 4K display, Intel Core i7/i9 processors, and
                  long battery life, making it an excellent choice for those who
                  need high performance on the go.
                </td>
                <td>
                  <img
                    src="https://via.placeholder.com/50"
                    alt="Dell XPS 15"
                    width="50"
                  />
                </td>
                <td>
                  <img
                    src="https://via.placeholder.com/150"
                    alt="Dell XPS 15"
                    width="150"
                  />
                </td>
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
                <td>4</td>
                <td>HP Spectre x360</td>
                <td>Premium 2-in-1 laptop</td>
                <td>
                  The HP Spectre x360 is a stylish and versatile 2-in-1 laptop
                  that offers premium build quality, a stunning OLED display,
                  and excellent battery life. It’s perfect for professionals who
                  need a powerful yet portable device for both work and
                  entertainment.
                </td>
                <td>
                  <img
                    src="https://via.placeholder.com/50"
                    alt="HP Spectre x360"
                    width="50"
                  />
                </td>
                <td>
                  <img
                    src="https://via.placeholder.com/150"
                    alt="HP Spectre x360"
                    width="150"
                  />
                </td>
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
    </div>
  );
}

export default AdminDeleteUpdateHowToDo;
