import styled, {keyframes} from "styled-components"
import primeiraImagem from "../assets/images/sushil-ghimire-DC5akQJyH4I-unsplash.jpg"
import Background from "./Background"
import { BsChevronDoubleDown } from 'react-icons/bs';

export default function SessionOne (){
    //"Leve sua rotina de treino para o próximo nível com UpFitness!"
    //"Eleve seu corpo e sua mente com a UpFitness."

    const handleScroll = () => {
        window.scrollTo({
          top: window.innerHeight,
          behavior: 'smooth',
        });
    };

    return(
        <>
            <UpContainer>
                
                <TextContainer>

                    <Title>
                        <span>Leve sua rotina de treino para o próximo nível com <HighlightYellow>UpFitness!</HighlightYellow></span>
                    </Title>

                    <SubTitle>
                    Descubra uma academia de <HighlightYellow>alta qualidade </HighlightYellow> 
                    que pode <HighlightYellow>transformar</HighlightYellow> não 
                    apenas seu corpo, mas também sua <HighlightYellow>mente</HighlightYellow>. Com os melhores instrutores 
                    ao seu lado, você pode atingir seus <HighlightYellow>objetivos</HighlightYellow> de fitness e se sentir 
                    mais confiante, mais forte e mais saudável do que nunca.
                    </SubTitle>   

                    <div>
                        <Button>{"Saiba Mais >>>"}</Button>   
                    </div>   
                    
                    <ReactIconContainer onClick={handleScroll}>
                        <BsChevronDoubleDown/>    
                    </ReactIconContainer>    

                </TextContainer>
                
            </UpContainer>
        
            <Background backgroundImage={primeiraImagem}/>
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
    color: white;
    font-size: 60px;
    animation: ${moveDownAndChangeColor} 1s ease-in-out infinite;
    margin-top: 10vh;
    cursor: pointer;
`
const Title = styled.div`
    span{
        font-size: 38px;
    }
`
const SubTitle = styled.div`
    
    margin-top: 7vh;
    font-size: 38px;
    
`
const HighlightYellow = styled.span`
    color: #ffcc00;
    font-weight: bold;
`
const UpContainer = styled.div`
    width: 100%;
    height: 100vh;
    background-color: rgba(17, 17, 17, 0);
    z-index: 1;
    color: white;
    
    display: flex;
    align-items: center;
    justify-content: center;

`
const TextContainer = styled.div`
    margin-left: -24vw;
    margin-top: 5vh;
    width: 60%;
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