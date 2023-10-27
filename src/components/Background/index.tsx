import { BenefitsList, BenefitsListIcon, Container } from "./styles";
import BackgroundImage from "../../assets/BackgroundImage.svg"
import { Coffee, MapPin, Package, Timer } from "@phosphor-icons/react";

export default function Background(){

    return(
        <Container>
            <section>
                <h1>
                    Encontre o café perfeito para qualquer hora do dia
                </h1>

                <label>
                    Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora
                </label>

                <BenefitsList>
                    <li>
                        <BenefitsListIcon bgColor="yellowDark">
                            <MapPin weight="fill"/>
                        </BenefitsListIcon>
                        Compra simples e segura
                    </li>

                    <li>
                        <BenefitsListIcon bgColor="baseText">
                            <Package weight="fill"/>
                        </BenefitsListIcon>
                        Embalagem mantém o café intacto
                    </li>

                    <li>
                        <BenefitsListIcon bgColor="yellow">
                            <Timer weight="fill"/>
                        </BenefitsListIcon>
                        Entrega rápida e rastreada
                    </li>

                    <li>
                        <BenefitsListIcon bgColor="purple">
                            <Coffee weight="fill"/>
                        </BenefitsListIcon>
                        O café chega fresquinho até você
                    </li>
                </BenefitsList>
            </section>

            <img src={BackgroundImage}></img>
        </Container>
            



    )

}