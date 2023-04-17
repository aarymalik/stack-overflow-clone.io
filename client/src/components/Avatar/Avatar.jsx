import React from "react";

const Avatar = ({
  children,
  backgroundColor,
  px,
  py,
  borderRadius,
  fontSize,
  cursor,
}) => {
  const style = {
    backgroundColor,
    padding: `${px} ${py}`,
    borderRadius,
    fontSize,
    textAlign: "center",
    cursor: cursor || null,
    textDecoration: "none",
  };

  return <div style={style}>{children}</div>;
};

export default Avatar;
