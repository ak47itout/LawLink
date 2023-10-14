import axios from 'axios';
import { createContext, useContext, useEffect, useState } from 'react';
import Link from 'next/link';
import { SUCCESS } from '../constants/status.code';
import { UserContext } from './_app.js';
import { USER } from '../constants/user.js';
import Router from 'next/router';

const AuthContext = createContext(false);

const Login = () => {
  const [client, setClient] = useState(true);
  const [formInput, setFormInput] = useState({
    username: '',
    password: '',
  });
  const [userContext, setUserContext] = useContext(UserContext);

  const handleClientSubmit = async (e) => {
    e.preventDefault();
    console.log(formInput);
    console.log(e);
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/client/login`,
      {
        headers: {
          email: formInput.username,
          password: formInput.password,
        },
      }
    );
    // console.log(response.data.status);
    if (response.data.status === SUCCESS.CLIENT_LOGIN_SUCCESSFUL) {
      localStorage.setItem('LAWKIT_TOKEN', response.data.id);
      setUserContext({
        userType: USER.CLIENT,
      });
      Router.push({
        pathname: '/dashboard',
      });
    } else {
      alert('Error: ' + response.data.st);
    }
  };

  const handleLawyerSubmit = async (e) => {
    e.preventDefault();
    const response = await axios({
      method: 'GET',
      url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/lawyer/login`,
      headers: {
        email: formInput.username,
        password: formInput.password,
      },
    });

    if (response.data.status === SUCCESS.LAWYER_LOGIN_SUCCESSFUL) {
      localStorage.setItem('LAWKIT_TOKEN', response.data.id);
      setUserContext({
        userType: USER.LAWYER,
      });
      Router.push({
        pathname: '/dashboard',
      });
    } else {
      alert('Error: ' + response.data.status);
    }
  };

  return (
    <div className=" bg-gray-50 w-full my-12">
      <div className="flex flex-col items-center justify-center w-full md:w-3/4 mx-auto">
        <div className="tabs text-black flex flex-row justify-between space-x-6  py-3 px-6 rounded-lg mb-5">
          {/* {client === false ? ( */}
          <button
            onClick={() => setClient(true)}
            className={`tab px-3 text-2xl font-semibold ${
              client ? 'tab-active border-b-2 text-indigo-600' : 'text-gray-400'
            }`}
          >
            Client
          </button>
          {/* ) : ( */}
          <button
            onClick={() => setClient(false)}
            className={`tab px-3 text-2xl font-semibold ${
              !client
                ? 'tab-active border-b-2 text-indigo-600'
                : 'text-gray-400'
            }`}
          >
            Lawyer
          </button>
          {/* )} */}
        </div>
        <div className="w-full mx-2 md:w-2/3 ">
          {client === true ? (
            <div className="bg-white p-6 flex flex-col items-center border border-primary m-2 rounded-md">
              <h1 className="text-black font-semibold text-3xl">
                Client Login
              </h1>
              <form
                className="m-8 space-y-6 w-3/4"
                action="#"
                method="POST"
                onSubmit={handleClientSubmit}
              >
                <input type="hidden" name="remember" defaultValue="true" />
                <div className="-space-y-px rounded-md shadow-sm ">
                  <div>
                    <label htmlFor="email-address" className="sr-only">
                      Email address
                    </label>
                    <input
                      id="email-address"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      onChange={(e) =>
                        setFormInput({
                          ...formInput,
                          username: e.target.value,
                        })
                      }
                      className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-4 py-3 text-gray-900 bg-inherit placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      placeholder="Email address"
                    />
                  </div>
                  <div>
                    <label htmlFor="password" className="sr-only">
                      Password
                    </label>
                    <input
                      id="password"
                      name="password"
                      type="password"
                      autoComplete="current-password"
                      required
                      onChange={(e) =>
                        setFormInput({
                          ...formInput,
                          password: e.target.value,
                        })
                      }
                      className="relative block w-full bg-inherit appearance-none rounded-none rounded-b-md border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      placeholder="Password"
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="text-sm">
                    <Link
                      href="/register"
                      className="font-medium text-indigo-600 hover:text-indigo-500"
                    >
                      New User? Register.
                    </Link>
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                        />
                      </svg>
                    </span>
                    Log in
                  </button>
                </div>
              </form>
            </div>
          ) : (
            <div className="bg-white m-2 rounded-md border border-primary p-6 flex flex-col items-center">
              <h1 className="text-black font-semibold text-3xl">
                Lawyer Login
              </h1>
              <form
                className="m-8 space-y-6 w-3/4"
                action="#"
                method="POST"
                onSubmit={handleLawyerSubmit}
              >
                <input type="hidden" name="remember" defaultValue="true" />
                <div className="-space-y-px rounded-md shadow-sm ">
                  <div>
                    <label htmlFor="email-address" className="sr-only">
                      Email address
                    </label>
                    <input
                      id="email-address"
                      name="email"
                      type="email"
                      autoComplete="email"
                      onChange={(e) =>
                        setFormInput({
                          ...formInput,
                          username: e.target.value,
                        })
                      }
                      required
                      className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-4 py-3 text-gray-900 bg-inherit placeholder-gray-500 focus:z-10 focus:border-gray-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      placeholder="Email address"
                    />
                  </div>
                  <div>
                    <label htmlFor="password" className="sr-only">
                      Password
                    </label>
                    <input
                      id="password"
                      name="password"
                      type="password"
                      autoComplete="current-password"
                      onChange={(e) =>
                        setFormInput({
                          ...formInput,
                          password: e.target.value,
                        })
                      }
                      required
                      className="relative block w-full bg-inherit appearance-none rounded-none rounded-b-md border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-gray-500 focus:outline-none focus:ring-indigo-100 sm:text-sm"
                      placeholder="Password"
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="text-sm">
                    <Link
                      href="/register"
                      className="font-medium text-indigo-600 hover:text-indigo-500"
                    >
                      New User? Register.
                    </Link>
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                        />
                      </svg>
                    </span>
                    Log In
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
