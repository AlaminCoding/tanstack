import { useMutation, useQuery } from "@tanstack/react-query";

const queryFetcher = async (url) => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

export const useCustomQuery = (queryKey, url, id) => {
  const { isPending, data, error } = useQuery({
    queryKey: [`${queryKey}`],
    queryFn: () =>
      queryFetcher(`${process.env.NEXT_PUBLIC_HOST_API}${url}/${id}`),
  });
  return { isPending, data, error };
};

export const useCustomMutation = (url, key) => {
  return useMutation({
    mutationFn: (body) =>
      fetch("https://dummyjson.com/auth/login", {
        method: "POST",
        body: JSON.stringify(body),
        headers: {
          "Content-Type": "application/json",
        },
      }).then((res) => res.json()),
    onSuccess: (data) => {
      console.log("success", data);
    },
  });
};
