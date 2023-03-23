import styled, { keyframes } from "styled-components"
import { RiMentalHealthLine,RiHeartPulseLine } from 'react-icons/ri';
import { SlEnergy } from 'react-icons/sl';
import { FaRegHandshake } from 'react-icons/fa';
import { BsChevronDoubleDown } from 'react-icons/bs';

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
            <Container>
                
                <Title>
                    <span>O lugar ideial para quem: </span>
                </Title>

                <OptionsContainer>

                    <Option>
                        <span><RiHeartPulseLine/></span>
                        <h1>Prioriza a Saúde</h1>
                        <h2>
                            A atividade física regular melhora sua saúde de várias maneiras,
                            incluindo a redução do estresse e ansiedade, fortalecimento dos músculos, ossos e coração,
                            a redução do risco de doenças crônicas, como diabetes, obesidade e doenças cardíacas,
                            e a melhoria da sua aptidão física geral.
                        </h2>
                    </Option>

                    <Option>
                        <span><RiMentalHealthLine/></span>
                        <h1>Deseja bater Metas</h1>
                        <h2>
                            Estabelecer metas pode ajudá-lo a sair da sua zona de conforto e
                            desafiá-lo a ir além do que pensava ser capaz. Isso pode ser emocionante e empolgante,
                            e ajudá-lo a crescer e desenvolver também habilidades pessoais.
                        </h2>
                    </Option>

                    <Option>
                        <span><SlEnergy/></span>
                        <h1>Alemeja mais Energia</h1>
                        <h2>
                            Exercitar-se regularmente pode ajudar a aumentar seus níveis de energia 
                            e disposição ao longo do dia. Isso ocorre porque o exercício libera endorfinas,
                            que são hormônios que fazem você se sentir bem e com mais energia.
                        </h2>
                    </Option>

                    <Option>
                        <span><FaRegHandshake/></span>
                        <h1>Criar novos laços</h1>
                        <h2> 
                            A academia pode ser um ótimo lugar para conhecer novas pessoas e 
                            fazer amigos que compartilham interesses e objetivos semelhantes ao seu.
                        </h2>
                    </Option>

                </OptionsContainer>

                <CardContainer>
                    <span>
                        "Suba mais um degrau em direção aos seus objetivos com a <HighlightYellow>UpFitness</HighlightYellow> - 
                        onde o sucesso é construído um treino de cada vez." 
                    </span>
                </CardContainer>
                
                <ReactIconContainer onClick={handleScroll}>
                    <BsChevronDoubleDown/>    
                </ReactIconContainer>    

            </Container>
        </>
    )
}
const moveDownAndChangeColor = keyframes`
  0% {
    transform: translateY(0);
    color: #FFD014;
  }
  50% {
    transform: translateY(0.7vh);
    color: #ffcc00;
  }
  100% {
    transform: translateY(0px);
    color: #FFD014;
  }
`;
const ReactIconContainer = styled.div`
    font-size: 60px;
    animation: ${moveDownAndChangeColor} 1s ease-in-out infinite;
    margin-top: 10vh;
    cursor: pointer;
`
const CardContainer = styled.div`

    width: 93.8%;
    height: 10vh;

    display: flex;
    align-items: center;   
    justify-content: center;
    
    background-color: #171717;
    border-radius: 5px;
    margin-top: 6vh;
    
    font-size: 2.3vh;
    padding: 2vh 0 0 0vw;

    span {
        height: 5vh;
    }
`
const Option = styled.div`  
    height: 100%;
    width: 75%;
    border-radius: 5px;

    background-color: #171717;

    display: flex;
    align-items: center;
    flex-direction: column;

    padding: 2vh;

    span {
        font-size: 70px;
        color: #ffcc00;
        height: 30%;
    }
    h1 {
        font-size: 30px;
        text-align: center;
        margin-top: 1.2vh;
        height: 20%;
    }
    h2 {
        margin-top: 2vh;
        font-size: 17px;
        height: 50%;
        color: #F0F0F0;
        /* word-break: break-all;
        hyphens: auto; */
    }

    border: 3px solid #171717;

    :hover{
        border: 3px solid #ffcc00;
    }

`
const OptionsContainer = styled.div`
    width:100%;
    height:40vh;
    margin-top: 10vh;

    display: grid;
    justify-content: center;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    row-gap: 10%;
    column-gap: 0;
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
const Container = styled.div`
    width: 100%;
    height: 100vh;
    background: #020202;
    z-index: 1;
    color: white;
    
    display: flex;
    flex-direction: column;
    padding: 10vh 0 0 8vw;

`
const Button = styled.div`
    width:20vw;
    height:60px;
    border-radius: 50px;
    background-color: #020202;

    margin-top: 7vh;
    border: 4px solid #ffcc00;
    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 25px; 
`