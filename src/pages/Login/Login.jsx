import { Link } from "react-router-dom";
import Social from "../../shared/Social";

const Login = () => {
    const handleLogin = (e) => {
      e.preventDefault();
      const email = e.target.email.value;
      const password = e.target.password.value;

    };

    return (
      <div>
        <div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mx-auto mt-10">
            <form className="card-body" onSubmit={handleLogin}>
              <h2 className="text-2xl font-bold">Login</h2>
              <div className="border p-5">
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
                  <button className="btn bg-[#F9A51A] mb-5">Login</button>
                  <p className="text-center">
                    Don’t have an account?{" "}
                    <Link to="/register" className="text-[#F9A51A]">
                      Create an account
                    </Link>
                  </p>
                </div>
              </div>
              <div className="w-full mx-auto text-center space-y-5">
                <Social></Social>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
};

export default Login;