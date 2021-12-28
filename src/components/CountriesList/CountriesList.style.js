import styled from "styled-components";

const medium = ({ theme }) => theme.brakePoints.medium;

export const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    row-gap: 60px;
    column-gap: 50px;
    padding: 0 60px;
    padding-bottom: 60px;

    h1 {
        color: ${({ theme }) => theme.colors.textSecondary};
        font-size: 30px;
        margin: 0 auto;

        @media (max-width: ${medium}) {
            font-size: ${({ theme }) => theme.fontSize.xl};
        }
    }
`;
