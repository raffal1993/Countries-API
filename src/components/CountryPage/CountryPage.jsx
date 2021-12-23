import React from "react";
import { Button, Wrapper } from "./CountryPage.style";
import { Link } from "react-router-dom";
import { useGetCountryQuery } from "actions/fetchCountries";
import { useSelector } from "react-redux";
import { Wrapper as Navbar } from "components/Navbar/Navbar.style";
import { ImArrowLeft2 } from "react-icons/im";
import CountryInfoList from "./CountryInfo/CountryInfo";

const CountryPage = () => {
    const code = useSelector((state) => state.countries.countryCode);

    const { data, isFetching, error } = useGetCountryQuery(code);

    return (
        <Wrapper>
            <Navbar>
                <Button>
                    <Link to='/'>
                        <ImArrowLeft2 />
                        Back
                    </Link>
                </Button>
            </Navbar>
            {error ? (
                <h2>Country not found :( </h2>
            ) : isFetching ? (
                <h2>FETCHING</h2>
            ) : (
                <CountryInfoList data={data} />
            )}
        </Wrapper>
    );
};

export default CountryPage;
