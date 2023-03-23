import styled from "styled-components"
import Menu from "./Menu"
import SessionOne from "./SessionOne"
import SessionThree from "./SessionThree"
import SessionTwo from "./SessionTwo"

export default function Home (){
    //"Leve sua rotina de treino para o próximo nível com UpFitness!"
    //"Eleve seu corpo e sua mente com a UpFitness."

    return(
        <Container>

            <Menu/>

            <SessionOne/>

            {/* <SessionTwo/>

            <SessionThree/> */}

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