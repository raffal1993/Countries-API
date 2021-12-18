import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { Wrapper } from "./SearchBar.style";

const SearchBar = () => {
    return (
        <Wrapper>
            <div>
                <AiOutlineSearch />
            </div>
            <input type='text' placeholder='Search for a country...' />
        </Wrapper>
    );
};

export default SearchBar;
