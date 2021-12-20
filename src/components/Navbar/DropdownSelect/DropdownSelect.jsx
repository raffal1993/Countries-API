import { useSelect } from "downshift";
import { Wrapper, Button, SelectList } from "./DropdownSelect.style";
import { IoIosArrowDown } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { setRegion } from "actions/inputs";
import { useEffect, useState } from "react";

const regions = [`Africa`, `Americas`, `Asia`, `Europe`, `Oceania`];

export const DropdownSelect = () => {
    const name = useSelector((state) => state.countries.name);
    const dispatch = useDispatch();
    const [region, setItem] = useState("");

    const handleSelectedItemChange = ({ selectedItem }) => {
        setItem(selectedItem);
    };

    useEffect(() => {
        if (name) setItem("");
    }, [name]);

    useEffect(() => {
        dispatch(setRegion(region));
    }, [region, dispatch]);

    const {
        isOpen,
        getToggleButtonProps,
        getLabelProps,
        getMenuProps,
        getItemProps
    } = useSelect({
        items: regions,
        selectedItem: region,
        onSelectedItemChange: handleSelectedItemChange
    });

    return (
        <Wrapper>
            <label {...getLabelProps()} />
            <Button type='button' {...getToggleButtonProps()}>
                {region ? region : "Filter by Region"}
                <div>
                    <IoIosArrowDown />
                </div>
            </Button>
            <SelectList {...getMenuProps()} isOpen={isOpen}>
                {isOpen &&
                    regions.map((item, index) => (
                        <li
                            key={`${item}${index}`}
                            {...getItemProps({ item, index })}
                        >
                            {item}
                        </li>
                    ))}
            </SelectList>
        </Wrapper>
    );
};
