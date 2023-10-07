
import { useContext } from "react";
import google from "./../../public/google.png";
import { AuthContext } from "../provider/AuthProvider";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
const Social = () => {

  const navigate = useNavigate();

  const { googleLogin } = useContext(AuthContext);

  const handleGoogleSignIn = (media) => {
    // eslint-disable-next-line no-unused-vars
    media().then(result => {
      toast.success('You have successfully sign in with google');
      navigate('/');
    }).catch(error => {
      return toast.error(error.message);
})
  }
    return (
      <div className="w-full mx-auto text-center space-y-5">
        <p>Or</p>
        <div className="space-y-5">
          <button
            className="btn btn-outline"
            onClick={() => handleGoogleSignIn(googleLogin)}
          >
            <img src={google} className="w-5" />
            Continue with Google
          </button>
        </div>
      </div>
    );
};

export default Social;