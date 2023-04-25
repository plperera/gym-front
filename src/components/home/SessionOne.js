import styled, {keyframes} from "styled-components"
import primeiraImagem from "../../assets/images/sule-makaroglu-YFmvjO3TP_s-unsplash.jpg"
import Background from "./Background"
import { BsChevronDoubleDown } from 'react-icons/bs';
import { useNavigate } from "react-router-dom";

export default function SessionOne (){

    const handleScroll = () => {
        window.scrollTo({
          top: window.innerHeight * 0.9,
          behavior: 'smooth',
        });
    };

    const navigate = useNavigate()

    function changeScreen(to){

        navigate(`/${to}`)

        window.scrollTo({
            top: 0,
            behavior: 'smooth', 
        });
        
    }

    return(
        <>
            <UpContainer>
                
                <TextContainer>

                    <Title>
                        <span>
                            <HighlightYellow>Você</HighlightYellow> está pronto para elevar seu treino ao 
                            <HighlightYellow> próximo nível</HighlightYellow> e conquistar o <HighlightYellow>corpo dos seus sonhos</HighlightYellow>?</span>
                    </Title>

                    <SubTitle>
                        Dê adeus aos treinos monótonos e limitados. Com nossas <HighlightYellow>Máquinas de Alta Qualidade</HighlightYellow>, 
                        você terá acesso a uma variedade de exercícios que trabalham todos os grupos musculares, 
                        <HighlightYellow> garantindo</HighlightYellow> um treino <HighlightYellow>completo e eficiente</HighlightYellow>.
                    </SubTitle>   

                    <div>
                        <Button onClick={() => changeScreen("products")}>{"Quero ver o Catálogo"}</Button>   
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
  }
  50% {
    transform: translateY(0.7vh);
  }
  100% {
    transform: translateY(0px);
  }
`;
const ReactIconContainer = styled.div`
    color: white;
    font-size: 4rem;
    animation: ${moveDownAndChangeColor} 1s ease-in-out infinite;
    margin-top: 10vh;
    cursor: pointer;
`
const Title = styled.div`
    span{
        font-size: 2.4rem;
    }
`
const SubTitle = styled.div`
    
    margin-top: 7vh;
    font-size: 2.2rem;
    
`
const HighlightYellow = styled.span`
    color: #ffcc00;
    font-weight: bold;
`
const UpContainer = styled.div`
    width: 100%;
    height: 100vh;

    margin-top:-2vh;
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
    font-size: 1.6rem;

    :hover{
        background-color: #ffcc00;
        color: #171717;
        font-weight: bold;
        animation: none;
    }
    
`