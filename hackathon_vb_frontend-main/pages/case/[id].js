import { Alert, Button, Chip, Typography } from "@material-tailwind/react";
import axios from "axios";
import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";
import LawyerCard from "../../components/case/lawyerCard";
import { SUCCESS } from "../../constants/status.code";
import { USER } from "../../constants/user";
import { UserContext } from "../_app.js";

function Case({ accepted }) {
  const router = useRouter();
  const [userContext, setUserContext] = useContext(UserContext);
  const [caseDetails, setCaseDetails] = useState({});
  const [show, setShow] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const fetchCaseDetails = async () => {
    if (userContext.userType === USER.CLIENT) {
      const caseResponse = await axios.get(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/case/id/check`,
        {
          headers: {
            token: localStorage.getItem("LAWKIT_TOKEN"),
            caseid: router.query.id,
          },
        }
      );

      console.log(caseResponse.data);
      if (
        caseResponse.data.content &&
        caseResponse.data.status === SUCCESS.CLIENT_CASE_FETCH_SUCCESSFUL
      )
        setCaseDetails(caseResponse.data.content);
      if (!caseResponse.data.content && caseResponse.data.status)
        router.push("/dashboard");
    } else {
      const caseResponse = await axios.get(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/case/id`,
        {
          headers: {
            token: localStorage.getItem("LAWKIT_TOKEN"),
            caseid: router.query.id,
          },
        }
      );
      if (caseResponse.data.status === SUCCESS.CLIENT_CASE_FETCH_SUCCESSFUL)
        setCaseDetails(caseResponse.data.content);
    }
  };

  useEffect(() => {
    if (router.query.id && userContext) fetchCaseDetails();
  }, [router.query, userContext]);

  const requestCase = async () => {
    console.log(localStorage.getItem("LAWKIT_TOKEN"), router.query.id);
    const request = await axios.post(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/case/lawyer/request`,
      {},
      {
        headers: {
          token: localStorage.getItem("LAWKIT_TOKEN"),
          caseid: router.query.id,
        },
      }
    );
    if (request.data.status === SUCCESS.LAWYER_REQUEST_SUCCESSFUL) {
      if (request.data.content) {
        setModalMessage("Request Successfully added");
      } else {
        setModalMessage("Request Already Added earlier");
      }
      setShow(true);
    }
  };

  console.log(caseDetails);

  return (
    <div>
      <div className="text-black w-[100vw] min-h-[60vh]">
        <div className="w-[90vw] md:w-[800px] m-auto mt-10 mb-10 ">
          <Typography variant="h3" className="mb-5">
            {caseDetails.caseName}
          </Typography>
          <Typography variant="h5" className="mb-3">
            Tags:
          </Typography>
          {caseDetails.caseTags && (
            <div className="mb-5">
              {caseDetails.caseTags.map((tag, index) => (
                <div
                  key={`TAG_${index}`}
                  className="badge badge-primary p-3 badge-outline"
                >
                  {tag}
                </div>
              ))}
            </div>
          )}
          <Typography variant="h5" className="mb-3">
            Description:
          </Typography>
          <Typography className="mb-5">
            {caseDetails.caseDescription}
          </Typography>
          <Typography variant="h5" className="mb-3">
            Lawyer:
          </Typography>
          <Typography className="mb-5">
            {caseDetails.lawyer ? (
              <LawyerCard accepted={true} data={caseDetails} />
            ) : (
              "No lawyers on this case till now"
            )}
          </Typography>
          <Typography variant="h5" className="mb-3">
            Lawyers Interested:
          </Typography>
          <div className="mb-5">
            {caseDetails.requests && caseDetails.requests.length ? (
              <div>
                {caseDetails.requests.map((lawyer, index) => (
                  // <div></div>
                  <LawyerCard key={`Lawyer_${index}`} data={lawyer} />
                ))}
              </div>
            ) : (
              <Typography>
                No lawyers interested to take this case at the moment
              </Typography>
            )}
          </div>
          {userContext && userContext.userType === USER.LAWYER && (
            <div className="text-center md:text-left">
              <Button onClick={requestCase} variant="gradient">
                I AM INTERESTED
              </Button>
            </div>
          )}
          {show && (
            <div
              class=" mt-4 p-4 mb-4 text-sm text-green-700 flex gap-3 bg-green-100 rounded-lg dark:bg-green-200 dark:text-green-800"
              role="alert"
            >
              <svg
                class="flex-shrink-0 w-5 h-5 text-green-700"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span class="font-medium">{modalMessage}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Case;
