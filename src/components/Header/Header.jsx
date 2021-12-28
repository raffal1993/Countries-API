import { useMode } from "hooks/useMode";
import React from "react";
import { Link } from "react-router-dom";
import { Mode, Slider, Wrapper } from "./Header.style";

const Header = () => {
    const { mode, toggleMode } = useMode();

    return (
        <Wrapper>
            <Link as='h2' to='/'>
                Where in the world?
            </Link>
            <Mode>
                <Slider
                    isDarkMode={mode === "dark"}
                    onClick={toggleMode}
                ></Slider>
                <span> Dark Mode</span>
            </Mode>
        </Wrapper>
    );
};

export default Header;
