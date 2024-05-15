import { useContext, useEffect, useState } from "react";
import { ToggleContext } from "../Context/ToggleProvider";

const useDebounce = (value, delay = 500) => {
  const { search, setSearch } = useContext(ToggleContext);
  const [debouncedValue, setDebouncedValue] = useState(search);

  useEffect(() => {
    const id = setTimeout(() => {
      setDebouncedValue(search);
    }, delay);

    return () => {
      clearTimeout(id);
    };
  }, [search, delay]);

  return debouncedValue;
};
export default useDebounce;
