import { useSelect } from "downshift";
import { Wrapper, Button, SelectList } from "./DropdownSelect.style";
import { IoIosArrowDown } from "react-icons/io";

const regions = [`Africa`, `America`, `Asia`];

export const DropdownSelect = () => {
    const {
        isOpen,
        selectedItem,
        getToggleButtonProps,
        //   getLabelProps,
        getMenuProps,
        // highlightedIndex,
        getItemProps
    } = useSelect({ items: regions });

    console.log();

    return (
        <Wrapper>
            {/* <label {...getLabelProps()}></label> */}
            <Button type='button' {...getToggleButtonProps()}>
                {selectedItem || "Filter by Region"}
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
