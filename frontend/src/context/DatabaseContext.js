import React, { useContext, useState, useEffect } from "react";

const DatabaseContext = React.createContext();

export function DatabaseProvider({ children }) {
  const [username, setUsername] = useState("");
  const [feedImages, setFeedImages] = useState([]);

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

  // need to figure out where to call this
  async function getUser(uid) {
    console.log("getting user");
    let user = null;
    await fetch("http://localhost:8000/get_user/" + uid, {
      method: "Get",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((result) => {
        user = result;
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
      });
    return user;
  }

  async function getImgagesForTheFeed() {
    let images = [];
    await fetch("http://localhost:8000/get_images_for_feed", {
      method: "Get",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.length % 3 != 0) {
          while (result.length % 3 != 0) {
            result.push({ uid: "false" });
          }
        }
        setFeedImages(result);
        console.log(feedImages);
      })
      .catch((error) => {
        console.log(error);
      });
    return images;
  }

  const value = {
    addUser,
    updateUID,
    getUser,
    username,
    setUsername,
    getImgagesForTheFeed,
    feedImages,
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
