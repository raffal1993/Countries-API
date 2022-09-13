import { useMode } from "hooks/useMode";
import React from "react";
import { Link } from "react-router-dom";
import { Mode, Slider, Wrapper } from "./Header.style";
import { useDispatch } from "react-redux";
import { setCountries } from "store/actions/reducers/countriesSlice";
import { useGetAllCountriesQuery } from "store/actions/api/countriesApi";
import { setName, setRegion } from "store/actions/reducers/inputsSlice";

const Header = () => {
    const { mode, toggleMode } = useMode();

    const dispatch = useDispatch();

    const { data: dataAll } = useGetAllCountriesQuery();

    const resetHandle = () => {
        dispatch(setName(``));
        dispatch(setRegion(``));
        setTimeout(() => {
            dispatch(setCountries(dataAll));
        }, 0);
    };

    return (
        <Wrapper>
            <Link as='h2' to='/' onClick={resetHandle}>
                Where in the world?
            </Link>
            <Mode>
                <Slider
                    isDarkMode={mode === "dark"}
                    onClick={toggleMode}
                ></Slider>
                <span>{mode === "dark" ? "Dark Mode" : "Light Mode"}</span>
            </Mode>
        </Wrapper>
    );
};

export default Header;
