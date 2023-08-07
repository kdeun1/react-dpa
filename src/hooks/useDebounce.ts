import { useState, useEffect } from 'react'

const useDebounce = (value: string | null, delay: number) => {
  const [dValue, setDValue] = useState<string | null>(value);

  useEffect(
    () => {
      const handler = setTimeout(() => {
        setDValue(value);
      }, delay);

      return () => {
        clearTimeout(handler);
      }
    },
    [value, delay]
  );

  return dValue;
}

export default useDebounce