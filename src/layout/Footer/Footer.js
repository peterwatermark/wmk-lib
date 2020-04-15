import React from "react";
import { wmkClass } from '../../logic';

const Footer = ({ children, className, id }) => {
  return (
    <footer className={wmkClass("footer", "layout", className)} id={id}>
      {children}
    </footer>
  );
};

export default Footer;
