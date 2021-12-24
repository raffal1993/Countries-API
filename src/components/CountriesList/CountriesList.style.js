import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    row-gap: 60px;
    column-gap: 50px;
    padding: 0 60px;

    h1 {
        color: ${({ theme }) => theme.colors.textSecondary};
        font-size: 30px;
        margin: 0 auto;
    }
`;
