import React, { useContext, useState, useEffect } from "react";


const DatabaseContext = React.createContext();



export function DatabaseProvider({ children }) {
  const{t,setT} = useState([''])
  function addUser(fName, lName, uid, email) {
     console.log(uid)
    fetch("http://localhost:8000/add_user", {
      method: "Post",
      headers: { "Content-Type": "application/json" },
      body:  JSON.stringify({
        fName : fName,
        lName : lName,
        uid:uid,
        email:email
      })
    })
      .then(() => {
        console.log("New user added");

      })
      .catch((error) => {
        console.log(error);
      });
  }

  const value = {
    addUser, t
  };

  return (
    <DatabaseContext.Provider value={value}>
      {children}
    </DatabaseContext.Provider>
  );
}

export function useDatabase() {
  return useContext(DatabaseContext);
}


