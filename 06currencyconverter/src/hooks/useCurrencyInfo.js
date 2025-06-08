import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
    const [data, setData] = useState({});

    useEffect(() => {
        if (!currency) return;

        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
            .then((res) => res.json())
            .then((res) => {
                setData(res[currency] || {});
                console.log("Fetched data:", res[currency]);
            })
            .catch((error) => console.error("Fetch error:", error));
    }, [currency]);

    return data;
}

export default useCurrencyInfo;
