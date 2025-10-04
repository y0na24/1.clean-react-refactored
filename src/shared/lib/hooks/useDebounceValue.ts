import { useEffect, useState } from "react";

export const useDebounceValue = <Value>(value: Value, delay: number) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timerId: NodeJS.Timeout = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      if (timerId) {
        clearTimeout(timerId);
      }
    };
  }, [value]);

  return debouncedValue;
};
