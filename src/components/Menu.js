import styled from "styled-components"
import LogoUpFitness from "../assets/images/logo.png"
import { RiShoppingCartFill } from 'react-icons/ri';
import CartDetails from "./cartPage/CartDetails";

export default function Menu (){
    return(
        <Container>

            <LogoContainer>
                <Image src={LogoUpFitness}/>
            </LogoContainer>
            
            <OptionsContainer>
                <div>Quem Somos</div>
                <div>Catálogo</div>
                <div>Contato</div>
            </OptionsContainer>

            <CardContainer>
                <CartIcon/>
                <span>Ver Carrinho</span>
                
                {/* <CartDetails products={[]}/> */}
                
            </CardContainer>
        
        </Container>
    )
}
const Container = styled.div`
    width: 100%;
    height: 7vh;
    position: fixed;
    z-index: 10;
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
    font-size: 17px;
    font-weight: bold;

    display: flex; 
    align-items: center;
    justify-content: center;
    
    margin-left: 23vw;
    width: 10vw;
    height: 5vh;

    border-radius: 5px;

    cursor: pointer;
    color: #FFFFFF;
    border: 4px solid #ffcc00;

    :hover{ 
        background-color: #ffcc00;
    }
    span {
        text-align: center;
        font-size: 1.7vh;
        margin-left: .6vw;
    }
`
const CartIcon = styled(RiShoppingCartFill)`
    font-size: 3.2vh;
    transition: all ease 0s !important;
    
`