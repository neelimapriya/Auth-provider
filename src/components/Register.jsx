import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";



const Register = () => {
    const {createUser} =useContext(AuthContext);
    // console.log(authInfo)

    const handleRegister=(e)=>{
        e.preventDefault();
        const name= e.target.name.value;
        const email=e.target.email.value;
        const password =e.target.password.value;
        console.log(name,email,password)

        // create user in firebase
        createUser(email, password)
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
        <h2 className="text-3xl font-bold text-center py-5 text-black">Please Register</h2>
          <div className="card-body">
            <form className="text-2xl" onSubmit={handleRegister}>
            <div className="form-control">
            <div className="form-control">
                <label className="label">
                  <span className="">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="input input-bordered"
                  name="name"
                  required
                />
              </div>
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
               
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-purple-900 hover:bg-purple-600 text-white">Register</button>
              </div>
            </form>
            <p>Already have an account? <Link to='/login' className="text-purple-600">please Login</Link></p>
          </div>
      
      </div>
    </div>
    );
};

export default Register;