import styled from "styled-components"

export default function CartResume({products}) {


    return(
        <Container>

            <CartResumeContainer>

                <Title>Resumo</Title>

                <InfoRow>
                    <div>Quantidade total de Produtos:</div>
                    <div>60</div>
                </InfoRow>

                <InfoRow>
                    <div>Para entregar em:</div>
                    <div>Lavras, Minas Gerais</div>
                </InfoRow>

                <InfoRow>
                    <div>Em nome de:</div>
                    <div>Pedro Pereira</div>
                </InfoRow>

                <InfoRow>
                    <div>Telefone</div>
                    <div>{"(35) 99935-1124"}</div>
                </InfoRow>

                <InfoRow>
                    <div>Email</div>
                    <div>{"plp.leoncio@gmail.com"}</div>
                </InfoRow>

                <ButtonContainer>

                    <ButtonStyled>Solicitar Orçamento</ButtonStyled>

                    <InfoDetails>
                        <span>Entraremos em contato o mais rápido possível, enviando a Proposta para o <HighlightYellow>Email</HighlightYellow> e <HighlightYellow>Telefone</HighlightYellow> informado</span>
                    </InfoDetails>

                </ButtonContainer>
            
            </CartResumeContainer>


        </Container>      
    )
}
const Container = styled.div`
    width: 100%;
    height: 100%;

    color: white;
    border-radius: 5px;
    padding-top: 2vh;

    display: flex;
    justify-content: start;
    align-items: center;
    flex-direction: column;
`
const CartResumeContainer = styled.div`
    width: 70%;
    height: 100%;
    min-height: 20vh;
    background-color: #2B2B2B;
    border-radius: 5px;
    padding: 1.5vh 2vw 0 2vw;

`
const InfoRow = styled.div`
    margin-bottom: 1.3vh;
    display: flex;
    justify-content: left;
    font-size: 1.6vh;
    border-bottom: 3px solid #3F3F3F;
    height: 3vh;

    div:first-child{
        width: 55%;
        border-bottom: none;
        display: flex;
        align-items: center;
        justify-content: left;
    }

    div:last-child{
        color: #ffcc00;
        display: flex;
        align-items: center;
        justify-content: right;
        width: 45%;
        border-bottom: none;

    }
`
const Title = styled.h3`
    text-align: center;
    font-size: 2.45vh;
    margin-bottom: 2vh;
    font-weight: 700;
`;
const ButtonContainer = styled.div`
    width: 100%;
    height: 20vh;
    display: flex;
    align-items: center;
    justify-content: start;
    flex-direction: column;
    margin-top: 4vh;
`
const ButtonStyled = styled.div`
    width: 100%;
    height: 5vh;
    border-radius: 10px;
    background-color: #44B145;
    font-size: 2.4vh;
    font-weight:700;
    color: white;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    :hover{
        background-color: #50D152;
        transform: translateY(-0.4vh)
    }
`
const InfoDetails = styled.div`
    width: 100%;
    height: 4vh;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    margin-top: 1vh;
    font-weight: 700;
    font-size: 1.4vh;
    letter-spacing: .12vw;
    color: #F5F5F5;
    span {
        margin-top: 3vh;
    }
`
const HighlightYellow = styled.span`
    color: #ffcc00;
`