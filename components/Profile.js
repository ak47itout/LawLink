import Link from 'next/link';
import { HomeData } from '../constants/homeData';

const Profile = () => {
  return (
    <div className="flex flex-col space-y-12 md:space-y-0 space-x-0 md:space-x-5 md:flex-row mx-auto max-w-screen-3xl px-4 py-8 sm:px-6 sm:py-16 lg:px-8 text-black">
      {HomeData.profile.map((data) => (
        <div
          className="flex flex-col items-center border border-primary p-2 md:p-4 lg:p-6"
          key={data.key}
        >
          <h2 className="text-center text-3xl font-bold tracking-tight sm:text-4xl pb-6">
            {data.title}
          </h2>
          <div className="text-center px-2 md:px-5">
            {data.content.map((para) => (
              <p key={para.key} className="text-justify">
                {para.text}
              </p>
            ))}
          </div>
          <Link href={data.href}>
            <div className="bg-primary px-8 py-3 inline-block text-white mx-auto mt-5 font-bold hover:text-lg">
              {data.btn}
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Profile;
