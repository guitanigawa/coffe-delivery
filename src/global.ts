import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
    
    *{
        margin: 0;
        padding: 0;
        
        box-sizing: border-box
    }


    body{
        background-color:  ${({theme}) => theme.colors["background"]};
    }
    
    input, textarea, button{
        color: "white"
    }:focus{
        outline: 0
    }
`