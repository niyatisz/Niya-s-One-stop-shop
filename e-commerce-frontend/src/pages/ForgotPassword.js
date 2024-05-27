import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import summaryApi from '../common';

const ForgotPassword = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [message, setMessage] = useState('');
  const { register, handleSubmit } = useForm();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const onFormSubmit = async (data) => {
    try {
      const response = await fetch(summaryApi.forgotPassword.url, {
        method: summaryApi.forgotPassword.method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      setMessage(result.message);
    } catch (error) {
      console.error('Error:', error);
      setMessage('An error occurred. Please try again later.');
    }
  };

  return (
    <section id='forgot-password'>
      <section className="bg-gray-100 min-h-screen flex justify-center items-center">
        <div className="bg-[#dfa674] rounded-2xl flex max-w-3xl p-5 items-center" style={{ backgroundColor: 'rgb(239, 224, 226)' }}>
          <div className="md:w-1/2 px-8 lg:w-full">
            <h2 className="font-bold text-3xl text-[rgb(56,45,94)] mt-3">Forgot Password</h2>
            <form className="flex flex-col mt-3" onSubmit={handleSubmit(onFormSubmit)}>
              <div className="relative flex flex-col w-full gap-2">
                <input
                  className="p-2 rounded-md border w-full"
                  type="email"
                  name='email'
                  id='email'
                  placeholder="Enter your email"
                  {...register('email', { required: true })}
                />
                <div className="relative">
                  <input
                    className="p-2 rounded-md border w-full"
                    type={showPassword ? "text" : "password"}
                    name='password'
                    id='password'
                    placeholder="Password"
                    {...register('password', { required: true })}
                  />
                  <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center focus:outline-none"
                  >
                    {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
                  </button>
                </div>
                <div className="relative">
                  <input
                    className="p-2 rounded-md border w-full"
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Confirm Password"
                    name="confirmPassword"
                    id="confirmPassword"
                    {...register('confirmPassword', { required: true })}
                  />
                  <button
                    type="button"
                    onClick={toggleConfirmPasswordVisibility}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center focus:outline-none"
                  >
                    {showConfirmPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
                  </button>
                </div>
              </div>
              <button className="bg-[rgb(56,45,94)] text-white py-2 rounded-xl hover:scale-105 duration-300 hover:bg-[rgb(239,224,226)] font-medium mt-5" type="submit">Submit</button>
            </form>
            <Link to={'/login'} className="text-sm py-5 font-semibold mt-10" style={{ color: 'rgb(56, 45, 94)' }}>Back to Login</Link>
          </div>
        </div>
      </section>
    </section>
  );
};

export default ForgotPassword
