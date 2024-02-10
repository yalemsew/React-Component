import React, { useContext } from "react";
import { RegistrationContext } from "./Box";

function ClearButton() {
  const { setUserList } = useContext(RegistrationContext);

  const clearAll = () => {
    setUserList([]);
  };
  return (
    <div>
      <h2>Registration</h2>
      <button
        onClick={clearAll}
        style={{
          backgroundColor: "blue",
          padding: "1px",
          margin: "50px",
          width: "60px",
          display: "flex",
          alignItems: "center",
          backgroundColor: "#FFF",
        }}
      >
        clear all
      </button>
    </div>
  );
}
export default ClearButton;
