import { useSelect } from "downshift";
import { Wrapper, Button, SelectList } from "./DropdownSelect.style";
import { IoIosArrowDown } from "react-icons/io";
import { useDispatch } from "react-redux";
import { setRegion } from "store/actions/reducers/inputsSlice";
import { useEffect } from "react";
import useCountries from "hooks/useCountries";

const regions = [`Africa`, `Americas`, `Asia`, `Europe`, `Oceania`];

export const DropdownSelect = () => {
    const { region } = useCountries();

    const dispatch = useDispatch();

    const handleSelectedItemChange = ({ selectedItem }) => {
        return dispatch(setRegion(selectedItem));
    };

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
            <Button isOpen={isOpen} type='button' {...getToggleButtonProps()}>
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
