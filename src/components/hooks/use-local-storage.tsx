import { useEffect, useState } from "react";

function getSavedValue(key: string, initialValue: any) {
  const savedValue = JSON.parse(localStorage.getItem(key)!);

  if (savedValue) return savedValue;

  if (initialValue instanceof Function) return initialValue();

  return initialValue;
}

function useLocalStorage(key: string, initialValue: any) {
  const [value, setValue] = useState(() => getSavedValue(key, initialValue));

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue] as const;
}

export default useLocalStorage;
