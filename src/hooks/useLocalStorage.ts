import { useEffect, useState } from "react";

function getInitialState<T>(key: string, defaultValue: T | (() => T)) {
  try {
    const jsonValue = window.localStorage.getItem(key);
    if (jsonValue) {
      return JSON.parse(jsonValue);
    }
    return defaultValue instanceof Function
      ? (defaultValue as () => T)()
      : defaultValue;
  } catch (error) {
    console.log(error);
    return defaultValue instanceof Function
      ? (defaultValue as () => T)()
      : defaultValue;
  }
}

export function useLocalStorage<T>(key: string, defaultValue: T | (() => T)) {
  const [state, setState] = useState<T>(getInitialState(key, defaultValue));

  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(state));
    } catch (error) {
      console.log(error);
    }
  }, [key, state]);

  return [state, setState] as [typeof state, typeof setState];
}
