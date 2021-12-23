import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 200px;
    background-color: ${({ theme }) => theme.colors.darkBlue};
    color: ${({ theme }) => theme.colors.white};
    font-size: ${({ theme }) => theme.fontSize.s};
    position: relative;
    border-radius: 5px;
    z-index: 100;
`;

export const Button = styled.button`
    background-color: inherit;
    color: inherit;
    border: none;
    display: flex;
    justify-content: space-between;
    padding: 15px 20px;
    border-radius: inherit;
    cursor: pointer;

    div {
        transform-origin: 50% 35%;
        transform: ${({ isOpen }) =>
            isOpen ? "rotate(180deg)" : "rotate(0deg)"};
    }
`;

export const SelectList = styled.ul`
    display: ${({ isOpen }) => !isOpen && "none"};
    margin: 0;
    list-style: none;
    position: absolute;
    background-color: inherit;
    width: 90%;
    top: 110%;
    left: 5%;
    padding: 15px 20px;

    li {
        padding: 10px 0px 10px 5px;
    }

    li:hover {
        background-color: ${({ theme }) => theme.colors.veryDarkBlue};
        cursor: pointer;
    }
`;
