import React from "react";
import { Wrapper, Content } from "./CountryItem.style";

const CountryItem = ({
    country: {
        name,
        population,
        region,
        capital,
        flags: { png }
    }
}) => {
    return (
        <Wrapper>
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
