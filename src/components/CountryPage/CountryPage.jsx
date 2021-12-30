import React, { useEffect } from "react";
import { Button, Wrapper } from "./CountryPage.style";
import { Link } from "react-router-dom";
import { useGetCountryByCodeQuery } from "actions/fetchData";
import { useDispatch } from "react-redux";
import { Wrapper as Navbar } from "components/Navbar/Navbar.style";
import { ImArrowLeft2 } from "react-icons/im";
import CountryInfoList from "./CountryInfo/CountryInfo";
import { useParams } from "react-router-dom";
import { setCountryCode } from "actions/inputs";

const CountryPage = () => {
    const dispatch = useDispatch();
    const { code } = useParams();

    const { data, isFetching } = useGetCountryByCodeQuery(code);

    useEffect(() => {
        dispatch(setCountryCode(code));
    }, [code, dispatch]);

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
            {data?.status === 400 ? (
                <h2>Country not found :/ </h2>
            ) : isFetching ? (
                <h2>LOADING ...</h2>
            ) : (
                <CountryInfoList data={data} />
            )}
        </Wrapper>
    );
};

export default CountryPage;
