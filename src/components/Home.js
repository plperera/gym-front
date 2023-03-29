import styled from "styled-components"
import BannerSession from "./BannerSession"
import Menu from "./Menu"
import SessionFour from "./old/SessionFour"
import SessionOne from "./old/SessionOne"
import SessionThree from "./old/SessionThree"
import SessionTwo from "./old/SessionTwo"

export default function Home (){
    //"Leve sua rotina de treino para o próximo nível com UpFitness!"
    //"Eleve seu corpo e sua mente com a UpFitness."

    return(
        <Container>

            <Menu/>

            <SessionOne/>

            <SessionTwo/>
          
            <SessionThree/>

            <SessionFour/>

        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex; 
    align-items: center;
    justify-content: center;
    flex-direction: column;
`