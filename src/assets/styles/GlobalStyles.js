import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    *{
        margin:0;
        padding:0;
        box-sizing: border-box;
        font-family: ${props=>props.theme.font_padrao};
        text-decoration: none;
    } 

    body{
        background: #000;
    }
`;