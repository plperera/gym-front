import styled from "styled-components"
import CartProducts from "./CartProducts"

export default function CartPage() {


    return(
        <Container>

            <Title>Carrinho</Title>

            <LeftContainer>

                <CartProducts/>

                <div>
                    <div>Dados do Destinatario</div>
                    <div>Nome</div>
                    <div>Telefone</div>
                    <div>Email</div>
                    <div>Estado</div>
                    <div>Cidade</div>
                </div>

            </LeftContainer>

            <RightContainer>
                <div>Resumo</div>
                <div>Quantidade de produtos</div>
                <div>Para entregar em</div>
                <div>Quero Solicitar um orçamento</div>
            </RightContainer>

        </Container>      
    )
}
const Container = styled.div`
    width: 100vw;
    height: 100%;
    min-height: 93vh;
    background-color: #0A0A0A;
    margin-top: 7vh;

    display: flex;
    justify-content:center;
    align-items: flex-start;
    flex-wrap: wrap;
`
const Title = styled.div`
    width: 85%;
    height: 8vh;
    color: white;
    font-size: 4vh;
    font-weight: 700;
    letter-spacing: 0.3vw;

    display: flex;
    align-items: flex-end;
    justify-content: left;
`
const LeftContainer = styled.div`
    width: 55%;
    height: 85vh;

`
const RightContainer = styled.div`
    width: 30%;
    height: 85vh;
    border: 4px solid blue;
`