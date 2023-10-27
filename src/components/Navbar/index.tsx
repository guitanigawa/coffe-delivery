import { CartButton, NavContainer, PlaceSchedule } from "./styles";
import Logo from "../../assets/Logo.svg"
import { Link } from "react-router-dom";
import { ShoppingCartSimple, MapPin } from "@phosphor-icons/react"

export default function Navbar(){


    return(
        <NavContainer>
            <img src={Logo}/>

            <span>
                <PlaceSchedule>
                    <MapPin weight="fill" />
                    Porto Alegre, RS
                </PlaceSchedule>

                <Link to={"/checkout"}>
                    <CartButton products={0}>
                        <ShoppingCartSimple weight="fill"/>
                    </CartButton>
                </Link>
                
            </span>
        </NavContainer>
    )
}