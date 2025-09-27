import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import CustomInput from '@/components/CustomForm/CustomInput';
import { useDispatch } from 'react-redux';
import { login } from '@/redux/userSlice';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';

export default function Login() {
  const dispatch = useDispatch();
  const [error, setError] = useState('');

  const initialValues = {
    usernameOrContact: '',
    password: '',
  };

  const validationSchema = Yup.object({
    usernameOrContact: Yup.string().required('Email or Mobile is required'),
    password: Yup.string().required('Password is required'),
  });

  const handleSubmit = (values) => {
    setError('');
    try {
      dispatch(
        login({
          username: values.usernameOrContact,
          contact: values.usernameOrContact,
          password: values.password,
        }),
      );
      alert('Login successful! Check Redux or localStorage.');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <section className="min-h-screen flex bg-black text-white">
      {/* Left Panel */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center px-8 py-10 bg-black">
        {/* Logo */}
        <div className="flex flex-col items-center mb-8">
          <img
            src="/images/logo-rl.png"
            alt="Royal Mega Logo"
            className="h-20 w-25 mb-2"
          />
        </div>

        {/* Login Form */}
        <div className="w-full max-w-sm">
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {() => (
              <Form className="flex flex-col gap-5 text-black">
                <CustomInput
                  name="usernameOrContact"
                  label="Email or mobile*"
                  placeholder="Enter your log ID"
                />

                <div className="relative">
                  <CustomInput
                    name="password"
                    type="password"
                    label="Password*"
                    placeholder="Enter your password"
                  />
                  <Link
                    to="/forgot"
                    className="absolute right-0 top-0 text-xs text-red-500 hover:underline"
                  >
                    Forgot Password?
                  </Link>
                </div>

                {error && <p className="text-red-500 text-sm">{error}</p>}

                <button
                  type="submit"
                  className="bg-yellow-500 text-black font-semibold py-3 rounded-full hover:bg-yellow-600 transition"
                >
                  Login
                </button>
              </Form>
            )}
          </Formik>

          {/* Footer Links */}
          <p className="text-center text-gray-400 mt-6 text-sm">
            Not registered yet?{' '}
            <Link to="/signup" className="text-yellow-400 hover:underline">
              Create an Account
            </Link>
          </p>
        </div>
      </div>

      {/* Right Panel */}
      <div
        className="hidden md:flex w-1/2 relative items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: 'url("/images/cosmic.jpg")' }}
      >
        <div className="absolute top-10 left-0">
          <h2 className="text-3xl font-bold">Welcome back,</h2>
          <p className="mt-2 max-w-sm text-sm bg-black/60 px-3 py-2 rounded">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          </p>
        </div>
        <img
          src="/images/log-ball.png"
          alt="Lottery balls"
          className="w-[80%] object-contain"
        />
      </div>
    </section>
  );
}
