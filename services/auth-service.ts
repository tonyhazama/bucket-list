import { AxiosResponse } from "axios";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { getInstance, routes, config } from ".";
import UserCredential from "../types/user-credential";

const login = async (userCredential: UserCredential) => {
  try {
    const response: AxiosResponse = await getInstance().post(
      routes.login(), userCredential
    );
    const userData = response.data;
    localStorage.setItem("user", JSON.stringify(userData));
    return [response.data, ];
  } catch (err) {
    return [, err];
  }
};

const getUserData = () => {
  const userData = localStorage.getItem("user");
  return userData ? JSON.parse(userData) : false;
};


export default function useAuth(reverse: boolean) {
  const router = useRouter();

  useEffect(() => {
    
    if (!reverse && !getUserData()) {
      router.push('/login'); 
    }
    
    if (getUserData()) {
      router.push('/'); 
    }

  }, []);
}

const logout = () => {
  localStorage.removeItem("user");
};



export { login, logout, getUserData, useAuth };