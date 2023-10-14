import {
  Button,
  Tab,
  TabPanel,
  Tabs,
  TabsBody,
  TabsHeader,
  Typography,
} from '@material-tailwind/react';
import axios from 'axios';
import Link from 'next/link';
import React from 'react';
import { useState, useEffect, useContext } from 'react';
import ClientCards from '../components/dashboard/ClientCards';
import { USER } from '../constants/user';
import { UserContext } from './_app.js';

function Dashboard() {
  const [caseData, setCaseData] = useState({});
  const [userContext, setUserContext] = useContext(UserContext);
  const [myCases, setMyCases] = useState([]);
  const [tabData, setTabData] = useState([]);
  const lawyerData = [
    {
      label: 'RECOMMENDED',
      value: 'recommended',
    },
    // {
    //   label: 'ALL CASES',
    //   value: 'allCases',
    // },
  ];
  const clientData = [
    {
      label: 'ALL CASES',
      value: 'allCases',
    },
  ];

  const fetchLawyerSide = async () => {
    setTabData(lawyerData);
    const recommended = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/case/lawyer`,
      {
        headers: {
          token: localStorage.getItem('LAWKIT_TOKEN'),
        },
      }
    );
    const allCases = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/case/`,
      {
        headers: {
          token: localStorage.getItem('LAWKIT_TOKEN'),
        },
      }
    );
    setCaseData({
      recommended: recommended.data.content,
      allCases: allCases.data.content,
    });
  };

  const fetchClientSide = async () => {
    setTabData(clientData);
    const clientCases = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/case/client/id`,
      {
        headers: {
          token: localStorage.getItem('LAWKIT_TOKEN'),
        },
      }
    );
    setMyCases(clientCases.data.content);
  };

  console.log(caseData);

  useEffect(() => {
    if (userContext) {
      if (userContext.userType === USER.LAWYER) fetchLawyerSide();
      else fetchClientSide();
    }
  }, [userContext]);

  return (
    <div className="text-black w-[100vw] min-h-[60vh]">
      <div className="w-[90vw] md:w-[800px] m-auto mt-10 mb-10  pb-10">
        <div className="text-center md:text-left">
          <Typography variant="h1">Dashboard</Typography>
          <Typography>
            Find all applied and recommended cases at one place
          </Typography>
        </div>
        {userContext && userContext.userType === USER.CLIENT && (
          <div className="text-center md:text-left">
            <Link href="/case/create">
              <Button className="mt-4 mb-4" variant="gradient">
                ADD NEW CASE
              </Button>
            </Link>
          </div>
        )}
        {caseData.recommended && caseData.allCases && (
          <Tabs value="recommended" className="mt-5">
            <TabsHeader>
              {tabData.map(({ label, value }) => (
                <Tab key={value} value={value}>
                  {label}
                </Tab>
              ))}
            </TabsHeader>
            <TabsBody>
              {tabData.map(({ value }) => {
                return (
                  <TabPanel key={value} value={value}>
                    <div>
                      {caseData[value].map((caseDetails, index) => {
                        return (
                          <ClientCards
                            key={`CASE_DETAILS_${index}`}
                            data={caseDetails}
                          />
                        );
                      })}
                    </div>
                  </TabPanel>
                );
              })}
            </TabsBody>
          </Tabs>
        )}
        {userContext && userContext.userType === USER.CLIENT && (
          <div className="mt-10">
            <Typography variant="h5">Active cases:</Typography>
            {myCases.map((caseDetails, index) => {
              return (
                <ClientCards key={`CASE_DETAILS_${index}`} data={caseDetails} />
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default Dashboard;
