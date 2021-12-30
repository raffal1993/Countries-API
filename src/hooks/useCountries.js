import { setCountries } from "actions/countries";
import {
    useGetAllCountriesQuery,
    useGetCountriesByNameQuery,
    useGetCountriesByRegionQuery
} from "actions/fetchData";
import { setName, setRegion } from "actions/inputs";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const useCountries = () => {
    const name = useSelector((state) => state.inputs.name);
    const region = useSelector((state) => state.inputs.region);
    const countries = useSelector((state) => state.countries.countries);

    const dispatch = useDispatch();

    const { data: dataName, isFetching: isFetchingName } =
        useGetCountriesByNameQuery(name, {
            skip: name.length < 2
        });

    const { data: dataRegion, isFetching: isFetchingRegion } =
        useGetCountriesByRegionQuery(region, {
            skip: !region
        });

    const { data: dataAll, isFetching: isFetchingAll } =
        useGetAllCountriesQuery();

    useEffect(() => {
        if (name.length < 2 && !region) dispatch(setCountries([]));
    }, [name, dispatch, region]);

    useEffect(() => {
        dispatch(setCountries(dataAll));
    }, [dataAll, dispatch]);

    useEffect(() => {
        if (region) {
            dispatch(setName(""));
            dispatch(setCountries(dataRegion));
        }
    }, [dataRegion, region, dispatch]);

    useEffect(() => {
        if (name) dispatch(setRegion(""));
        if (name.length >= 2) dispatch(setCountries(dataName));
    }, [dataName, name, dispatch]);

    return {
        name,
        region,
        countries,
        isFetchingAll,
        isFetchingName,
        isFetchingRegion
    };
};

export default useCountries;
