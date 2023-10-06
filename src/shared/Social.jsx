
import google from "./../../public/google.png";
const Social = () => {
    return (
      <div className="w-full mx-auto text-center space-y-5">
        <p>Or</p>
        <div className="space-y-5">
          <button className="btn btn-outline">
            <img src={google} className="w-5" />
            Continue with Google
          </button>
        </div>
      </div>
    );
};

export default Social;