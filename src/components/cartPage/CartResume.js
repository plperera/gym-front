import styled from "styled-components"

export default function CartResume({userData, form}) {
    const handleClick = () => {

        const message = "Olá, gostaria de fazer um orçamento sem compromisso para os seguinte(s) item(s): \n\n";
        const phoneNumber = "35999351124"

        const nome = form?.name;
        const address = `${form?.city}, ${form?.estado}`;
        const cellphone = form?.cellphone;
        const email = form?.email;

        const messageItems = userData.cart
        .map((item) => {
        return `id:${item.id} - ${item.productData.nome} - ( ${item.amount}x )`;
        })
        .join("\n");

        const clientInfo = `\nEm nome de ${nome}, para entregar em ${address} \n\nDados para Contato: \nEmail: ${email} \nTelefone: ${cellphone}`

        const finalMessage = message + messageItems + "\n" + clientInfo + "\n"
        console.log(finalMessage)

        if (nome && form?.city && form?.estado && cellphone && email && messageItems){
            const encodedMessage = encodeURIComponent(finalMessage);
            const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
            window.open(whatsappURL, "_blank");
        }

    };

    return(
        <Container>

            <CartResumeContainer>

                <Title>Resumo</Title>

                <InfoRow>
                    <div>Quantidade total de Produtos:</div>
                    <div>{userData?.cart?.reduce((accumulator, item) => {return accumulator + item.amount}, 0)}</div>
                </InfoRow>

                <InfoRow>
                    <div>Para entregar em:</div>
                    {(form?.city && form?.estado)?(<div>{`${form?.city}, ${form?.estado}`}</div>):(<div></div>)}
                </InfoRow>

                <InfoRow>
                    <div>Em nome de:</div>
                    {(form?.name)?(<div>{`${form?.name}`}</div>):(<div></div>)}
                </InfoRow>

                <InfoRow>
                    <div>Telefone</div>
                    {(form?.cellphone)?(<div>{`${form?.cellphone}`}</div>):(<div></div>)}
                </InfoRow>

                <InfoRow>
                    <div>Email</div>
                    {(form?.email)?(<div>{`${form?.email}`}</div>):(<div></div>)}
                </InfoRow>

                <ButtonContainer>

                    <ButtonStyled onClick={handleClick}>Solicitar Orçamento</ButtonStyled>

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

    @media (max-width: 768px) {
        width: 100%;
    }

`
const InfoRow = styled.div`
    margin-bottom: 1.3vh;
    display: flex;
    justify-content: left;
    font-size: 12px;
    border-bottom: 3px solid #3F3F3F;
    height: 4vh;

    div:first-child{
        width: 60%;
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
        width: 40%;
        border-bottom: none;

    }
    @media (max-width: 768px) {
        div:last-child {
        font-size: 14px;
        text-align: center;
        }
    }
`
const Title = styled.h3`
    text-align: center;
    font-size: 22px;
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
    font-size: 20px;
    font-weight: 700;
    color: white;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    :hover{
        background-color: #50D152;
        transform: translateY(-0.4vh)
    }
    @media (max-width: 768px) {
        height: 7vh;
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
    font-size: 12px;
    letter-spacing: .06vw;
    color: #F5F5F5;
    span {
        margin-top: 3vh;
    }
    @media (max-width: 768px) {
        margin-top: 2.5vh;
    }
`
const HighlightYellow = styled.span`
    color: #ffcc00;
`