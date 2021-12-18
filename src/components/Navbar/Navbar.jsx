import React from "react";
import { Wrapper } from "./Navbar.style";
import { DropdownSelect } from "./DropdownSelect/DropdownSelect";
import SearchBar from "./SearchBar/SearchBar";

const Navbar = () => {
    return (
        <Wrapper>
            <SearchBar />
            <DropdownSelect />
        </Wrapper>
    );
};

export default Navbar;
