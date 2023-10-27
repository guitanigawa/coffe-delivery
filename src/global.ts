import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`  
    *{
        margin: 0;
        padding: 0;
        
        box-sizing: border-box;

        font-family: "Roboto", sans-serif;
        font-size: 1rem;
        line-height: 130%
    }


    body{
        background-color:  ${({theme}) => theme.colors["background"]};

        padding: 0 10rem;
    }

    #root{
        max-width: 70rem;

        margin: auto
    }

    input, textarea, button{
        color: "white";

        border: 0
    }:focus{
        outline: 0;
    }
`