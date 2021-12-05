import React from "react";

export default function Login() {

    // const Login = () => {
    //     const handleFormSubmit = (e) => {
    //         e.preventDefault();
    
    //         let email = e.target.elements.email?.value;
    //         let password = e.target.elements.password?.value;
    
    //         console.log(email, password);
    //     };
  return (
    <div>
      <div className="flex bg-white p-8 text-center">
        <div className="w-full max-w-md m-auto bg-white rounded-lg border shadow-lg py-10 px-16">
          <h1 className="text-2xl font-medium text-primary mt-4 mb-12 text-center">
            Login to Your Account
          </h1>
          <form>
            <div className="text-justify">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                id="email"
                placeholder="Enter Your Email"
              />
            </div>
            <div className="text-justify">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                id="password"
                placeholder="Enter Your Password"
              />
            </div>
            <div className='flex justify-center items-center mt-6'>
              <button className={`bg-blue-500 py-2 px-6 text-sm text-black rounded border border-green focus:outline-none focus:border-green-dark`}>Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
