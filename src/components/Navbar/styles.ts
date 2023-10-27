import { styled } from "styled-components"

interface CartButtonProps {
    products: number
}

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

export const PlaceSchedule = styled.label`
    padding: 0.5rem;

    background-color: ${({ theme }) => theme.colors["purpleLight"]};
    
    display: flex;
    align-items: center;
    gap: 0.25rem;

    color: ${({ theme }) => theme.colors["purpleDark"]};
    font-weight: bold;

    border-radius: 6px;
    border: 1px solid 
`

export const CartButton = styled.button<CartButtonProps>`
    padding: 0.5rem;

    background-color: ${({ theme }) => theme.colors["yellowLight"]}; 

    color: ${({ theme }) => theme.colors["yellowDark"]};

    border-radius: 6px;
    border: 1px solid;

    position: relative;

    display: flex;
    align-items: center;

    height: 100%;

    &:hover{
        background-color: ${({ theme }) => theme.colors["yellowDark"]};

        color: ${({ theme }) => theme.colors["white"]};

        cursor: pointer;
    }

    
    
    &::after{
        display: ${({products})=> products !== 0 ? "flex" : "none"};
        align-items: center;
        justify-content: center;

        content: "${({products}) => products}";
                    
        border-radius: 50%;
                    
        background-color: ${({ theme }) => theme.colors["yellowDark"]};
                            
        padding: 0.05rem 0.45rem;
                    
        position: absolute;
        top: -0.5rem;
        right: -0.5rem;
                    
        font-weight: bold;
        font-size: 0.75rem;
        color: ${({ theme }) => theme.colors["white"]};
    }
    
    
`