import { endpoints } from "./endpoints";
import { useCustomMutation, useCustomQuery } from "./queryHook";

export const useTodosQuery = (id = "") => {
  return useCustomQuery("todos", endpoints.todos, id);
};

export const useLoginMutation = () => {
  return useCustomMutation(endpoints.todos, "todos");
};
