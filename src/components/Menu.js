import styled from "styled-components"
import LogoUpFitness from "../assets/images/logo.png"

export default function Menu (){
    return(
        <Container>

            <LogoContainer>
                <Image src={LogoUpFitness}/>
            </LogoContainer>
            
            <OptionsContainer>
                <div>Quem Somos</div>
                <div>Nossos Planos</div>
                <div>Contato</div>
            </OptionsContainer>
        
        </Container>
    )
}
const Container = styled.div`
    width: 100%;
    height: 10vh;
    position: absolute;
    z-index: 10;

    display: flex;
    align-items: center;
    flex-direction: row;

    top: 0;
`
const Image = styled.img`
  width: 8vh;
  margin-left: 8vw;
  cursor: pointer;
`;
const LogoContainer = styled.div`
    color: white;
`
const OptionsContainer = styled.div`
    font-size: 17px;
    font-weight: bold;
    color: white;

    display: flex; 
    align-items: center;
    justify-content: center;
    margin-left: 8vw;
    
    div {
        margin-right: 6vw;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
    }
`