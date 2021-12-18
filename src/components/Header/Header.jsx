import React, { useState } from "react";
import { Mode, Slider, Wrapper } from "./Header.style";

const Header = () => {
     const [isDarkMode, setIsDarkMode] = useState(false);

     const modeHandler = () => {
          setIsDarkMode((prev) => !prev);
     };

     return (
          <Wrapper>
               <h2>Where in the world?</h2>
               <Mode>
                    <Slider
                         isDarkMode={isDarkMode}
                         onClick={modeHandler}
                    ></Slider>
                    <span> Dark Mode</span>
               </Mode>
          </Wrapper>
     );
};

export default Header;
