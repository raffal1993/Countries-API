import React, { useEffect, createContext, useState } from "react";
import axios from "axios";

export const CountriesContext = createContext([]);

const CountriesProvider = ({ children }) => {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        axios
            .get(process.env.REACT_APP_API_URL)
            .then((res) => setCountries(res.data));
    }, []);
    return (
        <CountriesContext.Provider value={countries}>
            {children}
        </CountriesContext.Provider>
    );
};

export default CountriesProvider;
