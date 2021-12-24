import styled from "styled-components";

export const Wrapper = styled.label`
    display: flex;
    flex-direction: row;
    background-color: ${({ theme }) => theme.colors.backgroundPrimary};
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
            fill: ${({ theme }) => theme.colors.textPrimary};
            height: 70%;
            width: 70%;
        }

        svg:hover {
            fill: ${({ theme }) => theme.colors.textSecondary};
        }
    }

    input {
        background-color: ${({ theme }) => theme.colors.backgroundPrimary};
        border: none;
        border-radius: 5px;
        color: ${({ theme }) => theme.colors.textPrimary};
        padding-right: 180px;
        :focus {
            outline: none;
        }

        ::placeholder {
            color: ${({ theme }) => theme.colors.textPrimary};
            font-size: ${({ theme }) => theme.fontSize.s};
            letter-spacing: 0.5px;
        }
    }
`;
