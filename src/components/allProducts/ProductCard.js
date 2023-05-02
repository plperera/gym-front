import { useNavigate } from "react-router-dom"
import styled from "styled-components"

export default function ProductCard({imagem, titulo, subtitulo, id}){

    const imagePath = `https://drive.google.com/uc?export=view&id=${imagem}`
    const navigate = useNavigate()

    function changeScreen(){

        navigate(`/product/${id}`)

        window.scrollTo({
            top: 0,
            behavior: 'smooth', 
        });
        
    }
    return (

        <Container onClick={() => {changeScreen()}}>

            <img src={imagePath} alt={titulo}/>
            <Title>{titulo}</Title>
            <SubTitle>{subtitulo.slice(0, 80) + "..."}</SubTitle>
            <Button>{"Ver Produto >"}</Button>

        </Container>

    )
}

const Container = styled.div`  

    height: 38vh;
    width: 13vw;
    border-radius: 10px;
    
    background-color: #FFFFFF;

    display: flex;
    align-items: center;
    flex-direction: column;

    margin-right: 1.8vw;
    margin-bottom: 2.4vh;

    padding: 2vh;

    border: 3px solid #E7E7E7;
    cursor: pointer;

    :hover{
        transform: translateY(-1vh);
        border: 3px solid #ffcc00;

        h4 {
            color: #ffcc00;
            font-size: 14.5px;
        }
    }

    img {
        color: #8A8A8A;
        min-height: 90px;
        max-width: 100%;
        max-height: 55%;
    }
    div {
        display: flex;
        align-self: center;
        justify-content: center;
        flex-direction: column;
    }
    @media (max-width: 768px) {
        width: 40vw;
        height: 32vh;
    }
`
const Title = styled.div`
    height: 15%;
    width: 100%;
    font-size: 14px;
    justify-content: start !important;
    font-weight: 700;
    text-align: center;
    margin-top: 2vh;    
    color: #171717;
    @media (max-width: 768px) {
        font-size: 12px;
    }
`
const SubTitle = styled.div`
    font-size: 12px;
    height: 22%;
    width: 95%;
    color: #3B3B3B;
    text-align: center;
    justify-content: start !important;
    @media (max-width: 768px) {
        font-size: 10.5px;
    }

`
const Button = styled.h4`
    font-size: 14px;
    font-weight: 700;
    width: 100%;
    height: 8%;
    color: #171717;
    @media (max-width: 768px) {
        font-size: 12px;
    }
`