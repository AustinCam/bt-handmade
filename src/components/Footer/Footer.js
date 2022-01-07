import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <>
      <hr />
      <footer>
        <div className="container text-center mx-auto">
          <div className="grid grid-cols-3">
            <div>
              <h2>Useful Links</h2>
              <ul>
                <li>Item1</li>
                <li>Item1</li>
                <li>Item1</li>
                <li>Item1</li>
                <li>Item1</li>
                <li>Item1</li>
              </ul>
            </div>
            <div>
              <h2>Social Media</h2>
              <ul>
                <li>Item1</li>
                <li>Item1</li>
                <li>Item1</li>
                <li>Item1</li>
                <li>Item1</li>
                <li>Item1</li>
              </ul>
            </div>
            <div>
              <h2>Legal</h2>
              <ul>
                <li>Item1</li>
                <li>Item1</li>
                <li>Item1</li>
                <li>Item1</li>
                <li>Item1</li>
                <li>Item1</li>
              </ul>
            </div>
          </div>
        </div>
        <p>
          &copy; 2021-Present / {process.env.REACT_APP_COMPANY_NAME.toString()}
        </p>
      </footer>
    </>
  );
}
