import { useEffect, useState } from "react";

function useCurrencyinfo(currency) {
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`
        );
        const res = await response.json();
        setData(res[currency]);
      } catch (error) {
        console.error('Error fetching currency info:', error);
      }
    };

    fetchData();

    // Cleanup function
    return () => {
      // Perform any necessary cleanup here
    };
  }, [currency]);

  return data;
}

export default useCurrencyinfo;
