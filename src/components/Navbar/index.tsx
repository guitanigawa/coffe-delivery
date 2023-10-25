import { CartButton, NavContainer, PlaceButton } from "./styles";
import Logo from "../../assets/Logo.svg"
import { Link } from "react-router-dom";
import { ShoppingCartSimple } from "@phosphor-icons/react"
import { MapPin } from "@phosphor-icons/react/dist/ssr/MapPin";

export default function Navbar(){


    return(
        <NavContainer>
            <img src={Logo}/>

            <span>
                <PlaceButton>
                    <MapPin size="1.25rem" weight="fill" />
                    Porto Alegre, RS
                </PlaceButton>

                <Link to={"/checkout"}>
                    <CartButton>
                        <ShoppingCartSimple weight="fill" size="1.25rem"/>
                    </CartButton>
                </Link>
                
            </span>
        </NavContainer>
    )
}