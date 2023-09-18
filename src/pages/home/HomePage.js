import styled from "styled-components"
import SessionFour from "../../components/home/SessionFour"
import SessionOne from "../../components/home/SessionOne"
import SessionThree from "../../components/home/SessionThree"

export default function HomePage (){
    //"Leve sua rotina de treino para o próximo nível com UpFitness!"
    //"Eleve seu corpo e sua mente com a UpFitness."

    return(
        <Container>
            <SessionOne/>

            {/* <SessionTwo/> */}
          
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
    margin-top: 7vh;
`