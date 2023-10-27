import { Card, CardContent, CoffeImage, Container, List, Tag } from "./styles";
import Coffe from "../../assets/Coffe.svg"


export default function CoffeList(){


    return(
        <Container>
            <h1>Nossos Cafés</h1>
            
            <List>
                <Card>
                    <CardContent>
                        <CoffeImage src="https://s3-alpha-sig.figma.com/img/55b1/f9ee/64600f98b2bae456b96fdc624c4b4f47?Expires=1699228800&Signature=CCCVGkIi8tTaO-h0RuCay5E94ETcbzC8KPaRPWOOwvo9V7Ht~bnqprD4r~cRzYa4qOg5X5oJgpv8HdUgU0hJcjqFaBTs9JUSddyB1Rmx09QaM87c4yT7KguRwFvkIQRTGr6ONFPCJwnNQIHLKo~zzp~DplGwQxHpnEnB4q8ipXf-UpIYL9Spx7wlcWFx8OHDqaH7mHsD~CfawnV5Xc2Td~6t0uh6ALZZA23uL~WtIWYgot9cG8gFIgFxDdvASvgToDjlNluIzMkZkaQdbi9KvzSkigblA1HuXhou5lZc1TZoZwljKGRosDb6PQ2lH0OBt0PuMilI423KdG-boc2fow__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"/>

                        <Tag>
                            TRADICIONAL
                        </Tag>

                        <h2>
                            Expresso Tradicional
                        </h2>

                        <p>
                            O tradicional café feito com água quente e grãos moídos
                        </p>

                        <footer>
                            
                        </footer>
                    </CardContent>
                </Card>
            </List>
        </Container>
    )

}