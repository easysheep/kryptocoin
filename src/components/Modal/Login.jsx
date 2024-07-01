import { signInWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { auth } from "../../../Firebaseconfig";
import "./Login.scss";
import { useAuth } from "../../AuthContext";
import { toast } from 'react-toastify';
import { Bounce } from 'react-toastify';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [displayError, setDisplayError] = useState("");
  const { logedin, setlogedin } = useAuth();



  const navigate = useNavigate();

  const submitHandler = async (event) => {
    event.preventDefault();
    try {
      const userCredentials = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredentials.user;
      setlogedin(true);
      localStorage.setItem('logedin', JSON.stringify(true));

      navigate("/");
      toast.success('User logged in ', {
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
    if (
      error === "auth/invalid-login-credentials" ||error === "auth/invalid-credential"
    ) {
      setDisplayError("Invalid login credentials");
      toast.warn("Invalid login credentials", {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
        });
    } else if (error === "auth/invalid-email") {
      setDisplayError("Invalid Email");
      toast.warn("Invalid Email", {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
        });
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
      <div className="login">
        <div className="loginmain">
          <h1>Login</h1>
          {error !== null ? (
            <p className="login_error">{displayError}</p>
          ) : undefined}
          <form onSubmit={submitHandler}>
            <span>
              <label>Email </label><br />
              <input
                type="email"
                placeholder="Email id"
                onChange={emailHandler}
              />
            </span>
            <br />
            <span>
              <label>Password </label><br />
              <input
                type="password"
                placeholder="Password"
                onChange={passwordHandler}
              />
            </span>
            <div className="base">
              <div className="l"><button className="signout_buttons1" type="submit">Submit</button></div>
              <div className="r">
                <div className="login_error">No account? </div>
                <Link to="/signpage" className="error"> Get one here.</Link>
              </div>
            </div>

          </form>


        </div>

      </div>
    </>
  );
};

export default Login;