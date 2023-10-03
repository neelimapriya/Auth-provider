import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const Login = () => {

  const {signInUser, signInWithGoogle}=useContext(AuthContext);
  const Navigate= useNavigate();


    const handleLogin=(e)=>{
        e.preventDefault();
        const email=e.target.email.value;
        const password =e.target.password.value;
        console.log(email,password)

        signInUser(email, password)
        .then(result=>{
          console.log(result.user)
          e.target.reset()
          Navigate('/')
        })
        .catch(error=>{
          console.error(error)
        })
    }

    const handleGoogleSignIn=()=>{
      signInWithGoogle()
      .then(result=>{
        console.log(result.user)
      })
      .catch(error=>{
        console.error(error)
      })
    }

  return (
    <div className="hero min-h-screen bg-base-200">
     
       
        <div className="card flex-shrink-0 w-full max-w-xl  shadow-2xl bg-purple-200">
          <div className="card-body">
            <form className="text-2xl" onSubmit={handleLogin}>
              <div className="form-control">
                <label className="label">
                  <span className="">Email</span>
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
                  <span >Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className=" link link-hover text-xl underline">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-purple-900 hover:bg-purple-600 text-white">Login</button>
              </div>
            </form>
            <p>New to this website? <Link to='/register' className="text-purple-600">please Register</Link></p>
            <p> Login with<button onClick={handleGoogleSignIn} className="btn btn-ghost">Google</button></p>
          </div>
      
      </div>
    </div>
  );
};

export default Login;
