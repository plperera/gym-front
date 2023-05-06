import styled from "styled-components"
import { useContext } from "react";
import UserContext from "../../context/UserContext";
import { toast } from 'react-toastify';

export default function ProductBuyInfo({category, title, rate, productId}) {
    const { setUserData, userData } = useContext(UserContext)
    console.log(userData)
    function AddToCart(){

        let newCart

        if( userData.cart ){

            if( userData.cart.filter(e => e.id === productId).length === 0){
                newCart = [...userData?.cart, {id: productId, amount: 1}]
                toast.dark("✅ Produto adcionado no Carrinho")
            } else {
                newCart = [...userData?.cart]
                toast.dark("⚠️  O Produto ja esta no Carrinho  ⚠️")
            }
           
        } else {
            newCart = [{id: productId, amount: 1}]
            toast.dark("✅ Produto adcionado no Carrinho")
        }
        
        
        setUserData({cart: newCart})
        console.log(newCart)
        console.log(userData)
    }
    
    return(
        <Container>

            <InfoCategoria>{category.toUpperCase()}</InfoCategoria>
            <InfoNome>{title}</InfoNome>
            <InfoRate><span>★</span>{(rate/100).toFixed(1).replace(".",",")}</InfoRate>
            <Button onClick={() => AddToCart()}>Quero um orçamento</Button>
            <InfoEmpresa><span>★</span>Entregamos para todo Brasil</InfoEmpresa>
            <InfoEmpresa><span>✔</span>Faça já seu orçamento totalmente de graça</InfoEmpresa>
            <InfoEmpresa><span>☏</span>Entraremos em contato o mais rápido possível</InfoEmpresa>
            
        </Container>      
    )
}

const Container = styled.div`
    width: 100%;
    height: 100%;
    background-color: none;

    display: flex;
    flex-direction: column;

    padding: 3vh 0 0 1.8vw;
    @media (max-width: 768px) {
        padding: 0;
    }
`
const InfoCategoria = styled.div`
    font-size: 16px;
    font-weight: 700;
    color: #ffcc00;
    margin-bottom: 1.8vh;
    @media (max-width: 768px) {
        font-size: 18px;
    }
`
const InfoNome = styled.div`
    font-size: 25px;
    color: #F3F3F3;
    margin-bottom: 2.5vh;
    @media (max-width: 768px) {
        font-size: 26px;
    }

`
const InfoRate = styled.div`
    font-size: 18px;
    color: #F3F3F3;
    font-weight: 700;
    margin-bottom: 10vh;
    span {
        color: #ffcc00;
        font-size: 22px;       
        margin-right: 0.3vw;
    }
    @media (max-width: 768px) {
        font-size: 26px;
        margin-bottom: 3vh;
        span {
            font-size: 29px;
            margin-right: 1.3vw;
        }
    }
`
const Button = styled.div`
    font-size: 18px;
    width: 20vw;
    height: 5vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #44B145;
    color: #FFFFFF;
    font-weight: bold;
    border-radius: 5px;
    cursor: pointer;
    margin-bottom: 3vh;
    :hover{
        background-color: #50D152;
        color: #FFFFFF;
        transform: translateY(-0.7vh);
    }
    @media (max-width: 768px) {
        width: 100%;
        height: 7vh;
        font-size: 20px;
        margin-bottom: 1vh;
    }
`
const InfoEmpresa = styled.div`
    font-size: 15px;
    color: #C9C9C9;
    margin-top: 2vh;
    span {
        color: #ffcc00;
        font-size: 18px;
        margin-right: 0.4vw;
    }
    @media (max-width: 768px) {
        font-size: 17px;
        span {
            margin-right: 1.3vw;
            font-size: 21px;
        }
        margin-bottom: 0.8vh;
    }
`