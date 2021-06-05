import React from "react";

function Footer() {
  var currentyr = new Date().getFullYear();
  return (
    <div>
      <footer>
        <p>Copyright @ {currentyr}</p>
      </footer>
    </div>
  );
}

export default Footer;
