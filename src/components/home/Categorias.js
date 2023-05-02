/* eslint-disable jsx-a11y/alt-text */
import styled from "styled-components"

export default function Categorias({imagem, titulo, subtitulo, changeScreen}){

    return (

        <Container onClick={() => changeScreen("products")}>

            <img src={imagem}/>
            <Title>{titulo}</Title>
            <SubTitle>{subtitulo}</SubTitle>

        </Container>

    )
}

const Container = styled.div`  

    height: 80%;
    width: 15vw;
    border-radius: 5px;
    
    background-color: #303030;

    display: flex;
    align-items: center;
    flex-direction: column;

    margin-right: 2vw;

    padding: 2vh;

    border: 3px solid #171717;
    cursor: pointer;

    :hover{
        background-color: #535353;
        transform: translateY(-1vh);
        border: 3px solid #ffcc00;
    }

    img {
        color: #ffcc00;
        height: 30%;
    }
    div {
        display: flex;
        align-self: center;
        justify-content: center;
        flex-direction: column;
    }
`
const Title = styled.div`
    height: 20%;
    width: 100%;
    font-size: 30px;
    text-align: center;
    margin-top: 2vh;    
`
const SubTitle = styled.div`
    font-size: 15px;;
    height: 50%;
    color: #F0F0F0;
    text-align: center;
    justify-content: start !important;
    margin-top: 2vh;

`