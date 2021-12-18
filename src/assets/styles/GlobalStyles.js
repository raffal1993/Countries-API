import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

html{
        box-sizing: border-box;
}

body{
        font-family: 'Nunito Sans', sans-serif;
        margin: 0;
        padding: 0;
        min-height: 100vh;
}

h1,h2,h3,h4,h5,h6{
        font-size: inherit;
        margin: 0;
}

*, *::after, *::before {
        box-sizing: inherit;
}


a, button,::placeholder,input {
        font-family: 'Nunito Sans', sans-serif;
}
`;
