import { useEffect, useState, type DependencyList } from "react";

type UseAsyncReturn<Data> = {
  data?: Data;
  setData: React.Dispatch<React.SetStateAction<Data | undefined>>;
  isError: boolean;
  isLoading: boolean;
  error?: Error;
};

export const useAsync = <Data>(
  request: () => Promise<Data>,
  deps: DependencyList = [],
): UseAsyncReturn<Data> => {
  const [data, setData] = useState<Data | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState<Error | undefined>(undefined);

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const result = await request();
      setData(result);
      setIsError(false);
      setError(undefined);
      return result;
    } catch (e) {
      const err = e instanceof Error ? e : new Error(String(e));
      setError(err);
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, deps);

  return {
    data,
    setData,
    isLoading,
    isError,
    error,
  };
};
