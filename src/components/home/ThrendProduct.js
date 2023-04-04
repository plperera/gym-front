import styled from "styled-components"

export default function ThrendProduct({imagem, titulo, subtitulo}){

    return (

        <Container>

            <img src={imagem}/>
            <Title>{titulo}</Title>
            <SubTitle>{subtitulo.slice(0, 80) + "..."}</SubTitle>
            <Button>{"Quero um orçamento >"}</Button>

        </Container>

    )
}

const Container = styled.div`  

    height: 80%;
    width: 15vw;
    border-radius: 10px;
    
    background-color: #FFFFFF;

    display: flex;
    align-items: center;
    flex-direction: column;

    margin-right: 2vw;

    padding: 2vh;

    border: 3px solid #E7E7E7;
    cursor: pointer;

    :hover{
        transform: translateY(-1vh);
        border: 3px solid #ffcc00;

        h4 {
            color: #ffcc00;
            font-size: 0.9vw;
        }
    }

    img {
        color: #ffcc00;
        max-width: 100%;
        max-height: 55%;
    }
    div {
        display: flex;
        align-self: center;
        justify-content: center;
        flex-direction: column;
    }
`
const Title = styled.div`
    height: 15%;
    width: 100%;
    font-size: 0.9vw;
    justify-content: start !important;
    font-weight: 700;
    text-align: center;
    margin-top: 2vh;    
    color: #171717;
`
const SubTitle = styled.div`
    font-size: 0.7vw;
    height: 22%;
    width: 95%;
    color: #3B3B3B;
    text-align: center;
    justify-content: start !important;

`
const Button = styled.h4`

    font-size: 0.8vw;
    font-weight: 700;
    width: 100%;
    height: 8%;
    color: #171717;
`