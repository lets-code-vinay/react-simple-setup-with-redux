import React from "react";
import { string } from "prop-types";

function Header({ desc }) {
  return (
    <div className="Header">
      <h3> {desc} </h3>
    </div>
  );
}

Header.propTypes = {
  desc: string,
};

export default Header;
