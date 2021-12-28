import styled from "styled-components";

export const Wrapper = styled.div`
    width: 100%;
    background-color: ${({ theme }) => theme.colors.backgroundSecondary};
    padding: 45px 60px;
    min-height: 130px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: ${({ theme }) => theme.brakePoints.medium}) {
        padding: 45px 20px;
        flex-direction: column;
        min-height: 230px;
        align-items: stretch;
    }
`;
