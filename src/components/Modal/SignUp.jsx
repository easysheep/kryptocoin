import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../Firebaseconfig";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SignUp.scss"
import { useAuth } from "../../AuthContext";
import { toast } from 'react-toastify';
import { Bounce } from 'react-toastify';

const Signup = () => {
  const { logedin, setlogedin } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [displayError, setDisplayError] = useState("");

  const navigate = useNavigate();

  const submitHandler = async (event) => {
    event.preventDefault();
    try {
      const userCredentials = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredentials.user;
      setlogedin(true);
      localStorage.setItem('logedin', JSON.stringify(true));

      navigate("/");
      toast.success('User signed in ', {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
        })


      console.log(user);
    } catch (error) {
      console.error(error.code);
      setError(error.code);
    }
  };

  useEffect(() => {
    if (error === "auth/invalid-login-credentials") {
      setDisplayError("Invalid login credentials");
    } else if (error === "auth/invalid-email") {
      setDisplayError("Invalid Email");
    } else if (error === "auth/missing-password") {
      setDisplayError("Password is required ");
    } else if (error === "auth/weak-password") {
      setDisplayError("Weak password");
    }
  }, [error]);

  const emailHandler = (event) => {
    setEmail(event.target.value);
  };

  const passwordHandler = (event) => {
    setPassword(event.target.value);
  };
  return (
    <>
      <div className="signup">
        <div className="signupmain">
          <h1>SignUp</h1>
          {error !== null ? (
            <div className="login_error">{displayError}</div>
          ) : undefined}
          <form onSubmit={submitHandler}>
            <span>
              <label>E-mail  </label><br />
              <input
                type="email"
                placeholder="Email id"
                onChange={emailHandler}
              />
            </span>
            <br />
            <span>
              <label>Password  </label><br />
              <input
                type="password"
                placeholder="Password"
                onChange={passwordHandler}
              />
            </span>
            <div className="twob1">
              <button className="signout_buttons1" type="submit">Submit</button>
            </div>
          </form>

        </div>

      </div>
    </>
  );
};

export default Signup;