import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

body{
        box-sizing: border-box;
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

li,ul{
        margin: 0;
        padding:0;
        list-style: none;
        text-decoration: none;
}


a, button,::placeholder,input {
        font-family: 'Nunito Sans', sans-serif;
        padding: 0;
        margin: 0;
}
`;
