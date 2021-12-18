import styled, { css } from "styled-components";

export const Wrapper = styled.header`
     display: flex;
     justify-content: space-between;
     padding: 0 60px;
     height: 60px;
     line-height: 60px;

     background-color: ${({ theme }) => theme.colors.darkBlue};
     color: ${({ theme }) => theme.colors.white};
     font-size: ${({ theme }) => theme.fontSize.xl};
     font-weight: 800;
`;

export const Mode = styled.div`
     display: flex;
     align-items: center;
     flex-direction: row;
     font-size: ${({ theme }) => theme.fontSize.s};
     font-weight: 600;
`;

export const Slider = styled.div`
     background-color: darkgray;
     position: relative;
     height: 30px;
     width: 60px;
     border-radius: 20px;
     margin-right: 10px;
     cursor: pointer;

     &::after {
          content: "";
          position: absolute;
          height: 23px;
          width: 23px;
          border-radius: 50%;
          top: 50%;
          left: 25%;
          transform: translate(-50%, -50%);
          transition: 0.35s ease-in-out;
          background-color: white;
          box-shadow: 0px 0px 1px 1px darkgrey;

          ${({ isDarkMode }) =>
               isDarkMode &&
               css`
                    transform: translate(75%, -50%);
               `}
     }
`;
