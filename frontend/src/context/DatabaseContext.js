import React, { useContext, useState, useEffect } from "react";

const DatabaseContext = React.createContext();

export function DatabaseProvider({ children }) {
  const [username, setUsername] = useState("");
  const [feedImages, setFeedImages] = useState([]);
  const [profileImages, setProfileImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState([]);

  // Calls the API  made to add a user to our database
  async function addUser(fName, lName, uid, email, username) {
    console.log(uid);
    setIsLoading(true);
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
    setIsLoading(false);
  }

  // Calls the API made to insert the UID given by Firebase into the database
  async function updateUID(email, uid) {
    setIsLoading(true);
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
    setIsLoading(false);
  }

  // Calls the API to get all data about the current user based on their UID
  async function getUser(uid) {
    setIsLoading(true);
    console.log("getting user");
    await fetch("http://localhost:8000/get_user/" + uid, {
      method: "Get",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((result) => {
        setUser(result);
      })
      .catch((error) => {
        console.log(error);
      });
    setIsLoading(false);
  }

  // Calls the API to get all the posts for the main image feed
  async function getImgagesForTheFeed() {
    let images = [];
    setIsLoading(true);
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
    setIsLoading(false);
    return images;
  }

  // Calls the API tp get the images that a user has posted to display on their profile page.
  async function getImagesForProfile(uid) {
    let images = [];
    setIsLoading(true);
    console.log("getting images for profile");
    await fetch("http://localhost:8000/get_images_for_profile_feed/" + uid, {
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
        setProfileImages(result);
        console.log(feedImages);
      })
      .catch((error) => {
        console.log(error);
      });
    setIsLoading(false);
    return images;
  }

  // Calls the API to update a users profile information
  async function updateProfileInformation(
    uid,
    fName,
    lName,
    username,
    bio,
    profilePicUrl
  ) {
    setIsLoading(true);
    await fetch("http://localhost:8000/update_profile", {
      method: "Put",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        uid: uid,
        fName: fName,
        lName: lName,
        username: username,
        bio: bio,
        profilePic: profilePicUrl,
      }),
    })
      .then(() => {
        console.log("Profile updated");
      })
      .catch((error) => {
        console.log(error);
      });
    setIsLoading(false);
  }

  // Calls the API to check if an username exists
  async function checkUsernameExists(username) {
    const response = await fetch(
      `http://localhost:8000/check_username/${username}`
    );
    const data = await response.json();
    return data.exists;
  }

  // Calls the API to add a like to an image
  async function addUidLikedToImageFeed(imageId, uid) {
    setIsLoading(true);
    await fetch("http://localhost:8000/update_likes/" + imageId, {
      method: "Put",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        uid: uid,
      }),
    })
      .then(() => {
        console.log("Image updated");
      })
      .catch((error) => {
        console.log(error);
      });
    setIsLoading(false);
  }

  // Calls the API to remove a like to an image
  async function removeUidLikedToImageFeed(imageId, uid) {
    setIsLoading(true);
    await fetch("http://localhost:8000/remove_likes/" + imageId, {
      method: "Put",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        uid: uid,
      }),
    })
      .then(() => {
        console.log("Image updated");
      })
      .catch((error) => {
        console.log(error);
      });
    setIsLoading(false);
  }

  const value = {
    addUser,
    updateUID,
    getUser,
    username,
    setUsername,
    getImgagesForTheFeed,
    feedImages,
    isLoading,
    getImagesForProfile,
    user,
    setUser,
    profileImages,
    updateProfileInformation,
    checkUsernameExists,
    addUidLikedToImageFeed,
    removeUidLikedToImageFeed,
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
