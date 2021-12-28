import styled from "styled-components";
import { Button } from "../CountryPage.style";

const medium = ({ theme }) => theme.brakePoints.medium;

const small = ({ theme }) => theme.brakePoints.small;

export const Content = styled.div`
    display: flex;
    width: 100%;

    @media (max-width: ${medium}) {
        flex-direction: column;
        align-items: center;
    }

    .img-container {
        width: 40%;

        @media (max-width: ${medium}) {
            width: 80%;
        }

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
    padding: 20px 0px 0px 60px;
    color: ${({ theme }) => theme.colors.textPrimary};
    width: 60%;
    height: 100%;

    @media (max-width: ${medium}) {
        padding: 30px 10px 10px 10px;
        width: 80%;
    }

    h1 {
        font-size: 30px;
        margin-bottom: 40px;

        @media (max-width: ${small}) {
            font-size: ${({ theme }) => theme.fontSize.xxl};
        }
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

        @media (max-width: ${small}) {
            font-size: ${({ theme }) => theme.fontSize.s};
        }

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

        @media (max-width: ${medium}) {
            flex-direction: column;
        }

        h3 {
            margin: 0 15px 15px 0;
        }

        .buttons-container {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;

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
