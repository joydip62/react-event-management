import { Link, useNavigate } from "react-router-dom";
import Social from "../../shared/Social";
import toast from "react-hot-toast";
import useAuth from "../../hooks/useAuth";

const Register = () => {
  const { createUser } = useAuth();
  const navigate = useNavigate();

  const handleCreateUser = e => {


    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    if (password < 6) {
      return toast.error("Your password must be getter")
    }
    createUser(email, password)
      .then((result) => {
        toast.success("You have successfully sign in with google");
        console.log(result.user);
        navigate("/");
      })
      .catch((error) => {
        return toast.error(error.message);
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
                  name="displayName"
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
                  name="photo"
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

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  name="password"
                  required
                />
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