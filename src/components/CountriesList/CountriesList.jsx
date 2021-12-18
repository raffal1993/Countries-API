import React, { useContext } from "react";
import CountryItem from "components/CountryItem/CountryItem";
import { CountriesContext } from "providers/CountriesProvider";
import { Wrapper } from "./CountriesList.style";

const CountriesList = () => {
    const countries = useContext(CountriesContext);

    console.log(countries);

    return (
        <Wrapper>
            {countries.splice(11, 20).map((country) => (
                <CountryItem
                    key={country.alpha3Code}
                    country={country}
                ></CountryItem>
            ))}
        </Wrapper>
    );
};

export default CountriesList;
