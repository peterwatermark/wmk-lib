import React from "react";
import PropTypes from "prop-types";

const MailTo = ({ className, id, children }) => {
  const classes = [className];
  classes.push("wmk-link");
  classes.push("wmk-link-mailto");
  return (
    <a className={classes.join(" ")} id={id} href={"mailto:" + children}>
      {children}
    </a>
  );
};

export default MailTo;

MailTo.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string
};

MailTo.defaultTypes = {
  id: "",
  className: ""
};