import styled from "styled-components";
import { Button } from "../CountryPage.style";

export const Content = styled.div`
    display: flex;
    width: 100%;

    .img-container {
        width: 40%;

        img {
            width: 100%;
            object-fit: contain;
            max-height: 70%;
        }
    }
`;

export const CountryInfo = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px 0;
    padding-left: 60px;
    color: ${({ theme }) => theme.colors.textPrimary};
    width: 60%;
    height: 100%;

    h1 {
        font-size: 30px;
        margin-bottom: 40px;
    }

    ul {
        font-size: ${({ theme }) => theme.fontSize.m};
        display: flex;
        flex-wrap: wrap;
        align-items: flex-start;
        flex-direction: column;
        column-gap: 30px;
        letter-spacing: 1px;
        min-height: 0;
        height: 60%;

        li {
            margin-bottom: 15px;
        }

        span {
            font-style: italic;
        }
    }
    .borders {
        padding-top: 60px;
        display: flex;
        align-items: center;

        h3 {
            margin-right: 15px;
        }

        .buttons-container {
            display: flex;
            flex-wrap: wrap;
            justify-content: flex-start;

            ${Button} {
                margin: 5px;
            }

            span {
                font-style: italic;
                margin-left: 20px;
            }
        }
    }
`;
