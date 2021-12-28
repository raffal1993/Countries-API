import styled from "styled-components";

export const Wrapper = styled.label`
    display: flex;
    flex-direction: row;
    background-color: ${({ theme }) => theme.colors.backgroundPrimary};
    min-width: 200px;
    height: 50px;
    border-radius: 5px;

    div {
        min-width: 70px;
        position: relative;

        svg {
            cursor: pointer;
            fill: ${({ theme }) => theme.colors.textPrimary};
            height: 40%;
            width: 40%;
            position: absolute;
            top: 50%;
            left: 20%;
            transform: translateY(-50%);
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
        width: 250px;
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
