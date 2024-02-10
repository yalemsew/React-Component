import React, { useContext } from "react";
import { RegistrationContext } from "./Box";

function DisplayBox() {
  const BoxStyle = {
    backgroundColor: "lightgray",
    borderLeft: "1px solid darkgray",
    height: "200px",
    width: "200px",
    display: "flex",
    flexDirection: "column",
    paddingLeft: "10px",
    display: "flex",
  };

  const { userList, removeName } = useContext(RegistrationContext);

  return (
    <div>
      <div style={BoxStyle}>
        <h2> Name list</h2>
        {userList.map((name) => (
          <li key={name.id}>
            {name.text}{" "}
            <button onClick={() => removeName(name.id)}>Remove</button>
          </li>
        ))}
      </div>
    </div>
  );
}
export default DisplayBox;

//   const BoxStyle = {
//     backgroundColor: "lightgray",

//     borderLeft: "1px solid darkgray",
//     height: "200px",
//     width: "200px",
//     paddingLeft: "10px",
//   };
//   const NammList = (
//     <div style={{ padding: "10px" }}>
//       <li>Abebe</li>
//       <li>Abebe</li>
//       <li>Abebe</li>
//     </div>
//   );
//   return <dive style={BoxStyle}>{NammList}</dive>;
// }
// export default DisplayBox;
