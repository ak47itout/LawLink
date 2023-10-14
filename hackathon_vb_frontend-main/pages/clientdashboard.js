import { useState } from 'react';
import CaseCard from '.././components/CaseCard';

const ClientDashboard = () => {
  const [caseStatus, setCaseStatus] = useState('Active');
  const [caseTab, setCaseTab] = useState(false);

  const handleActiveCase = () => {
    setCaseTab(false);
    setCaseStatus('Active');
  };

  const handleNewCase = () => {
    setCaseTab(true);
    setCaseStatus('New');
  };

  return (
    <div className="min-h-screen text-black bg-gray-50">
      <div className="w-[90%] md:w-[85%] lg:w-[80%] mx-auto flex flex-col justify-center items-center min-h-full">
        <h1 className="text-5xl font-bold text-primary my-8 font-mons">
          Dashboard
        </h1>
        <div className="min-h-full rounded-md w-full bg-white flex flex-col justify-between items-center p-8">
          <div className="flex flex-row w-full justify-between items-center space-x-5">
            <button
              className={`basis-1/2 text-center p-2 font-semibold  shadow-lg  rounded-md text-lg cursor-pointer ${
                !caseTab ? 'bg-primary text-white' : ''
              }`}
              onClick={handleActiveCase}
            >
              Active Cases
            </button>
            <button
              className={`basis-1/2 text-center p-2 font-semibold  shadow-lg  rounded-md text-lg cursor-pointer
                ${caseTab ? 'bg-primary text-white' : ''}`}
              onClick={handleNewCase}
            >
              Present Your Case
            </button>
          </div>
          {caseStatus === 'Active' && (
            <div className="min-h-[60vh] my-6 w-2/3">
              <CaseCard />
            </div>
          )}
          {caseStatus === 'New' && (
            <div className="min-h-[60vh] my-6">
              <CaseCard />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ClientDashboard;
