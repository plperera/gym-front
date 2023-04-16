import styled from "styled-components"
import LogoUpFitness from "../../assets/images/logo.png"
import { RiShoppingCartFill } from 'react-icons/ri';
import { useContext } from "react";
import UserContext from "../../context/UserContext";
import { useNavigate } from "react-router-dom";

export default function Menu (){

    const { setUserData, userData } = useContext(UserContext)
    const navigate = useNavigate()

    function changeScreen(to){

        navigate(`/${to}`)

        window.scrollTo({
            top: 0,
            behavior: 'smooth', 
        });
        
    }

    return(
        <Container>

            <LogoContainer>
                <Image src={LogoUpFitness} onClick={ () => changeScreen("") }/>
            </LogoContainer>
            
            <OptionsContainer>
                <div>Quem Somos </div>
                <div onClick={ () => changeScreen("products") }>Catálogo</div>
                <div>Contato</div>
            </OptionsContainer>

            <CardContainer onClick={ () => changeScreen("cart") }>
                <CartIcon/>
                <span>Ver Carrinho</span>
            </CardContainer>
        
        </Container>
    )
}
const Container = styled.div`
    width: 100%;
    height: 7vh;
    position: fixed;
    z-index: 100;
    background-color: #020202;

    display: flex;
    align-items: center;
    flex-direction: row;

    top: 0;
`
const Image = styled.img`
  width: 6vh;
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
const CardContainer = styled.div`
    font-weight: bold;

    display: flex; 
    align-items: center;
    justify-content: center;
    
    margin-left: 23vw;
    width: 10vw;
    height: 4.3vh;

    border-radius: 50px;

    cursor: pointer;
    color: #FFFFFF;
    border: 2px solid #ffcc00;

    :hover{ 
        background-color: #ffcc00;
    }
    span {
        text-align: center;
        font-size: 1.6vh;
        margin-left: .6vw;
    }
`
const CartIcon = styled(RiShoppingCartFill)`
    font-size: 2.8vh;
    transition: all ease 0s !important;
    
`