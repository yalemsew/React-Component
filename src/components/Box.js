import React from "react";
import "./Box.css";
import InputBox from "./InputBox";
import Footer from "./Footer";
import Header from "./Header";
import DisplayBox from "./DisplayBox";
import ClearButton from "./ClearingBox";

export const RegistrationContext = React.createContext({});

const ListProvider = ({ children }) => {
  const [userList, setUserList] = React.useState([]);

  const addName = (text) => {
    setUserList([...userList, { id: Date.now(), text, dismissed: false }]);
  };

  const removeName = (id) => {
    setUserList(userList.filter((name) => name.id != id));
  };

  const contextValue = {
    userList,
    addName,
    removeName,
    setUserList,
  };

  return (
    <RegistrationContext.Provider
      value={{
        userList: userList,
        addName: addName,
        removeName: removeName,
        setUserList: setUserList,
      }}
    >
      {children}
    </RegistrationContext.Provider>
  );
};

//  user defined consumer hook

function Box() {
  // const data = { userList: [] };
  // const [userList, setUserList] = React.useState([]);
  return (
    <ListProvider>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "420px",
          justifySelf: "center",
          padding: "20px",
        }}
      >
        <Header />
        <div style={{ display: "flex", flexDirection: "row" }}>
          <InputBox />
          <DisplayBox />
        </div>
        <ClearButton />
        <Footer />
      </div>
    </ListProvider>
  );
}
export default Box;

//   return (
//      <div
//       style={{
//         display: "flex",
//         flexDirection: "column",
//         width: "420px",
//         justifySelf: "center",
//         padding: "20px",
//       }}
//     >
//       <Header />
//       <div style={{ display: "flex", flexDirection: "row" }}>
//         <RegistrationContext.Provider
//           value={{ userList: userList, setUserList: setUserList }}
//         >
//           <InputBox />
//           <DisplayBox />
//         </RegistrationContext.Provider>
//       </div>
//       <Footer />
//     </div>
//   );
// }
