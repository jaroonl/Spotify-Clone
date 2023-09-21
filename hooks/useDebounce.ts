import { useEffect, useState } from "react";

//when typing, will use useDebounce to only get results after 500ms
// of user not tpying anything, will not reuse api calls
function useDebounce<T>(value: T, delay?: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay || 500);
    //timer with timeout of a delay(can pass or change), default is 500ms

    return () => {
      clearTimeout(timer);
    };
    //clearTimeout so there is no overflow
  }, [value, delay]);

  return debouncedValue;
}

export default useDebounce;
