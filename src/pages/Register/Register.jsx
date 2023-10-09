import { useState } from "react";
import toast from "react-hot-toast";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Social from "../../shared/Social";

const Register = () => {

  const { createUser, handleUpdateProfile } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [showPass, setShowPass] = useState(false);

  const handleCreateUser = e => {


    e.preventDefault();
    const name = e.target.name.value;
    const photoUrl = e.target.photoUrl.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    if (password.length < 6) {
      toast.error("Your password must be at least 6 characters");
      return;
    } else if (!/^(?=.*?[a-z])/.test(password)
    ) {
      toast.error("Your password must be at least 1 lowercase");
      return;
    } else if (!/(?=.*?[A-Z])/.test(password)) {
      toast.error("Your password must be at least 1 uppercase");
      return;
    } else if (!/(?=.*?[#?!@$%^&*-])/.test(password)) {
      toast.error("Your password must be at least 1 special character(#?!@$%^&*-)");
      return;
    }

    createUser(email, password)
      // eslint-disable-next-line no-unused-vars
      .then(() => {
        handleUpdateProfile(name, photoUrl)
          .then(() => {
          toast.success("You have successfully Register");
          navigate(location?.state ? location.state : "/");
        })
      })
      .catch((error) => {
        toast.error(error.message);
        return;
      });

  }
    return (
      <div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mx-auto mt-10">
          <form className="card-body" onSubmit={handleCreateUser}>
            <h2 className="text-2xl font-bold">Create an account </h2>
            <div className="border p-5">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter you name"
                  className="input input-bordered"
                  name="name"
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter your photo Url"
                  className="input input-bordered"
                  name="photoUrl"
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  name="email"
                  required
                />
              </div>

              <div className="form-control relative">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type={showPass ? "text" : "password"}
                  placeholder="password"
                  className="input input-bordered"
                  name="password"
                  required
                />
                <span
                  className="absolute right-5 top-14"
                  onClick={() => setShowPass(!showPass)}
                >
                  {showPass ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
                </span>
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-[#F9A51A] mb-5">
                  Create an account
                </button>
                <p className="text-center">
                  Already have an account? {""}
                  <Link to="/login" className="text-[#F9A51A]">
                    Login
                  </Link>
                </p>
              </div>
            </div>
            <div>
              <Social></Social>
            </div>
          </form>
        </div>
      </div>
    );
};

export default Register;