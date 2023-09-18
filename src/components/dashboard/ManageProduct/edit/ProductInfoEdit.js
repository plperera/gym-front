import styled from "styled-components"

export default function ProductInfoEdit({title, rate, largura, comprimento, altura, peso, editMode, form, handleForm}) { 
    
    return(
        editMode ? (
            <Container>

                <InfoNome>
                    <InputStyle width={"100%"} name="name" value={form.name} onChange={handleForm}/>
                </InfoNome>

                <InfoRate>
                    <span>★</span><InputStyle width={"20%"} name="rate" value={form.rate}  onChange={handleForm}/>
                </InfoRate>   

                <SubContainer>
                    <h2>Dimensões</h2>
                    <div><span>Largura: </span><InputStyle name="largura" value={form.largura} onChange={handleForm}/></div>
                    <div><span>Altura: </span><InputStyle name="altura" value={form.altura} onChange={handleForm}/></div>
                    <div><span>Comprimento: </span><InputStyle name="comprimento" value={form.comprimento} onChange={handleForm}/></div>
                    <div><span>Peso: </span><InputStyle name="peso" value={form.peso} onChange={handleForm}/></div>
                </SubContainer>

            </Container>
        ):(
            <Container>

                <InfoNome>
                    {title}
                </InfoNome>

                <InfoRate>
                    <span>★</span>{(rate/100).toFixed(1).replace(".",",")}
                </InfoRate>   

                <SubContainer>
                    <h2>Dimensões</h2>
                    <div>Largura: <span>{(largura/100).toFixed(2).replace(".",",")} cm</span></div>
                    <div>Altura: <span>{(altura/100).toFixed(2).replace(".",",")} cm</span></div>
                    <div>Comprimento: <span>{(comprimento/100).toFixed(2).replace(".",",")} cm</span></div>
                    <div>Peso: <span>{(peso/100).toFixed(2).replace(".",",")} kg</span></div>
                </SubContainer>

            </Container>
        )
              
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
const SubContainer = styled.div`
    height: 100%;
    h2 {
        font-size: 20px;
        color: #ffcc00;
        padding-bottom: 1vh;
        border-bottom: 4px solid #181818;
        width: 100%;
    }
    div {
        margin-top: 3vh;
        font-size: 16px;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    span {
        font-size: 16px;
        font-weight: 700;
        color: #B8B8B8;
    }
    @media (max-width: 768px) {
        width: 100%;
        margin-bottom: 5.5vh;
    }
`
const InputStyle = styled.input`
    height: 3.5vh;
    width: ${props => props.width || '75%'};
    text-decoration: none;
    opacity: 1;
    border: none;
    border-bottom: 0.4vh #ababab solid;
    font-size: 0.9rem;
    color: #FFFFFF;

    padding-left: 1.6em;
    padding-right: 0;
    outline: none;
    background: #272727;
    border-radius: 5px;

    ::placeholder{
        color: #9b9b9b;
        opacity: 1;
    }
    :focus {
        border-bottom: 0.4vh #ffcc00 solid;
    }
    
`