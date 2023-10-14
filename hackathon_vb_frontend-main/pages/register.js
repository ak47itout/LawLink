import axios from "axios";
import { useContext, useState } from "react";
import Link from "next/link";
import { SUCCESS } from "../constants/status.code";
import { UserContext } from "./_app.js";
import { USER } from "../constants/user.js";
import Router from "next/router";
import Select from "react-select";

const options = [
  { value: "FAMILY", label: "Family" },
  { value: "CRIMINAL", label: "Criminal" },
  { value: "FINANCES", label: "Finances" },
  { value: "GOVERNMENT", label: "Government" },
  { value: "IMMIGRATION", label: "Immigration" },
];

const Register = () => {
  const [client, setClient] = useState(true);
  const [formInput, setFormInput] = useState({
    name: "",
    location: "",
    email: "",
    password: "",
    mobile: "",
    confirmPassword: "",
    bio: "",
    expertise: [],
  });
  const [userContext, setUserContext] = useContext(UserContext);
  const handleClientSubmit = async (e) => {
    e.preventDefault();
    // console.log
    if (formInput.password !== formInput.confirmPassword) {
      alert("Make sure that the passwords match in provided fields");
      return;
    }

    console.log(formInput);
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/client/register`,
      {
        clientDetails: {
          name: formInput.name,
          location: formInput.location,
          mobile: formInput.mobile,
          email: formInput.email,
          password: formInput.password,
        },
      }
    );
    if (response.data.status === SUCCESS.CLIENT_CREATE_SUCCESSFUL) {
      localStorage.setItem("LAWKIT_TOKEN", response.data.id);
      setUserContext({
        userType: USER.CLIENT,
      });
      Router.push({
        pathname: "/dashboard",
      });
    } else {
      alert("Error: " + response.data.status);
    }
  };
  const setExpertise = (e) => {
    const num = e.map((data) => {
      return data.value;
    });
    setFormInput({ ...formInput, expertise: num });
  };

  const handleLawyerSubmit = async (e) => {
    e.preventDefault();
    console.log(formInput);
    if (formInput.password !== formInput.confirmPassword) {
      alert("Make sure that the passwords match in provided fields");
      return;
    }

    console.log(formInput);
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/lawyer/register`,
      {
        lawyerDetails: {
          name: formInput.name,
          location: formInput.location,
          mobile: formInput.mobile,
          email: formInput.email,
          password: formInput.password,
          bio: formInput.bio,
          expertise: formInput.expertise,
        },
      }
    );
    if (response.data.status === SUCCESS.CLIENT_CREATE_SUCCESSFUL) {
      localStorage.setItem("LAWKIT_TOKEN", response.data.id);
      setUserContext({
        userType: USER.LAWYER,
      });
      Router.push({
        pathname: "/dashboard",
      });
    } else {
      alert("Error: " + response.data.status);
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
              client ? "tab-active border-b-2 text-indigo-600" : "text-gray-400"
            }`}
          >
            Client
          </button>
          {/* ) : ( */}
          <button
            onClick={() => setClient(false)}
            className={`tab px-3 text-2xl font-semibold ${
              !client
                ? "tab-active border-b-2 text-indigo-600"
                : "text-gray-400"
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
                Register Client
              </h1>
              <form
                className="m-8 space-y-6 w-3/4"
                action="#"
                method="POST"
                onSubmit={handleClientSubmit}
              >
                <input type="hidden" name="remember" defaultValue="true" />
                <div className="rounded-md shadow-sm space-y-3">
                  <div>
                    <label htmlFor="name" className="sr-only">
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      required
                      onChange={(e) =>
                        setFormInput({
                          ...formInput,
                          name: e.target.value,
                        })
                      }
                      className="relative block w-full appearance-none rounded-md border border-gray-300 px-4 py-3 text-gray-900 bg-inherit placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      placeholder="Name"
                    />
                  </div>
                  <div>
                    <label htmlFor="location" className="sr-only">
                      Location
                    </label>
                    <input
                      id="location"
                      name="location"
                      type="text"
                      autoComplete="location"
                      required
                      onChange={(e) =>
                        setFormInput({
                          ...formInput,
                          location: e.target.value,
                        })
                      }
                      className="relative block w-full appearance-none rounded-md border border-gray-300 px-4 py-3 text-gray-900 bg-inherit placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      placeholder="Location"
                    />
                  </div>
                  <div>
                    <label htmlFor="mobile" className="sr-only">
                      Mobile Number
                    </label>
                    <input
                      id="mobile"
                      name="mobile"
                      type="text"
                      autoComplete="mobile"
                      required
                      onChange={(e) =>
                        setFormInput({
                          ...formInput,
                          mobile: e.target.value,
                        })
                      }
                      className="relative block w-full appearance-none rounded-md border border-gray-300 px-4 py-3 text-gray-900 bg-inherit placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      placeholder="Mobile No."
                    />
                  </div>
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
                          email: e.target.value,
                        })
                      }
                      className="relative block w-full appearance-none rounded-md border border-gray-300 px-4 py-3 text-gray-900 bg-inherit placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
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
                      className="relative block w-full bg-inherit appearance-none rounded-md border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      placeholder="Password"
                    />
                  </div>
                  <div>
                    <label htmlFor="password" className="sr-only">
                      Confirm Password
                    </label>
                    <input
                      id="confirmPassword"
                      name="confirmPassword"
                      type="password"
                      autoComplete="confirm-password"
                      required
                      onChange={(e) =>
                        setFormInput({
                          ...formInput,
                          confirmPassword: e.target.value,
                        })
                      }
                      className="relative block w-full bg-inherit appearance-none rounded-md border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      placeholder="Confirm Password"
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="text-sm">
                    <Link
                      href="/login"
                      className="font-medium text-indigo-600 hover:text-indigo-500"
                    >
                      Existing User? Login.
                    </Link>
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    Register
                  </button>
                </div>
              </form>
            </div>
          ) : (
            <div className="bg-white p-6 flex flex-col items-center border border-primary m-2 rounded-md">
              <h1 className="text-black font-semibold text-3xl">
                Register Lawyer
              </h1>
              <form
                className="m-8 space-y-6 w-3/4"
                action="#"
                method="POST"
                onSubmit={handleLawyerSubmit}
              >
                <input type="hidden" name="remember" defaultValue="true" />
                <div className="rounded-md space-y-3">
                  <div>
                    <label htmlFor="name" className="sr-only">
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      required
                      onChange={(e) =>
                        setFormInput({
                          ...formInput,
                          name: e.target.value,
                        })
                      }
                      className="relative block w-full appearance-none rounded-md border border-gray-300 px-4 py-3 text-gray-900 bg-inherit placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      placeholder="Name"
                    />
                  </div>
                  <div>
                    <label htmlFor="location" className="sr-only">
                      Location
                    </label>
                    <input
                      id="location"
                      name="location"
                      type="text"
                      autoComplete="location"
                      required
                      onChange={(e) =>
                        setFormInput({
                          ...formInput,
                          location: e.target.value,
                        })
                      }
                      className="relative block w-full appearance-none rounded-md border border-gray-300 px-4 py-3 text-gray-900 bg-inherit placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      placeholder="Location"
                    />
                  </div>
                  <div>
                    <label htmlFor="mobile" className="sr-only">
                      Mobile Number
                    </label>
                    <input
                      id="mobile"
                      name="mobile"
                      type="text"
                      autoComplete="mobile"
                      required
                      onChange={(e) =>
                        setFormInput({
                          ...formInput,
                          mobile: e.target.value,
                        })
                      }
                      className="relative block w-full appearance-none rounded-md border border-gray-300 px-4 py-3 text-gray-900 bg-inherit placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      placeholder="Mobile No."
                    />
                  </div>
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
                          email: e.target.value,
                        })
                      }
                      className="relative block w-full appearance-none rounded-md border border-gray-300 px-4 py-3 text-gray-900 bg-inherit placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
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
                      className="relative block w-full bg-inherit appearance-none rounded-md border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      placeholder="Password"
                    />
                  </div>
                  <div>
                    <label htmlFor="confirmPassword" className="sr-only">
                      Password
                    </label>
                    <input
                      id="lawyerConfirmPassword"
                      name="lawyerPassword"
                      type="password"
                      autoComplete="confirm-password"
                      required
                      onChange={(e) =>
                        setFormInput({
                          ...formInput,
                          confirmPassword: e.target.value,
                        })
                      }
                      className="relative block w-full bg-inherit appearance-none rounded-md border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      placeholder="Confirm Password"
                    />
                  </div>
                  <div>
                    <label htmlFor="bio" className="sr-only">
                      Bio
                    </label>
                    <textarea
                      id="bio"
                      name="bio"
                      type="text"
                      rows={3}
                      autoComplete="current-bio"
                      required
                      onChange={(e) =>
                        setFormInput({
                          ...formInput,
                          bio: e.target.value,
                        })
                      }
                      className="relative block w-full bg-inherit appearance-none rounded-md border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      placeholder="Your Bio"
                    />
                  </div>
                  <div className="text-black">
                    <Select
                      options={options}
                      isMulti
                      className="basic-multi-select"
                      classNamePrefix="select"
                      placeholder="Your Expertise"
                      onChange={setExpertise}
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="text-sm">
                    <Link
                      href="/login"
                      className="font-medium text-indigo-600 hover:text-indigo-500"
                    >
                      Existing User? Login.
                    </Link>
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    Register
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

export default Register;
