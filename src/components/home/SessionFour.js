import styled from "styled-components"
import BackgroundImage from "../../assets/images/background03.jpg"
import FormularioLandingPage from "./FormularioLandingPage";
export default function SessionFour (){

    return(
        <>
            <Container background={BackgroundImage}>
                
                <Title>
                    <span>Fale Conosco</span>
                </Title>
                <SubTitle>
                    <span>Entraremos em contato o mais rápido possível</span>
                </SubTitle>

                <ContainerFormulario>
                    <FormularioLandingPage/>
                </ContainerFormulario>

            </Container>
        </>
    )
}
const ContainerFormulario = styled.div`
    width: 100%;
    height: 70%;
`
const SubTitle = styled.div`
    width: 100%;
    margin-top: 1vh;
    color: #ffcc00;
    margin-bottom: 2.6vh;
    span{
        font-size: 1.2rem;
    }
`
const Title = styled.div`
    width: 100%;
    margin-top: 8vh;
    span{
        font-size: 3em;
    }
`
const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: black;
    z-index: 1;
    color: white;
    
    display: flex;
    align-items: center;   
    flex-direction: column;
    padding: 10vh 0 0 8vw;

`