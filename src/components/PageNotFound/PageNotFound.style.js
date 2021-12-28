import styled from "styled-components";

const medium = ({ theme }) => theme.brakePoints.medium;

export const Wrapper = styled.div`
    height: 40vh;
    display: grid;
    place-items: center;
    color: ${({ theme }) => theme.colors.textPrimary};
    font-size: 30px;
    font-weight: 900;

    @media (max-width: ${medium}) {
        font-size: ${({ theme }) => theme.fontSize.xxl};
    }
`;
