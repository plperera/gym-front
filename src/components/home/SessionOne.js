import styled, {keyframes} from "styled-components"
import primeiraImagem from "../../assets/images/sule-makaroglu-YFmvjO3TP_s-unsplash.jpg"
import backgroundImageMobile from "../../assets/images/background-mobile.jpg"
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
                            Monta sua <HighlightYellow>academia, Studio e Condomínio. </HighlightYellow>
                        </span>
                    </Title>

                    <SubTitle>
                        Equipamentos Fitness <HighlightYellow fontSize={"28px"}>importados</HighlightYellow> com Alta Performance, Inovação e Qualidade. 
                        Entregamos um Melhor <HighlightYellow fontSize={"28px"}>Custo-Benefício</HighlightYellow> com Tecnologia Importada.
                    </SubTitle>  

                    <div>
                        <Button onClick={() => changeScreen("products")}>{"Quero ver o Catálogo"}</Button>   
                    </div> 

                    <DeliveryStatus><span>✓</span>Entregamos para todo o Brasil</DeliveryStatus> 

                    <ReactIconContainer onClick={handleScroll}>
                        <BsChevronDoubleDown/>
                    </ReactIconContainer>
                    
                </TextContainer>
                
            </UpContainer>
        
            <Background backgroundImage={primeiraImagem} backgroundImageMobile={backgroundImageMobile}/>
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
    font-size: 50px;
    animation: ${moveDownAndChangeColor} 1s ease-in-out infinite;
    margin-top: 10vh;
    cursor: pointer;
`
const Title = styled.div`
    span{
        font-size: 36px;
    }

    @media (max-width: 768px) {
        span{
            font-size: 26px;
        }     
    }
`
const SubTitle = styled.div`
    
    margin-top: 7vh;
    font-size: 30px;

    @media (max-width: 768px) {
        display: none;
    }
    
`
const HighlightYellow = styled.span`
    color: #ffcc00;
    font-weight: bold;
    font-size: ${ props => props.fontSize || "inherit"};
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

    @media ( max-width: 768px){
        padding-top: 0vh;
        height: 90vh;
        align-items: center;
    }

`
const TextContainer = styled.div`
    margin-left: -24vw;
    margin-top: 5vh;
    width: 60%;

    @media ( max-width: 768px){
        width: 100%;
        padding: 0 4vw 0 4vw;
        margin: 0;
    }
`
const DeliveryStatus = styled.div`
    width: 50%;
    font-size: 18px;
    margin-top: 5vh;
    
    border-left: 2px solid #2C2C2C;
    background-color: #3131314B;
    padding: 1vh 2vw;
    
    span {
        margin-right: 2vw;
        color: #00FF2F;
        font-size: 20px; 
    }
    @media ( max-width: 768px){
        width: 60vw;
        text-align: center;
    }
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
    font-size: 22px;

    :hover{
        background-color: #ffcc00;
        color: #171717;
        font-weight: bold;
        animation: none;
    }

    @media ( max-width: 768px){
        width: 60vw;
        height: 70px;
        text-align: center;
    }
    
`