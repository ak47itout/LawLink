import axios from "axios";
import { SUCCESS } from "../constants/status.code";

export const validateToken = async (token) => {
  const validation = await axios.get(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/verify`,
    {
      headers: { token: token },
    }
  );
  if (validation.data.status === SUCCESS.TOKEN_VALIDATION_SUCCESSFUL)
    return validation.data.userType;
  else return false;
};

export const checkLoggedIn = () => {
  const token = localStorage.getItem("LAWKIT_TOKEN");
  if (token) return validateToken(token);
  else return false;
};
