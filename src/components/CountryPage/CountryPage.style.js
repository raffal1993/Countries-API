import styled from "styled-components";
import { Wrapper as Navbar } from "components/Navbar/Navbar.style";

export const Wrapper = styled.div`
    padding: 0px 60px;
    width: 100%;

    ${Navbar} {
        padding: 80px 0px;
    }
    a {
        text-decoration: none;
        color: ${({ theme }) => theme.colors.textPrimary};
        width: 100%;
        height: 100%;
        padding: 0 20px 0 10px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        border-radius: inherit;
    }

    h2 {
        color: ${({ theme }) => theme.colors.textSecondary};
        font-size: 30px;
        margin: 0 auto;
    }
`;

export const Button = styled.button`
    background-color: ${({ theme }) => theme.colors.backgroundPrimary};
    color: ${({ theme }) => theme.colors.textSecondary};
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
