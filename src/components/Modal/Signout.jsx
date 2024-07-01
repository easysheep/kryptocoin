import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../AuthContext";
import { auth } from "../../../Firebaseconfig";
import "./Signout.scss"
import { toast } from 'react-toastify';
import { Bounce } from 'react-toastify';
const Signout = () => {
  const { logedin, setlogedin } = useAuth();
  const navigate = useNavigate();

  const logoutHandler = async () => {
    if (auth.currentUser) {
      try {
        await signOut(auth);
        console.log("User is signed out");
        setlogedin(false);
        navigate("/");
        toast.error(' User signed out', {
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

      } catch (error) {
        console.error(error.code);
      }
    } else {
      console.log("No use Signed in");
      console.log(logedin);
    }
  };

  const browsingHandler = () => {
    navigate("/");
  };
  return (
    <>
      <div className="signout">


        <div className="signout_main">
          <div className="head">SignOut</div>
          <div className="othcont">
            <p>Are you sure ?</p>
            <div className="twob1">
              <button className="signout_buttons" onClick={logoutHandler}>Yes</button>
              <button className="signout_buttons" onClick={browsingHandler}>No</button>
            </div>
          </div>

        </div>
      </div>

    </>
  );
};

export default Signout;