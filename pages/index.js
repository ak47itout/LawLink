import Link from 'next/link';
import { HomeHero } from '../components/HomeHero';
import Profile from '../components/Profile';
import TopLawyers from '../components/TopLawyers';

const Home = () => {
  return (
    <div className="bg-gray-50 min-h-screen text-lg">
      <HomeHero />
      <Profile />
      <div className="flex text-black justify-content text-lg pb-16 mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-screen-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Find the perfect lawyer for you with our state of the art matching
            algorithm
          </h1>
          <p className="max-w-l mt-12">
            Our no-hassle and cost-free method connects you with pre-vetted
            legal counsel in a matter of minutes. Your case is presented to
            local attorneys that specialise in your chosen area of law as soon
            as you submit it via email. Your case is examined and analysed
            within 24 hours, and if a lawyer is interested in representing you,
            you&apos;ll receive a detailed profile and bio of that person within
            that time frame as well.
          </p>
          <p>
            Our no-hassle and cost-free method connects you with pre-vetted
            legal counsel in a matter of minutes. Your case is presented to
            local attorneys that specialise in your chosen area of law as soon
            as you submit it via email. Your case is examined and analysed
            within 24 hours, and if a lawyer is interested in representing you,
            you&apos;ll receive a detailed profile and bio of that person within
            that time frame as well.
          </p>
          <p>
            Our no-hassle and cost-free method connects you with pre-vetted
            legal counsel in a matter of minutes. Your case is presented to
            local attorneys that specialise in your chosen area of law as soon
            as you submit it via email. Your case is examined and analysed
            within 24 hours, and if a lawyer is interested in representing you,
            you&apos;ll receive a detailed profile and bio of that person within
            that time frame as well.
          </p>
        </div>
      </div>

      <TopLawyers />
    </div>
  );
};

export default Home;
