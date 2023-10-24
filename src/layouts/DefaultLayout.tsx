import { Outlet } from "react-router-dom";
import { MainContainer } from "../components/MainContainer";

export default function DefaultLayout(){

    return(
        <MainContainer>

            <Outlet/>
        </MainContainer>
    )
}