"use client";

import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

const Login = () => {
  const router = useRouter();

  const handleLogin = () => {
    Cookies.set("access_token", "1234567");
    router.push("/");
  };
  return <button onClick={() => handleLogin()}>Login</button>;
};

export default Login;
