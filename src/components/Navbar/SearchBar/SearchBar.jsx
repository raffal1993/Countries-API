import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { Wrapper } from "./SearchBar.style";
import { useSelector, useDispatch } from "react-redux";
import { setName } from "actions/inputs";

const SearchBar = () => {
    const name = useSelector((state) => state.countries.name);

    const dispatch = useDispatch();

    const handleInputChange = (e) => {
        dispatch(setName(e.target.value));
    };

    return (
        <Wrapper>
            <div>
                <AiOutlineSearch />
            </div>
            <input
                type='text'
                placeholder='Search for a country...'
                value={name}
                onChange={handleInputChange}
            />
        </Wrapper>
    );
};

export default SearchBar;
