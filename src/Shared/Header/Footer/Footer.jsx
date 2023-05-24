import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <div className="container">
        <p>&copy; {currentYear} Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
