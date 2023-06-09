import styled from "styled-components"
import { FaWeightHanging } from 'react-icons/fa';

export default function ProductEspecifcation({largura, comprimento, altura, peso, arrayCategorias}) {

    return(
        <Container>
            <Title>Especificações</Title>
            <SubContainer>
                <h2>Dimensões</h2>
                <div>Largura: <span>{(largura/100).toFixed(2).replace(".",",")} cm</span></div>
                <div>Altura: <span>{(altura/100).toFixed(2).replace(".",",")} cm</span></div>
                <div>Comprimento: <span>{(comprimento/100).toFixed(2).replace(".",",")} cm</span></div>
            </SubContainer>

            <SubContainer>
                <h2>Membros Trabalhados</h2>
                {arrayCategorias.map((e,i) => 
                    <div key={i}><SpanCaracterEspecial>✔</SpanCaracterEspecial> <span>{e.categorias.tipo}</span></div>
                )}
            </SubContainer>

            <SubContainer>
                <h2>Peso</h2>
                <div><IconePeso/> <span>{(peso/100).toFixed(2).replace(".",",")} kg</span></div>
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
    @media (max-width: 768px) {
        padding-top: 3.5vh;
        margin-top: 2.5vh;
        border-top: 4px solid #181818;
    }
`
const SubContainer = styled.div`
    width: 25%;
    h2 {
        font-size: 20px;
        color: #ffcc00;
        padding-bottom: 1vh;
        border-bottom: 4px solid #181818;
        width: 80%;
    }
    div {
        margin-top: 3vh;
        font-size: 16px;
    }
    span {
        font-size: 16px;
        font-weight: 700;
        color: #B8B8B8;
        margin-left: 0.5vw;
    }
    @media (max-width: 768px) {
        width: 100%;
        margin-bottom: 5.5vh;
    }
`
const Title = styled.h1`
    width: 100%;
    font-size: 30px;
    margin-bottom: 6vh;
`
const IconePeso = styled(FaWeightHanging)`
    color: #ffcc00;
    font-size: 16px;
`;
const SpanCaracterEspecial = styled.span`
    color: #ffcc00 !important;
`