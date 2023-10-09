import { Link, useNavigate } from "react-router-dom";
import GoogleLogin from "../../components/googleLogin/GoogleLogin";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import toast from "react-hot-toast";

const Login = () => {
  const navigate = useNavigate()
  const {login} = useContext(AuthContext);

  const handleSubmit = e =>{
    e.preventDefault()
   
    const email = e.target.email.value
    const password = e.target.password.value
    
    
      login(email,password)
      .then(()=>{
          toast.success("User logged in successfully")
          e.target.reset();
          navigate("/");

      })
      .catch(error=>{
        toast.error(error.message)
        
      })
    
  }
    return (
        <>
            <div className="flex h-full py-10 px-5 lg:min-h-screen justify-center items-center bg-pink-100">
  
  <div className="bg-pink-200 w-full lg:w-fit rounded-2xl shadow-lg py-5 ">
  
    <div className="px-8 md:px-16">
      <h2 className="font-bold text-2xl text-[#002D74]">Login</h2>
      <p className="text-xs mt-4 text-[#002D74]">If you are already a member, easily log in</p>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      
              <input className="p-2 mt-4  rounded-xl border" type="email" name="email" placeholder="Email" />
              
        
          <input className="p-2 rounded-xl border w-full" type="password" name="password" placeholder="Password"/>
         
        
        <button className="bg-pink-900 rounded-xl text-white py-2 hover:scale-105 duration-300">Login</button>
      </form>

      <div className="mt-2 grid grid-cols-3 items-center text-gray-400">
        <hr className="border-gray-400"/>
        <p className="text-center text-sm">OR</p>
        <hr className="border-gray-400"/>
      </div>

      <GoogleLogin></GoogleLogin>

      <div className=" text-xs border-b border-[#002D74] py-4 text-[#002D74]">
        <a href="#">Forgot your password?</a>
      </div>

      <div className="mt-3 text-xs flex justify-between items-center text-[#002D74]">
        <p>Don't have an account?</p>
        <button className="py-2 px-5 bg-white border rounded-xl hover:scale-110 duration-300"><Link to="/signup">Register</Link></button>
      </div>
    </div>

    
    
  </div>
            </div>
        </>
    );
};

export default Login;