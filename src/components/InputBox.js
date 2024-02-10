import React, { useContext, useState } from "react";
import InputField from "./InputField";
import { RegistrationContext } from "./Box";

// function MyButton() {
//   let myVar = 1;
//   const [myState, setMyState] = React.useState(0);
//   const { setUserList } = React.useContext(RegistrationContext);
//   return (
//     <button
//       id="myButton"
//       onClick={() => {
//         serUserList((prev) => {
//           return [...prev];
//         });
//       }}
//       style={{
//         padding: "1px",
//         margin: "50px",
//         width: "50px",
//         alignItems: "center",
//         backgroundColor: "#FFF",
//       }}
//     >
//       submit {myState}
//     </button>
//   );
// }

function InputBox() {
  const InputStyle = {
    backgroundColor: "lightgray",
    border: "1px soliSd darkgray",
    height: "200px",
    width: "200px",
    display: "flex",
    flexDirection: "column",
    paddingLeft: "10px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const [newUser, setNewUser] = useState("");
  const { addName } = useContext(RegistrationContext);

  const handleAddName = () => {
    if (newUser.trim() !== "") {
      addName(newUser);
      setNewUser("");
    }
  };
  return (
    <div style={InputStyle}>
      <h2>Add user</h2>
      <input
        type="text"
        value={newUser}
        onChange={(e) => setNewUser(e.target.value)}
      />
      <button
        onClick={handleAddName}
        style={{
          padding: "1px",
          margin: "50px",
          width: "50px",
          alignItems: "center",
          backgroundColor: "#FFF",
        }}
      >
        Add
      </button>
    </div>
  );
}
export default InputBox;

// const { setUserList } = React.useContext(RegistrationContext);

// const [inputValue, setInputValue] = React.useState("");

// const InputStyle = {
//   backgroundColor: "lightgray",

//   border: "1px soliSd darkgray",
//   height: "200px",
//   width: "200px",
//   display: "flex",
//   flexDirection: "column",
//   paddingLeft: "10px",
//   display: "flex",
//   justifyContent: "center",
//   alignItems: "center",
// };

//   const onInputChangeCallback = (event) => {
//     setInputValue(event.target.value); // async
//   };

//   return (
//     <>
//       <div style={InputStyle}>
//         <input
//           onChange={onInputChangeCallback}
//           placeholder={"Input the name"}
//         />
//         <button
//           id="myButton"
//           onClick={() => {
//             setUserList((prev) => {
//               console.log([...prev, inputValue]);
//               // [...prev, inputValue]
//               prev.push(inputValue);

//               return prev;
//             });
//           }}
//           style={{
//             padding: "1px",
//             margin: "50px",
//             width: "50px",
//             alignItems: "center",
//             backgroundColor: "#FFF",
//           }}
//         >
//           submit
//         </button>
//       </div>
//     </>
//   );
// }
