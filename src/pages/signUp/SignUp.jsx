import { Link, useNavigate } from 'react-router-dom';
import GoogleLogin from '../../components/googleLogin/GoogleLogin';
import { useContext, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import toast from 'react-hot-toast';

const SignUp = () => {
  const navigate = useNavigate()
  const { createUser } = useContext(AuthContext);
  const [hasSpecialCharacter, setHasSpecialCharacter] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    if (password.length < 6) {
      toast.error("Password must be at least 6 characters");
    } else if (!/[A-Z]/.test(password)) {
      toast.error("Password doesn't have a capital letter");
    } else if (!/[!@#$%^&*()_+{}[\]:;<>,.?~\\-]/.test(password)) {
    
      toast.error("Password must contain at least one special character");
      setHasSpecialCharacter(true);
    } else {
      createUser(email, password)
        .then(() => {
         
            toast.success("User created successfully")
            navigate("/login")
        

               })
        .catch(error => {
          toast.error(error.message);
          
        });
    }
  };

  return (
    <>
      <div className="bg-gray-50  flex min-h-screen justify-center items-center">
        <div className="bg-gray-100 flex rounded-2xl shadow-lg py-5  items-center">
          <div className="px-8 md:px-16">
            <h2 className="font-bold text-2xl text-[#002D74]">Signup</h2>
            <p className="text-xs mt-4 text-[#002D74]">If you are new, please signup</p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input className="p-2 mt-3 rounded-xl border" type="text" name="name" placeholder="Name" />
              <input className="p-2  rounded-xl border" type="email" name="email" placeholder="Email" />
              
              <input className={`p-2 rounded-xl border w-full ${hasSpecialCharacter ? '' : ''}`} type="password" name="password" placeholder="Password" />
              <button className="bg-[#002D74] rounded-xl text-white py-2 hover:scale-105 duration-300" type='submit'>Signup</button>
            </form>

            <div className="mt-2 grid grid-cols-3 items-center text-gray-400">
              <hr className="border-gray-400" />
              <p className="text-center text-sm">OR</p>
              <hr className="border-gray-400" />
            </div>

            <GoogleLogin></GoogleLogin>

            <div className="mt-3 text-xs flex justify-between items-center text-[#002D74]">
              <p>Already have an account?</p>
              <button className="py-2 ml-2 px-5 bg-white border rounded-xl hover:scale-110 duration-300">
                <Link to="/login">Login</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
