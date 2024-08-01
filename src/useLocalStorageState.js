import { useState, useEffect } from "react";

export function useLocalStorageState(initialValue, key) {
  const [value, setValue] = useState(function () {
    const storedValue = JSON.parse(localStorage.getItem(key)) || [];
    return storedValue;
  });
  // Store the watched movies in local storage whenever the watched state changes
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);

  return [value, setValue];
}
