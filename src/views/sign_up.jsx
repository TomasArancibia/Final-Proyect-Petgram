import "./sign_up.css";
import { useNavigate } from "react-router-dom";
import Image from "../assets/AnimalsPhoto.png";
import { useState, useContext } from "react";
import { Context } from "../store/appContext";

const SignUp = () => {
  const { store, actions } = useContext(Context);

  const [formData, setFormData] = useState({});

  const navigate = useNavigate();

  const handleCreate = async (e) => {
    e.preventDefault();
    await actions.createUser(formData);
    const data = await actions.fetchUserByUsername(formData.username);
    navigate(`/edit_account/${data["id"]}`);
  };

  // Clean up: Standardized variable names, removed debugging statements, improved readability.

  return (
    <>
      <form
        onSubmit={(e) => {
          console.log("Save button clicked");
          handleCreate(e);
        }}
      >
        <div className="container-fluid d-flex justify-content-center">
          <div className="circle-photo">
            <img src={Image} alt="Animals" className="circle-photo" />
          </div>
        </div>
        <div className="form-sign-up">
          <div className="name-lastname-input container-fluid p-1">
            <div className="me-2">
              <label htmlFor="formLastname" className="form-label ms-2">
                {" "}
                Name{" "}
              </label>
              <input
                className="form-control me-1"
                type="name"
                id="formName"
                placeholder="Jane"
                value={formData.name}
                onChange={(e) => {
                  console.log("Name:", e.target.value);
                  setFormData({ ...formData, name: e.target.value });
                }}
              />
            </div>
            <div className="p-1">
              <label htmlFor="formName" className="form-label ms-2">
                {" "}
                Lastname{" "}
              </label>
              <input
                className="form-control"
                type="Lastname"
                placeholder="Doe"
                value={formData.lastname}
                onChange={(e) => {
                  console.log("Lastname:", e.target.value);
                  setFormData({ ...formData, lastname: e.target.value });
                }}
              />
            </div>
          </div>

          <div className="username-age-input container-fluid p-1 m-1">
            <div className="me-2 w-75">
              <label htmlFor="formUser" className="form-label ms-2">
                {" "}
                Username{" "}
              </label>
              <input
                className="form-control"
                type="Username"
                id="formUser"
                placeholder="JaneDoe23"
                value={formData.username}
                onChange={(e) => {
                  console.log("Username:", e.target.value);
                  setFormData({ ...formData, username: e.target.value });
                }}
              />
            </div>
            <div className="ms-2 w-25">
              <label htmlFor="formAge" className="form-label ms-2">
                {" "}
                Age{" "}
              </label>
              <input
                className="form-control"
                type="number"
                id="formAge"
                placeholder="1"
                defaultValue={1}
                value={formData.age}
                onChange={(e) => {
                  console.log("Age:", e.target.value);
                  setFormData({ ...formData, age: e.target.value });
                }}
              />
            </div>
          </div>
          <div className="email-password container-fluid p-1">
            <div>
              <label htmlFor="formEmail" className="form-label">
                {" "}
                Email{" "}
              </label>
              <input
                className="form-control full-input m-1"
                type="email"
                id="formEmail"
                placeholder="JaneDoe@gmail.com"
                value={formData.email}
                onChange={(e) => {
                  console.log("Email changed:", e.target.value);
                  setFormData({ ...formData, email: e.target.value });
                }}
              />
            </div>
            <div>
              <label htmlFor="formPassword" className="form-label">
                {" "}
                Password{" "}
              </label>

              <input
                className="form-control me-1 full-input m-1"
                type="password"
                id="formPassword"
                placeholder="**********"
                value={formData.password}
                onChange={(e) => {
                  console.log("Password:", e.target.value);
                  setFormData({ ...formData, password: e.target.value });
                }}
              />
            </div>
          </div>
        </div>
        <div className="container-fluid d-flex justify-content-center p-1">
          <button className="signUp-btn btn submit" type="submit">
            {" "}
            Sign Up{" "}
          </button>
        </div>
      </form>
    </>
  );
};

export default SignUp;
