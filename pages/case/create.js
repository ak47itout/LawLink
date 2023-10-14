import Link from "next/link";
import { useState } from "react";
import Select from "react-select";
import axios from "axios";
import { success } from "daisyui/src/colors";
import { SUCCESS } from "../../constants/status.code";
import { useRouter } from "next/router";

const Create = () => {
  const [formInput, setFormInput] = useState({
    caseName: "",
    caseDescription: "",
    caseTags: [],
  });
  const options = [
    { value: "FAMILY", label: "Family" },
    { value: "CRIMINAL", label: "Criminal" },
    { value: "FINANCES", label: "Finances" },
    { value: "GOVERNMENT", label: "Government" },
    { value: "IMMIGRATION", label: "Immigration" },
  ];
  const router = useRouter();

  const setExpertise = (e) => {
    const num = e.map((data) => {
      return data.value;
    });
    setFormInput({ ...formInput, caseTags: num });
  };

  const formSubmitHandler = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("LAWKIT_TOKEN");
    console.log(formInput);
    console.log(token);
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/case/`,
      {
        caseDetails: {
          caseTags: formInput.caseTags,
          caseName: formInput.caseName,
          caseDescription: formInput.caseDescription,
        },
      },
      {
        headers: {
          token: token,
        },
      }
    );
    if (response.data.status === SUCCESS.CASE_CREATE_SUCCESSFUL) {
      router.push("/dashboard");
    }
  };

  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center px-6 py-8 mx-auto md:h-screen lg:py-16 ">
        <p
          href="#"
          className="flex items-center mb-6 text-3xl font-semibold text-gray-900 dark:text-white"
        >
          Create new Case
        </p>
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-2xl xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <form
              className="space-y-4 md:space-y-6"
              onSubmit={formSubmitHandler}
            >
              <div>
                <label
                  for="subject"
                  className="block mb-2 text-md font-medium text-gray-900 dark:text-white"
                >
                  Case Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-md rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enter Subject"
                  required
                  onChange={(e) =>
                    setFormInput({
                      ...formInput,
                      caseName: e.target.value,
                    })
                  }
                />
              </div>
              <div>
                <label
                  for="description"
                  className="block mb-2 text-md font-medium text-gray-900 dark:text-white"
                >
                  Case Description
                </label>
                <textarea
                  type="description"
                  name="description"
                  id=""
                  placeholder="Enter description"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-md rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required=""
                  onChange={(e) =>
                    setFormInput({
                      ...formInput,
                      caseDescription: e.target.value,
                    })
                  }
                  rows="10"
                  cols="50"
                />
              </div>
              <label
                for="description"
                className="block text-md font-medium text-gray-900 dark:text-white"
              >
                Case Tags
              </label>
              <div>
                <Select
                  options={options}
                  isMulti
                  className="basic-multi-select -mt-4 "
                  classNamePrefix="select"
                  placeholder="Case Tags"
                  onChange={setExpertise}
                />
              </div>

              <div className="flex justify-center">
                <button type="submit">
                  <div className="font-semibold text-lg btn bg-primary border-none rounded-md text-white justify-center">
                    Submit
                  </div>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Create;
