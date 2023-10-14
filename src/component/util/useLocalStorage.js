import { useEffect, useState } from 'react';

function useLocalState(defaultValue, key) {
  const [nationalId, setNationalId] = useState(() => {
    const localStorageValue = localStorage.getItem(key);
    return localStorageValue !== null
      ? JSON.parse(localStorageValue)
      : defaultValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(nationalId));
  }, [key, nationalId]);
  return [nationalId, setNationalId];
}

export { useLocalState };
