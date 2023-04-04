import styled from "styled-components"
import { FaWeightHanging } from 'react-icons/fa';

export default function ProductEspecifcation() {


    return(
        <Container>
            <Title>Especificações</Title>
            <SubContainer>
                <h2>Dimensões</h2>
                <div>Largura: <span>61,00 cm</span></div>
                <div>Altura: <span>61,00 cm</span></div>
                <div>Comprimento: <span>61,00 cm</span></div>
            </SubContainer>

            <SubContainer>
                <h2>Membros Trabalhados</h2>
                <div><SpanCaracterEspecial>✔</SpanCaracterEspecial> <span>Peito</span></div>
                <div><SpanCaracterEspecial>✔</SpanCaracterEspecial> <span>Biceps</span></div>
                <div><SpanCaracterEspecial>✔</SpanCaracterEspecial> <span>Antebraço</span></div>
            </SubContainer>

            <SubContainer>
                <h2>Peso</h2>
                <div><IconePeso/> <span>226,60 kg</span></div>
            </SubContainer>
        </Container>      
    )
}
const Container = styled.div`

    width: 100%;
    background-color: none;

    display: flex;
    flex-wrap: wrap;
    flex-direction: row;

    padding-top: 12vh;
    color: white;
`
const SubContainer = styled.div`
    width: 25%;
    h2 {
        font-size: 2.6vh;
        color: #ffcc00;
        padding-bottom: 1vh;
        border-bottom: 4px solid #181818;
        width: 80%;
    }
    div {
        margin-top: 3vh;
        font-size: 2vh;
    }
    span {
        font-size: 1.65vh;
        font-weight: 700;
        color: #B8B8B8;
        margin-left: 0.5vw;
    }
`
const Title = styled.h1`
    width: 100%;
    font-size: 4vh;
    margin-bottom: 6vh;
`
const IconePeso = styled(FaWeightHanging)`
    color: #ffcc00;
    font-size: 1.7vh;
`;
const SpanCaracterEspecial = styled.span`
    color: #ffcc00 !important;
`