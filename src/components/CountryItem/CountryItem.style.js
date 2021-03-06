import styled from "styled-components";
import { Link } from "react-router-dom";

export const Wrapper = styled(Link)`
    width: 250px;
    height: 350px;
    background-color: ${({ theme }) => theme.colors.backgroundPrimary};
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    cursor: pointer;
    text-decoration: none;
    transition: transform 0.2s;

    &:hover {
        transform: scale(1.05);
    }

    .image-container {
        width: 100%;
        min-height: 45%;
        position: relative;

        img {
            border-top-left-radius: 5px;
            border-top-right-radius: 5px;
            position: absolute;
            width: 100%;
            height: 100%;
        }
    }
`;

export const Content = styled.div`
    color: ${({ theme }) => theme.colors.textPrimary};
    width: 100%;
    height: 50%;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    h2 {
        font-size: ${({ theme }) => theme.fontSize.l};
        font-weight: 900;
        margin-bottom: 15px;
    }
    div {
        font-weight: 300;
        p {
            margin: 0 0 5px 0;
            font-size: ${({ theme }) => theme.fontSize.s};
        }
    }
`;
