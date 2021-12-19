import React, { useEffect, useState } from "react";
import CountryItem from "components/CountryItem/CountryItem";
import { Wrapper } from "./CountriesList.style";
import { useSelector } from "react-redux";
import {
    useGetCountriesByRegionQuery,
    useGetCountriesByNameQuery
} from "actions/fetchCountries";
import { useDispatch } from "react-redux";
import { setName } from "actions/countriesSlice";

const CountriesList = () => {
    const name = useSelector((state) => state.countries.name);
    const region = useSelector((state) => state.countries.region);

    const [countries, setCountries] = useState([]);
    const dispatch = useDispatch();

    const { data: dataName, isFetching: isFetchingName } =
        useGetCountriesByNameQuery(name, {
            skip: name.length < 2
        });

    const { data: dataRegion, isFetching: isFetchingRegion } =
        useGetCountriesByRegionQuery(region, {
            skip: !region
        });

    useEffect(() => {
        if (!region) return;
        dispatch(setName(""));
        setCountries(dataRegion);
    }, [dataRegion, region, dispatch]);

    useEffect(() => {
        if (name.length < 2) return;
        setCountries(dataName);
    }, [dataName, name]);

    return (
        <Wrapper>
            {name.length < 2 && !region ? (
                <h1>Please choose region or type name to find a country</h1>
            ) : isFetchingName || isFetchingRegion ? (
                <h1>LOADING...</h1>
            ) : countries?.status === 404 ? (
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
