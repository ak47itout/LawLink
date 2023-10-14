import { Button, Typography } from "@material-tailwind/react";
import axios from "axios";
import { useRouter } from "next/router";
import React, { useContext, useState } from "react";
import { SUCCESS } from "../../constants/status.code";
import { USER } from "../../constants/user";
import { UserContext } from "../../pages/_app.js";

function LawyerCard({ data, accepted }) {
  const [show, setShow] = useState(false);
  const [userContext, setUserContext] = useContext(UserContext);
  const router = useRouter();

  const acceptRequest = async () => {
    console.log(data);
    const acceptRequest = await axios.post(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/case/client/accept`,
      {
        lawyer: data.lawyer["_id"],
      },
      {
        headers: {
          token: localStorage.getItem("LAWKIT_TOKEN"),
          caseid: router.query.id,
        },
      }
    );
    if (acceptRequest.data.status === SUCCESS.LAWYER_REQUEST_SUCCESSFUL) {
      setShow(true);
    }
  };

  return (
    <div>
      <div
        className="p-4 mt-5 mb-5 hover:shadow-[grey] shadow-lg cursor-pointer flex justify-between flex-wrap items-center"
        style={{
          boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
          borderRadius: "5px",
        }}
      >
        <div>
          <Typography variant="h4">{data.lawyer.name}</Typography>
          {data.lawyer.expertise && (
            <div className="mt-1">
              {data.lawyer.expertise.map((tag, index) => (
                <div
                  key={`TAG_${index}`}
                  className="badge badge-primary p-3 badge-outline mt-1 mr-1"
                >
                  {tag}
                </div>
              ))}
            </div>
          )}
          <div className="flex mt-3">
            <Typography variant="h6">Location:</Typography>
            <Typography>{data.lawyer.location}</Typography>
          </div>
        </div>
        {userContext.userType === USER.CLIENT && !accepted && (
          <div>
            <Button onClick={acceptRequest} variant="gradient">
              ACCEPT
            </Button>
          </div>
        )}
      </div>
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
          <span class="font-medium">Accepted Successfully</span>
        </div>
      )}
    </div>
  );
}

export default LawyerCard;
