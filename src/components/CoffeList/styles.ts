import { styled } from "styled-components"

interface CoffeImageProps{
    imgSource: string
}

export const Container = styled.section`
    padding: 2rem 0;

    h1{
        font-size: 2rem;
        font-family: "Baloo 2", sans-serif;
        color: ${({theme})=> theme.colors["baseTitle"]};

        margin-bottom: 3.375rem
    }
`
export const List = styled.ul`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    column-gap: 2rem;
    row-gap: 2.5rem;
`

export const Card = styled.li`
    list-style: none;

    padding: 1.25rem;

    background-color: ${({theme})=> theme.colors["baseCard"]};

    border-radius: 6px 36px;
`

export const CardContent = styled.div`
    margin-top: -2.5rem;

    display: flex;
    flex-direction: column;
    align-items: center;

    h2{
        font-family: "Baloo 2", sans-serif;
        font-size: 1.25rem;
        color: ${({theme})=> theme.colors["baseSubtitle"]};

        margin-bottom: 0.8rem
    }

    p{
        font-size: 0.875rem;
        color: ${({theme})=> theme.colors["baseLabel"]};

        text-align: center
    }
`

export const Tag = styled.span`
    padding: 0.25rem 0.5rem;

    border-radius: 100px;

    background-color: ${({theme})=> theme.colors["yellowLight"]};

    color: ${({theme})=> theme.colors["yellowDark"]};

    font-size: 0.625rem;
    font-weight: bold;

    margin-bottom: 1rem
`

export const CoffeImage = styled.img`
    width: 120px;
    height: 120px;

    margin-bottom: 0.75rem
`

