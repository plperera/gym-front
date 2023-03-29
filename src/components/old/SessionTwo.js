import styled, { keyframes } from "styled-components"
import Categorias from "../Categorias";
import IconePeito from "../../assets/images/peito.png"
import IconeCosta from "../../assets/images/costas.png"
import IconePerna from "../../assets/images/perna.png"
import IconeCardio from "../../assets/images/cardio.png"
import IconePeso from "../../assets/images/peso-livre.png"
import BackgroundImage from "../../assets/images/background02.jpg"

export default function SessionTwo (){
    //"Leve sua rotina de treino para o próximo nível com UpFitness!"
    //"Eleve seu corpo e sua mente com a UpFitness."

    const handleScroll = () => {
        console.log("oi")
        window.scrollTo({
          top: window.innerHeight * 2, // rola para a altura da janela
          behavior: 'smooth', // adiciona uma animação suave
        });
    };

    return(
        <>
            <Container background={BackgroundImage}>
                
                <Title>
                    <span>As Melhores Maquinas para o Seu Melhor Treino</span>
                </Title>

                <OptionsContainer>

                    <Categorias imagem={IconePeito} titulo={"Peito"} subtitulo={"Tenha um peitoral invejável com as melhores Maquinas para essa região do corpo."}/>
                    <Categorias imagem={IconeCosta} titulo={"Costas"} subtitulo={"Descubra as máquinas mais eficientes para um treino de costas inesquecível"}/>
                    <Categorias imagem={IconePerna} titulo={"Membros Inferiores"} subtitulo={"Transforme suas pernas com os melhores exercícios para membros inferiores"}/>
                    <Categorias imagem={IconeCardio} titulo={"Cardio"} subtitulo={"Supere seus limites com um treino de cardio intenso e eficaz"}/>
                    <Categorias imagem={IconePeso} titulo={"Peso Livre"} subtitulo={"Fortaleça seu corpo e ganhe massa muscular com o treino de peso livre mais completo"}/>
                    

                </OptionsContainer>

                <ButtonContainer><div>Ver Mais</div></ButtonContainer>

            </Container>      
        </>
    )
}

const OptionsContainer = styled.div`
    width: 95%;
    height:50vh;
    margin-top: 6vh;
    display: flex;
    align-items: center;
    
`
const Title = styled.div`
    span{
        font-size: 38px;
    }
`
const HighlightYellow = styled.span`
    color: #ffcc00;
    font-weight: bold;
`
const ButtonContainer = styled.div`
    width: 91.5%;
    height: 50px;
    font-size: 25px;
    
    display: flex;
    align-items: center;
    justify-content: center;
    div {
        width: 200px;
        height: 50px;
        border-radius: 50px;
        background-color: #020202;
        border: 4px solid #ffcc00;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 25px;

        :hover{
            background-color: #ffcc00;
            color: #171717;
            font-weight: bold;
            animation: none;
        }
    }
`
const Container = styled.div`
    width: 100%;
    height: 85vh;
    background-image: url(${props => props.background});
    background-color: #020202;
    background-repeat: no-repeat;
    background-size: cover;
    
    z-index: 1;
    color: white;
    
    display: flex;
    flex-direction: column;
    padding: 10vh 0 0 8vw;

`
