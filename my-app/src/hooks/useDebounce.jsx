import { useEffect, useState } from "react";

export default function useDebounce(initialvalue = "", delay = 1000) {
  const [debounceValue, setDebounceValue] = useState(initialvalue);
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounceValue(initialvalue);
    }, delay);
    return () => {
      clearTimeout(timer);
    };
  }, [delay, initialvalue]);
  return debounceValue;
}
