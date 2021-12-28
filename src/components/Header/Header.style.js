import styled, { css } from "styled-components";

const medium = ({ theme }) => theme.brakePoints.medium;

const small = ({ theme }) => theme.brakePoints.small;

export const Wrapper = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 60px;
    height: 60px;
    line-height: 60px;
    background-color: ${({ theme }) => theme.colors.backgroundPrimary};
    color: ${({ theme }) => theme.colors.textPrimary};
    font-size: ${({ theme }) => theme.fontSize.xl};
    font-weight: 800;

    @media (max-width: ${medium}) {
        padding: 0px 20px;
        height: 100px;
    }
    @media (max-width: ${small}) {
        font-size: ${({ theme }) => theme.fontSize.s};
    }
`;

export const Mode = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;
    font-size: ${({ theme }) => theme.fontSize.s};
    font-weight: 600;

    @media (max-width: ${small}) {
        font-size: ${({ theme }) => theme.fontSize.xs};
    }
`;

export const Slider = styled.div`
    background-color: ${({ theme }) => theme.colors.textSecondary};
    position: relative;
    height: 30px;
    width: 60px;
    border-radius: 20px;
    margin-right: 10px;
    cursor: pointer;

    @media (max-width: ${small}) {
        height: 20px;
        width: 40px;
    }

    &::after {
        content: "";
        position: absolute;
        height: 80%;
        width: 40%;
        border-radius: 50%;
        top: 50%;
        left: 25%;
        transform: translate(-50%, -50%);
        transition: 0.35s ease-in-out;
        background-color: ${({ theme }) => theme.colors.backgroundPrimary};
        box-shadow: 0px 0px 1px 1px
            ${({ theme }) => theme.colors.backgroundSecondary};

        ${({ isDarkMode }) =>
            isDarkMode &&
            css`
                transform: translate(75%, -50%);
            `}
    }
`;
