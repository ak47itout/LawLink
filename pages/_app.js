import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "../styles/globals.css";
import { useEffect, useState, createContext } from "react";
import { checkLoggedIn } from "../utils/checkLoggedIn.js";
import { useRouter } from "next/router";
import { checkRoute } from "../utils/manageRoute";
import { ThemeProvider } from "@material-tailwind/react";

export const UserContext = createContext({});

function MyApp({ Component, pageProps }) {
  const [loggedIn, setLoggedIn] = useState(false);
  const router = useRouter();
  const user = useState();

  const checkAuthorization = async () => {
    const userAuthorized = checkRoute(router.asPath);
    if (!userAuthorized) {
      const loggedIn = await checkLoggedIn();
      if (!loggedIn) router.push("/login");
      else {
        user[1]({ userType: loggedIn });
      }
    }
  };

  useEffect(() => {
    checkAuthorization();
  }, []);

  return (
    <div className="bg-gray-50">
      <UserContext.Provider value={user}>
        <ThemeProvider>
          <Navbar />
          <Component {...pageProps} />
          <Footer />
        </ThemeProvider>
      </UserContext.Provider>
    </div>
  );
}

export default MyApp;
