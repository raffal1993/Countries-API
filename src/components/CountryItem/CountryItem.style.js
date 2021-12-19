import styled from "styled-components";

export const Wrapper = styled.div`
    width: 250px;
    height: 350px;
    background-color: ${({ theme }) => theme.colors.darkBlue};
    display: flex;
    flex-direction: column;
    border-radius: 10px;

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
    color: ${({ theme }) => theme.colors.white};
    width: 100%;
    height: 50%;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    h2 {
        font-size: ${({ theme }) => theme.fontSize.l};
        font-weight: 600;
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
