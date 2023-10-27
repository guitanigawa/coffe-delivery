import { styled } from "styled-components"

interface BenefitsListIconProps{
    bgColor: "yellowDark" | "yellow" | "purple" | "baseText"
}

export const Container = styled.div`
    width: 100%;

    padding: 5rem 0;

    display: flex;
    gap: 3.5rem;

    color: ${({theme})=> theme.colors["baseTitle"]};

    section{
        
        h1{
            font-family: "Baloo 2", sans-serif;
            font-weight: bold;
            font-size: 3rem;
            color: ${({theme})=> theme.colors["baseTitle"]};

            margin-bottom: 1rem
        }
        
        label{
            font-size: 1.25rem;

            display: inline-block;
            margin-bottom: 4.125rem
        }
    }

`

export const BenefitsList = styled.ul`
    display: grid;
    grid-template: auto auto / auto auto;
    row-gap: 1.25rem;

    color: ${({theme})=> theme.colors["baseText"]};

    li{
        list-style: none;

        display: flex;
        align-items: center;
        gap: 0.75rem
    }
`

export const BenefitsListIcon = styled.span<BenefitsListIconProps>`
    padding: 0.5rem;

    border-radius: 50%;

    color: ${({theme})=> theme.colors["white"]};

    background-color: ${({theme, bgColor})=> theme.colors[bgColor]};

    display: flex;

    margin-bottom: 0;
`