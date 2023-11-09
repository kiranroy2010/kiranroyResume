import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear(); // Get the current year
  return (
    <div className="footer">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-auto">
            <p>@ Copyright {currentYear}, <span style={{fontFamily: 'Norwester'}} >Kiranroy Patravali</span> </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;