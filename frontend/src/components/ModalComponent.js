import React, { useState, useEffect } from "react";
import {
  Form,
  Button,
  FloatingLabel,
  Modal,
  Container,
  Alert,
} from "react-bootstrap";
import { useDatabase } from "../context/DatabaseContext";

function ModalComponent({
  show,
  setShow,
  // handleClose,
  handleShow,
  currFname,
  currLname,
  currUsername,
  currBio,
  currProfilePic,
}) {
  const {
    updateProfileInformation,
    user,
    getUser,
    getImagesForProfile,
    getImgagesForTheFeed,
    checkUsernameExists,
  } = useDatabase();
  const [firstName, setFirstName] = useState(currFname);
  const [lastName, setLastName] = useState(currFname);
  const [username, setUsername] = useState(currUsername);
  const [bio, setBio] = useState(currBio);
  const [error, setError] = useState("");
  const [profilePic, setProfilePic] = useState();
  const [profilePicUrl, setProfilePicUrl] = useState("");

  useEffect(() => {
    setFirstName(currFname);
    setLastName(currLname);
    setUsername(currUsername);
    setBio(currBio);
  }, [currFname, currLname, currUsername, currBio]);

  // Closes the modal
  const handleClose = () => {
    setShow(false);
    setFirstName(currFname);
    setLastName(currLname);
    setUsername(currUsername);
    setBio(currBio);
    setError("");
  };

  // Creates a delay
  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  // Updates the users profile
  const onUpdateProfileClick = async (e) => {
    e.target.disabled = true;
    // if user is not trying to update thier username then no need to check wether if the same username exists
    if (username == currUsername) {
      if (profilePic) {
        const profP = await handleUploadImage();
        console.log("ProfilePic URL" + profP);
        await updateProfileInformation(
          user.uid,
          firstName,
          lastName,
          username,
          bio,
          profP
        );
      } else {
        await updateProfileInformation(
          user.uid,
          firstName,
          lastName,
          username,
          bio,
          currProfilePic
        );
      }

      await delay(2000);

      // Need to update the current user
      await getUser(user.uid);
      await getImagesForProfile(user.uid);
      await getImgagesForTheFeed();

      setError("");
      setShow(false);
    } else {
      //check if username is already in use
      const existingUser = await checkUsernameExists(username);
      // if username is already in use, set error message and allow for another submission
      if (existingUser) {
        setError(
          "Username already exists. Please choose a different username."
        );
        e.target.disabled = false;
      } else {
        // if username not in use, update all profile information
        if (profilePic) {
          const profP = await handleUploadImage();
          console.log("ProfilePic URL" + profP);
          await updateProfileInformation(
            user.uid,
            firstName,
            lastName,
            username,
            bio,
            profP
          );
        } else {
          await updateProfileInformation(
            user.uid,
            firstName,
            lastName,
            username,
            bio,
            currProfilePic
          );
        }
        await delay(2000);
        await getUser(user.uid);
        await getImagesForProfile(user.uid);
        await getImgagesForTheFeed();
        setError("");
        setShow(false);
      }
    }
  };

  // Uploads an image to cloudinary
  const handleUploadImage = async () => {
    // Replace 'YOUR_UPLOAD_PRESET' with your Cloudinary upload preset
    const upload_preset = "u5gz8hhv";
    let pic = null;
    // Simulate selecting a file (you can get the file from an input field or another source)
    const uploadBody = new FormData();
    uploadBody.append("file", profilePic);
    uploadBody.append("upload_preset", upload_preset);
    uploadBody.append("cloud_name", "davhdgfz4");

    await fetch("  https://api.cloudinary.com/v1_1/davhdgfz4/image/upload", {
      method: "post",
      body: uploadBody,
    })
      .then((resp) => resp.json())
      .then((data) => {
        console.log("File uploaded:" + data.url);
        pic = data.url;
      })
      .catch((err) => console.log(err));
    return pic;
  };

  return (
    <Container>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Update Profile Information</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          {error && (
            <Alert
              variant="danger"
              className="d-flex align-items-center justify-content-center w-100 "
            >
              {error}
            </Alert>
          )}
          <Form.Group className="mb-4">
            <FloatingLabel label="First Name">
              <Form.Control
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
                style={{ borderColor: "#000000" }}
                placeholder="First Name"
              />
            </FloatingLabel>
          </Form.Group>

          <Form.Group className="mb-4">
            <FloatingLabel label="Last Name">
              <Form.Control
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
                style={{ borderColor: "#000000" }}
                placeholder="Last Name"
              />
            </FloatingLabel>
          </Form.Group>

          <Form.Group className="mb-4">
            <FloatingLabel label="Username">
              <Form.Control
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                style={{ borderColor: "#000000" }}
                placeholder="Email"
              />
            </FloatingLabel>
          </Form.Group>

          <Form.Group className="mb-4">
            <FloatingLabel label="Bio">
              <Form.Control
                type="text"
                value={bio}
                onChange={(e) => setBio(e.target.value)}
                required
                style={{ borderColor: "#000000" }}
                placeholder="Biography"
              />
            </FloatingLabel>
          </Form.Group>

          <Form.Group className="mb-4">
            <FloatingLabel label="Profile Picture">
              <Form.Control
                required
                style={{ borderColor: "#000000" }}
                onChange={(e) => setProfilePic(e.target.files[0])}
                type="file"
              />
            </FloatingLabel>
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={handleClose}
            className="close-btn"
          >
            Close
          </Button>
          <Button onClick={onUpdateProfileClick}>Update Profile</Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

export default ModalComponent;
