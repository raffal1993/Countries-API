import styled from "styled-components";

export const Wrapper = styled.label`
    display: flex;
    flex-direction: row;
    background-color: ${({ theme }) => theme.colors.darkBlue};
    min-width: 200px;
    height: 50px;
    border-radius: 5px;

    div {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0 15px;

        svg {
            cursor: pointer;
            fill: ${({ theme }) => theme.colors.white};
            height: 70%;
            width: 70%;
        }

        svg:hover {
            fill: lightgrey;
        }
    }

    input {
        background-color: ${({ theme }) => theme.colors.darkBlue};
        border: none;
        border-radius: 5px;
        color: ${({ theme }) => theme.colors.white};
        padding-right: 180px;
        :focus {
            outline: none;
        }

        ::placeholder {
            color: ${({ theme }) => theme.colors.white};
            font-size: ${({ theme }) => theme.fontSize.s};
            letter-spacing: 0.5px;
        }
    }
`;
