import React from "react";
import CountryItem from "components/CountryItem/CountryItem";
import { Wrapper } from "./CountriesList.style";
import useCountries from "hooks/useCountries";

const CountriesList = () => {
    const {
        name,
        region,
        countries,
        isFetchingAll,
        isFetchingName,
        isFetchingRegion
    } = useCountries();

    const showInfo = name.length < 2 && !region && !countries?.length;
    const showLoading = isFetchingName || isFetchingRegion || isFetchingAll;
    const showError = countries?.status === 404;

    return (
        <Wrapper>
            {showInfo ? (
                <h1>
                    Please choose region or type name to find a country (min. 2
                    characters)
                </h1>
            ) : showLoading ? (
                <h1>LOADING...</h1>
            ) : showError ? (
                <h1>ERROR: No Countries Found</h1>
            ) : (
                countries?.map((country) => (
                    <CountryItem
                        key={country.alpha3Code}
                        country={country}
                    ></CountryItem>
                ))
            )}
        </Wrapper>
    );
};

export default CountriesList;
