import { styled } from "styled-components"

export const NavContainer = styled.nav`
    width: 100%;

    display: flex;
    justify-content: space-between;

    padding: 2rem 0;

    span{
        display: flex;
        gap: 0.75rem
    }
`

export const PlaceButton = styled.button`
    padding: 0.5rem;

    background-color: ${({theme})=> theme.colors["purpleLight"]};
    
    display: flex;
    align-items: center;
    gap: 0.25rem;

    line-height: 130%;
    color: ${({theme})=> theme.colors["purpleDark"]};
    font-weight: bold;

    border-radius: 6px;

    &:hover{
        
    }
`

export const CartButton = styled.button`
    padding: 0.5rem;

    background-color: ${({theme})=> theme.colors["yellowLight"]}; 

    color: ${({theme})=> theme.colors["yellow"]};

    border-radius: 6px
`