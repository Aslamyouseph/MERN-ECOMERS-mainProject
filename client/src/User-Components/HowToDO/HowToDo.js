import React from "react";
import "./HowToDO.css";
import image1 from "../User-images/laptop35.webp";
import { Routes, Route, Link, useNavigate } from "react-router-dom";

function HowToDo() {
  return (
    <div>
      <br />
      <h1 style={{ textAlign: "center", fontFamily: "sans-serif" }}>
        <b>
          <big>How-To</big>
        </b>
      </h1>
      <h4 style={{ textAlign: "center" }}>
        How do we make the unknown familiar.
      </h4>
      <br />
      <h5
        style={{
          paddingLeft: "5%",
          fontFamily: "inherit",
          color: "black",
        }}
      >
        <b>
          <big>Latest How-To :</big>
        </b>
      </h5>
      <hr
        style={{
          marginLeft: "5%",
          marginRight: "5%",
        }}
      />
      <div className="mainSection">
        <div className="card-row">
          <div className="card-image">
            <img src={image1} alt="Card Image" />
          </div>
          <div className="card-content">
            <Link
              to="/HowToDoDetails"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              <h5 className="card-title">
                How to Build a PC: The Ultimate Beginner's Guide
              </h5>
            </Link>

            <p className="card-text">
              PC building is infinitely varied, so no guide can cover every
              scenario. But we'll cover the most common issues you'll face
              assembling a desktop in 2023. You may decide to go fancier or more
              budget-focused with your build, but you'll walk away with a great
              grounding in what you need to know to do the job with
              confidence.Today, PC builders are spoiled with such a wealth of
              handsome, modestly priced PC cases, mood lighting options, and
              color-coordinated components that it's easy to get pulled into a
              design challenge or passion project when all you wanted to do was
              build a simple desktop. To be sure, there's a hot-rodder element
              here: You may pay a slight premium for your parts versus buying a
              pre-built PC. Major PC makers enjoy economies of scale buying
              parts in bulk or designing some of their own components that you
              as a solo builder can't attain. But most of the time, if you price
              out the parts for your own build against the cost of a ready-made
              system, you should get pretty close.
            </p>
          </div>
        </div>
      </div>
      <div className="mainSection">
        <div className="card-row">
          <div className="card-image">
            <img src={image1} alt="Card Image" />
          </div>
          <div className="card-content">
            <Link
              to="/HowToDoDetails"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              <h5 className="card-title">
                How to Build a PC: The Ultimate Beginner's Guide
              </h5>
            </Link>

            <p className="card-text">
              PC building is infinitely varied, so no guide can cover every
              scenario. But we'll cover the most common issues you'll face
              assembling a desktop in 2023. You may decide to go fancier or more
              budget-focused with your build, but you'll walk away with a great
              grounding in what you need to know to do the job with
              confidence.Today, PC builders are spoiled with such a wealth of
              handsome, modestly priced PC cases, mood lighting options, and
              color-coordinated components that it's easy to get pulled into a
              design challenge or passion project when all you wanted to do was
              build a simple desktop. To be sure, there's a hot-rodder element
              here: You may pay a slight premium for your parts versus buying a
              pre-built PC. Major PC makers enjoy economies of scale buying
              parts in bulk or designing some of their own components that you
              as a solo builder can't attain. But most of the time, if you price
              out the parts for your own build against the cost of a ready-made
              system, you should get pretty close.
            </p>
          </div>
        </div>
      </div>
      <div className="mainSection">
        <div className="card-row">
          <div className="card-image">
            <img src={image1} alt="Card Image" />
          </div>
          <div className="card-content">
            <Link
              to="/HowToDoDetails"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              <h5 className="card-title">
                How to Build a PC: The Ultimate Beginner's Guide
              </h5>
            </Link>

            <p className="card-text">
              PC building is infinitely varied, so no guide can cover every
              scenario. But we'll cover the most common issues you'll face
              assembling a desktop in 2023. You may decide to go fancier or more
              budget-focused with your build, but you'll walk away with a great
              grounding in what you need to know to do the job with
              confidence.Today, PC builders are spoiled with such a wealth of
              handsome, modestly priced PC cases, mood lighting options, and
              color-coordinated components that it's easy to get pulled into a
              design challenge or passion project when all you wanted to do was
              build a simple desktop. To be sure, there's a hot-rodder element
              here: You may pay a slight premium for your parts versus buying a
              pre-built PC. Major PC makers enjoy economies of scale buying
              parts in bulk or designing some of their own components that you
              as a solo builder can't attain. But most of the time, if you price
              out the parts for your own build against the cost of a ready-made
              system, you should get pretty close.
            </p>
          </div>
        </div>
      </div>
      <div className="mainSection">
        <div className="card-row">
          <div className="card-image">
            <img src={image1} alt="Card Image" />
          </div>
          <div className="card-content">
            <Link
              to="/HowToDoDetails"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              <h5 className="card-title">
                How to Build a PC: The Ultimate Beginner's Guide
              </h5>
            </Link>

            <p className="card-text">
              PC building is infinitely varied, so no guide can cover every
              scenario. But we'll cover the most common issues you'll face
              assembling a desktop in 2023. You may decide to go fancier or more
              budget-focused with your build, but you'll walk away with a great
              grounding in what you need to know to do the job with
              confidence.Today, PC builders are spoiled with such a wealth of
              handsome, modestly priced PC cases, mood lighting options, and
              color-coordinated components that it's easy to get pulled into a
              design challenge or passion project when all you wanted to do was
              build a simple desktop. To be sure, there's a hot-rodder element
              here: You may pay a slight premium for your parts versus buying a
              pre-built PC. Major PC makers enjoy economies of scale buying
              parts in bulk or designing some of their own components that you
              as a solo builder can't attain. But most of the time, if you price
              out the parts for your own build against the cost of a ready-made
              system, you should get pretty close.
            </p>
          </div>
        </div>
      </div>
      <br />
    </div>
  );
}

export default HowToDo;
