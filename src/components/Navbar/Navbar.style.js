import styled from "styled-components";

export const Wrapper = styled.div`
    width: 100%;
    background-color: ${({ theme }) => theme.colors.backgroundSecondary};
    padding: 45px 60px;
    max-height: 130px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
