import styled from "styled-components"

export default function ProductBuyInfo({category, title, rate}) {
    return(
        <Container>

            <InfoCategoria>{category.toUpperCase()}</InfoCategoria>
            <InfoNome>{title}</InfoNome>
            <InfoRate><span>★</span>{(rate/100).toFixed(1).replace(".",",")}</InfoRate>
            <Button>Quero um orçamento</Button>
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
`
const InfoCategoria = styled.div`
    font-size: 2.7vh;
    font-weight: 700;
    color: #ffcc00;
    margin-bottom: 1vh;
`
const InfoNome = styled.div`
    font-size: 3.8vh;
    color: #F3F3F3;
    margin-bottom: 3vh;

`
const InfoRate = styled.div`

    font-size: 2.7vh;
    color: #F3F3F3;
    font-weight: 700;
    margin-bottom: 10vh;

    span {
        color: #ffcc00;
        font-size: 3vh;
        margin-right: 0.3vw;
    }
`
const Button = styled.div`

    font-size: 2.8vh;
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
`
const InfoEmpresa = styled.div`
    font-size: 1.8vh;
    color: #C9C9C9;
    margin-top: 2vh;
    span {
        color: #ffcc00;
        font-size: 1.8vh;
        margin-right: 0.3vw;
    }
`