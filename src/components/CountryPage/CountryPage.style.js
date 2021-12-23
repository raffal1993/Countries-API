import styled from "styled-components";
import { Wrapper as Navbar } from "components/Navbar/Navbar.style";

export const Wrapper = styled.div`
    padding: 0px 60px;

    ${Navbar} {
        padding: 80px 0px;
    }
    a {
        text-decoration: none;
        color: ${({ theme }) => theme.colors.white};
        width: 100%;
        height: 100%;
        padding: 0 20px 0 10px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        border-radius: inherit;
    }
`;

export const Button = styled.button`
    background-color: ${({ theme }) => theme.colors.darkBlue};
    color: ${({ theme }) => theme.colors.lightGrey};
    font-size: ${({ theme }) => theme.fontSize.m};
    letter-spacing: 1px;
    font-weight: 600;
    height: 30px;
    width: 115px;
    border-radius: 5px;
    border: none;
    cursor: pointer;

    &:hover {
        box-shadow: 0px 0px 5px 1px ${({ theme }) => theme.colors.darkGray};
    }
`;
