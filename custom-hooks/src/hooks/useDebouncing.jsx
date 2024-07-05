import { useEffect,useState } from "react";

export const useDebouncing = (input, value) => {
  const [debouncingValue, setDebouncing] = useState(input);

  useEffect(() => {

    const timeout = setTimeout(() => {
      setDebouncing(input)
    },value)

    return () => {
      clearTimeout(timeout)
    }
  },[input])

  return debouncingValue
}