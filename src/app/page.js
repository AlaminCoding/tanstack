"use client";
import { useState } from "react";
import { useLoginMutation, useTodosQuery } from "@/store/store";
export default function Home() {
  const [email, setEmail] = useState("");

  const { isPending, data, error } = useTodosQuery(1);

  const { data: loginData, mutateAsync, isSuccess } = useLoginMutation();

  const checkPost = async () => {
    mutateAsync({
      username: "emilys",
      password: "emilyspass",
    });
  };

  return (
    <>
      <button onClick={checkPost}>CHECK</button>
      <h2>{isSuccess && loginData.email}</h2>
    </>
  );
}
