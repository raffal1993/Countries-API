import { setCountryCode } from "store/actions/reducers/inputsSlice";
import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Button } from "../CountryPage.style";
import { CountryInfo } from "./CountryInfo.style";
import { Content } from "./CountryInfo.style";

const CountryInfoList = ({ data }) => {
    const {
        flags,
        name,
        nativeName,
        population,
        region,
        subregion,
        capital,
        topLevelDomain,
        currencies,
        languages,
        borders
    } = data;

    const dispatch = useDispatch();

    const handleShowCountry = (code) => {
        dispatch(setCountryCode(code));
    };

    const showInfo = (info) => {
        if (!info) return <span>Not found</span>;
        if (!Array.isArray(info)) return info;

        return info.map((el, index) => (
            <React.Fragment key={el.name || el}>
                [{el.name || el}]{info.length - 1 !== index && `, `}
                {""}
            </React.Fragment>
        ));
    };

    return (
        <Content>
            <div className='img-container'>
                <img src={flags.png} alt='' />
            </div>
            <CountryInfo>
                <h1>{name}</h1>
                <ul>
                    <li>
                        <strong>Native Name: </strong>
                        {showInfo(nativeName)}
                    </li>
                    <li>
                        <strong>Population: </strong>
                        {showInfo(population)}
                    </li>
                    <li>
                        <strong>Region: </strong>
                        {showInfo(region)}
                    </li>
                    <li>
                        <strong>Sub Region: </strong>
                        {showInfo(subregion)}
                    </li>
                    <li>
                        <strong>Capital: </strong>
                        {showInfo(capital)}
                    </li>
                    <li>
                        <strong>Top Level Domain: </strong>
                        {showInfo(topLevelDomain)}
                    </li>
                    <li>
                        <strong>Currencies: </strong>
                        {showInfo(currencies)}
                    </li>
                    <li>
                        <strong>Languages: </strong>
                        {showInfo(languages)}
                    </li>
                </ul>
                <div className='borders'>
                    <h3>Border countries: </h3>
                    <div className='buttons-container'>
                        {borders ? (
                            borders.map((border) => (
                                <Button
                                    onClick={() => handleShowCountry(border)}
                                    key={border}
                                >
                                    <Link to={`/country/${border}`}>
                                        {border}
                                    </Link>
                                </Button>
                            ))
                        ) : (
                            <span>[Not found]</span>
                        )}
                    </div>
                </div>
            </CountryInfo>
        </Content>
    );
};

export default CountryInfoList;
