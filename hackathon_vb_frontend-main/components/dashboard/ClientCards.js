import { Typography } from "@material-tailwind/react";
import Link from "next/link";
import React from "react";

function ClientCards({ data }) {
  return (
    <Link href={`/case/${data["_id"]}`}>
      <div
        className="p-4 mt-5 mb-5 hover:shadow-[grey] shadow-lg cursor-pointer"
        style={{
          // boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
          borderRadius: "5px",
        }}
      >
        <Typography variant="h4">{data.caseName}</Typography>
        <Typography>{data.caseDescription}</Typography>
      </div>
    </Link>
  );
}

export default ClientCards;
