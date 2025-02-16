import { useState } from "react";

export const useLocalStorage = <T>(key: string) => {
  const [local, setLocal] = useState(
    JSON.parse(localStorage.getItem(key) || "[]")
  );

  const localChange = (value: T) => {
    localStorage.setItem(key, JSON.stringify(value));
    setLocal(value);
  };

  return [local, localChange];
};
