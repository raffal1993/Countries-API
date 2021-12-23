import React from "react";
import { Wrapper, Content } from "./CountryItem.style";
import { setCountryCode } from "actions/inputs";
import { useDispatch } from "react-redux";

const CountryItem = ({
    country: {
        name,
        population,
        region,
        capital,
        flags: { png },
        alpha3Code
    }
}) => {
    const dispatch = useDispatch();
    const handleShowCountry = () => {
        dispatch(setCountryCode(alpha3Code));
    };
    return (
        <Wrapper to={`/country/${alpha3Code}`} onClick={handleShowCountry}>
            <div className='image-container'>
                <img src={png} alt='flag' />
            </div>
            <Content>
                <h2>{name}</h2>
                <div>
                    <p>
                        <strong>Population: </strong>
                        {population}
                    </p>
                    <p>
                        <strong>Region: </strong>
                        {region}
                    </p>
                    <p>
                        <strong>Capital: </strong>
                        {capital}
                    </p>
                </div>
            </Content>
        </Wrapper>
    );
};

export default CountryItem;
