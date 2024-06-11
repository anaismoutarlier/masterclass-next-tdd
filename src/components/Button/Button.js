import React from "react";

export default function Button({ backgroundColor = "blue", ...props }) {
  return <button {...props} style={{ backgroundColor }} />;
}
