import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;600;800&display=swap');

html{
        box-sizing: border-box;
}

body{
        font-family: 'Nunito Sans', sans-serif;
        margin: 0;
        padding: 0;
}

*, *::after, *::before {
        box-sizing: inherit;
}

a, button {
        font-family: 'Nunito Sans', sans-serif;
}
`;
