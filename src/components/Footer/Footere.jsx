import React from "react";
import "./Footere.css";
import { Link } from "react-router-dom";

const Footere = () => {
  return (
    <footer className="footer">
      <div className="footer_container">
        <div className="footer_section footer_brand">
          <h2 id="font_nanum">VILLA FRANCIACORTA</h2>
          <p>EMOTION IN EVERY BOTTLE</p>
        </div>

        <div className="footer_section">
          <h3 className="footer_title" id="font_nanum">EXPLORE</h3>
          <ul className="footer_links">
            <li><Link to="/products">Wines</Link></li>
            <li><Link to="/about">Our History</Link></li>
            <li><Link to="/visit">Visit Us</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="footer_section footer_contact">
          <h3 className="footer_title" id="font_nanum">CONTACT</h3>
          <p>Via Villa, 12, 25040 Monticelli Brusati BS</p>
          <p>+39 030 652 329</p>
          <p>info@villafranciacorta.it</p>
        </div>

        <div className="footer_section">
          <h3 className="footer_title" id="font_nanum">NEWSLETTER</h3>
          <div className="footer_input_group">
            <input type="email" placeholder="YOUR EMAIL" className="footer_input" />
            <button className="footer_btn">SUBSCRIBE</button>
          </div>
        </div>
      </div>
      
      <div className="footer_bottom">
        <p>&copy; {new Date().getFullYear()} VILLA FRANCIACORTA. ALL RIGHTS RESERVED.</p>
      </div>
    </footer>
  );
};

export default Footere;
