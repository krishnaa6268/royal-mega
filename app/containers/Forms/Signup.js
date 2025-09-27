import React, { useState, useRef, useEffect } from 'react';
import { Formik, Form } from 'formik';
import CustomInput from '@/components/CustomForm/CustomInput';
import { validationSchema } from '@/utils/validationSchema';
import { useDispatch } from 'react-redux';
import { signup } from '@/redux/userSlice';
import { Link } from 'react-router-dom';
import { FaRegArrowAltCircleRight } from 'react-icons/fa';
import { BiMessageCheck } from 'react-icons/bi';

export default function Signup() {
  const dispatch = useDispatch();
  const [sentOtp, setIsOtpSent] = useState(false);
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [timer, setTimer] = useState(0);
  const otpRefs = useRef([]);

  const initialValues = {
    firstName: '',
    lastName: '',
    username: '',
    contact: '',
    password: '',
    acceptTerms: false,
    isAdult: false,
  };

  const handleSubmit = (values) => {
    console.log('Signup:', values, 'OTP:', otp.join(''));
    dispatch(signup(values));
  };

  const sendOtp = () => {
    setIsOtpSent(true);
    setTimer(60); // start 1 min timer
    setOtp(['', '', '', '', '', '']);
  };

  useEffect(() => {
    if (timer <= 0) return;
    const interval = setInterval(() => setTimer((prev) => prev - 1), 1000);
    return () => clearInterval(interval);
  }, [timer]);

  const handleOtpChange = (e, index) => {
    const value = e.target.value.replace(/\D/, ''); // only digits
    if (!value) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (index < 5) otpRefs.current[index + 1].focus();
  };

  const handleOtpBackspace = (e, index) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      otpRefs.current[index - 1].focus();
    }
  };

  return (
    <section className="flex bg-black text-white min-h-screen">
      {/* Left Side – Form */}
      <div className="w-full md:w-1/2 flex items-center justify-center px-8 py-12">
        <div className="w-full max-w-md">
          <img alt="logo" className="h-14 mb-4" src="./images/logo-rl.png" />
          <h2 className="text-2xl font-bold mb-2 text-left">
            Create an account
          </h2>
          <p className="text-gray-400 text-sm mb-6 text-left">
            Lorem ipsum dolor sit amet consectetur.
          </p>

          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ values, handleChange }) => (
              <Form className="flex flex-col gap-4 text-black">
                <div className="flex gap-3">
                  <CustomInput
                    name="firstName"
                    label="First name*"
                    placeholder="First name"
                  />
                  <CustomInput
                    name="lastName"
                    label="Last name*"
                    placeholder="Last name"
                  />
                </div>

                <CustomInput
                  name="username"
                  label="Username*"
                  placeholder="Enter your username"
                />

                <div>
                  <label className=" text-sm font-medium text-white mb-1">
                    Email or mobile*
                  </label>
                  <div className="relative flex gap-2">
                    <input
                      type="text"
                      name="contact"
                      value={values.contact}
                      onChange={handleChange}
                      placeholder="Enter your email, mobile"
                      className="w-full rounded-lg px-3 py-2 outline-none border border-gray-300"
                    />
                    <button
                      type="button"
                      disabled={timer > 0}
                      onClick={sendOtp}
                      className={`absolute right-1 top-1 px-4 py-1 flex justify-center gap-2 rounded-lg font-semibold ${
                        timer > 0
                          ? 'bg-green-600 text-black '
                          : 'bg-yellow-500 cursor-not-allowed'
                      }`}
                    >
                      {timer === 0 ? (
                        <div className="flex items-center gap-1">
                          <span>OTP</span>
                          <FaRegArrowAltCircleRight size={20} />
                        </div>
                      ) : (
                        <div className="flex items-center gap-1">
                          <span>Sent</span>
                          <BiMessageCheck size={20} />
                        </div>
                      )}
                    </button>
                  </div>

                  {sentOtp && (
                    <div className="m-2">
                      <div>
                        {timer === 0 ? (
                          <Link
                            onClick={sendOtp}
                            className="block text-red-500 text-right"
                          >
                            {' '}
                            Resent again
                          </Link>
                        ) : (
                          <span className="block text-red-500 text-right">
                            {' '}
                            Resent in {timer}s
                          </span>
                        )}
                        <div className="flex gap-4 mt-2 sm:justify-center">
                          {otp.map((digit, index) => (
                            <input
                              key={index}
                              ref={(el) => (otpRefs.current[index] = el)}
                              type="text"
                              maxLength={1}
                              value={digit}
                              onChange={(e) => handleOtpChange(e, index)}
                              onKeyDown={(e) => handleOtpBackspace(e, index)}
                              className="w-12 h-14 text-center rounded border border-gray-400"
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                <CustomInput
                  name="password"
                  label="Password*"
                  type="password"
                  showToggle
                  placeholder="Enter your password"
                />

                <div className="flex flex-col gap-2 text-sm text-white">
                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      name="acceptTerms"
                      checked={values.acceptTerms}
                      onChange={handleChange}
                      className="accent-yellow-500"
                    />
                    I accept{' '}
                    <span className="text-yellow-500 cursor-pointer">
                      Terms of Use
                    </span>{' '}
                    &{' '}
                    <span className="text-yellow-500 cursor-pointer">
                      Privacy Policy
                    </span>
                    .
                  </label>

                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      name="isAdult"
                      checked={values.isAdult}
                      onChange={handleChange}
                      className="accent-yellow-500"
                    />
                    I am already{' '}
                    <span className="text-yellow-500 cursor-pointer">
                      18 years
                    </span>{' '}
                    old.
                  </label>
                </div>

                <button
                  type="submit"
                  className="mt-4 bg-gradient-to-r from-yellow-400 to-[#ab373711] text-black font-semibold py-3 rounded-full hover:opacity-90 transition"
                >
                  Create account
                </button>

                <p className="text-center text-sm text-gray-400 mt-2">
                  Already have an account?{' '}
                  <Link to="/login" className="text-yellow-500 cursor-pointer">
                    Login
                  </Link>
                </p>
              </Form>
            )}
          </Formik>
        </div>
      </div>

      {/* Right Side – Banner */}
      <div
        className="hidden md:flex w-1/2 relative items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: 'url("/images/cosmic.jpg")' }}
      >
        <div className="absolute top-10 left-0">
          <h2 className="text-3xl font-bold">Welcome to Royal Mega Limited!</h2>
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
