import { useMode } from "hooks/useMode";
import React from "react";
import { Mode, Slider, Wrapper } from "./Header.style";

const Header = () => {
    const { mode, toggleMode } = useMode();

    return (
        <Wrapper>
            <h2>Where in the world?</h2>
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
