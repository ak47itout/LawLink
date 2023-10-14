import { Button, Typography } from '@material-tailwind/react';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const Navbar = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLoggedOut = () => {
    localStorage.removeItem('LAWKIT_TOKEN');
  };

  console.log(loggedIn);

  useEffect(() => {
    // localStorage.removeItem('LAWKIT_TOKEN');
    const token = localStorage.getItem('LAWKIT_TOKEN');
    if (token) {
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }
    console.log(token);
  }, []);

  return (
    <div className=" bg-gray-100 text-black shadow-sm">
      <div className="navbar w-[96%] mx-auto">
        <div className="flex-1">
          <Link href="/">
            <Typography variant="h2">LawKit</Typography>
          </Link>
        </div>
        <div className="flex gap-3 flex-row items-center justify-between space-x-5">
          <Link href="/dashboard">
            <Typography>Dashboard</Typography>
          </Link>
          <Link href="/blogs">
            <Typography>Blogs</Typography>
          </Link>
          {!loggedIn ? (
            <Link href="/login">
              <Button variant="gradient">Login</Button>
            </Link>
          ) : (
            <Link href="/login">
              <Button variant="gradient" onClick={handleLoggedOut}>
                Logout
              </Button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
