import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { Wrapper } from "./SearchBar.style";
import { useDispatch } from "react-redux";
import { setName } from "store/actions/reducers/inputsSlice";
import useCountries from "hooks/useCountries";

const SearchBar = () => {
    const { name } = useCountries();

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
