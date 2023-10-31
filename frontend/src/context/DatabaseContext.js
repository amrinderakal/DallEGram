import React, { useContext, useState, useEffect } from "react";

const DatabaseContext = React.createContext();

export function DatabaseProvider({ children }) {
  const [username, setUsername] = useState("");
  async function addUser(fName, lName, uid, email, username) {
    console.log(uid);
    await fetch("http://localhost:8000/add_user", {
      method: "Post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        fName: fName,
        lName: lName,
        uid: uid,
        email: email,
        username: username,
      }),
    })
      .then(() => {
        console.log("New user added");
      })
      .catch((error) => {
        console.log(error);
      });
  }

  async function updateUID(email, uid) {
    console.log(uid);
    await fetch("http://localhost:8000/update_uid", {
      method: "Put",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: email,
        uid: uid,
      }),
    })
      .then(() => {
        console.log("UID updated");
      })
      .catch((error) => {
        console.log(error);
      });
  }
  async function getUser(uid) {
    console.log("getting user");
    await fetch("http://localhost:8000/get_user/" + uid, {
      method: "Get",
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => {
        //handle response
        console.log(response.json());
      })
      .then((data) => {
        //handle data
        console.log(data.json());
      })
      .catch((error) => {
        //handle error
      });
  }
  const value = {
    addUser,
    updateUID,
    getUser,
    username,
    setUsername,
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
