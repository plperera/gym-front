import styled from "styled-components"

export default function FormularioLandingPage(){

    return (
        
        <Container>
            <SubContainer>
                <LeftSide>
                    <ContainerInput>
                        <h4>Nome</h4>
                        <input/>
                    </ContainerInput>

                    <ContainerInput>
                        <h4>Email</h4>
                        <input/>
                    </ContainerInput>

                    <ContainerInput>
                        <h4>Telefone/Celular</h4>
                        <input/>
                    </ContainerInput>

                    <ContainerInput>
                        <h4>Estado</h4>
                        <input/>
                    </ContainerInput>

                    <ContainerInput>
                        <h4>Cidade</h4>
                        <input/>
                    </ContainerInput>

                </LeftSide>

                <RightSide>
                    <ContainerInput>
                        <h4>Assunto</h4>
                        <input/>
                    </ContainerInput>
                    
                    <ContainerMensagem>
                        <h4>Mensagem</h4>
                        <textarea/>
                    </ContainerMensagem>                
                </RightSide>
            </SubContainer>
            <ButtonStyle>Enviar</ButtonStyle>
        </Container>

    )
}
const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 85vw;
    min-height: 100vw;
`
const SubContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    height: 100%;
`
const ButtonStyle = styled.div`
    width: 85vw;
    height: 8vh;
    background-color: red;
    margin-top: 2vh;        
    border-radius: 10px;
    background-color: #020202;
    border: 3px solid #ffcc00;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    :hover{
        background-color: #ffcc00;
        color: #171717;
        font-weight: bold;
        animation: none;
    }
    @media (max-width: 768px) {
        font-size: 22px;
    }
`
const LeftSide = styled.div`
    width: 40%;
    @media (max-width: 768px) {
        width: 85vw;
    }
`
const RightSide = styled.div`
    width: 60%;
    @media (max-width: 768px) {
        width: 85vw;
    }
`
const ContainerInput = styled.div`
    height:10%;
    width: 100%;
    margin-bottom: 5%;
    input {
        height: 4vh;
        width: 85%;
        text-decoration: none;
        opacity: 1;
        border: none;
        border-bottom: 0.4vh #ababab solid;
        font-size: 0.8rem;
        color: #FFFFFF;

        padding-left: 1.6em;
        padding-right: 0;
        outline: none;
        background: #272727;
        border-radius: 5px;

        margin-top: 1vh;
        ::placeholder{
            color: #9b9b9b;
            opacity: 1;
        }
        :focus {
            border-bottom: 0.4vh #ffcc00 solid;
        }
    }
    @media (max-width: 768px) {
        height: 5.5vh;
        margin-bottom: 2vh;
        input {
            border-color: #393939;
            width: 100%;
        }
        h4 {
            height: 1.2vh;
            color: #B7B7B7;
        }
    }
`
const ContainerMensagem = styled.div`
    height:40%;
    width: 100%;
    margin-top: -1.5%;
    textarea {
        height: 21.7vh;
        width: 85%;
        text-decoration: none;
        opacity: 1;
        border: none;
        border-bottom: 0.4vh #ababab solid;
        font-size: 1rem;
        color: #FFFFFF;
        padding-left: 1.6em;
        padding-right: 0;
        padding-top: 1.6vh;
        outline: none;
        background: #272727;
        border-radius: 5px;
        word-wrap: break-word;
        overflow: auto;

        margin-top: 1vh;
        ::placeholder{
            color: #9b9b9b;
            opacity: 1;
        }
        :focus {
            border-bottom: 0.4vh #ffcc00 solid;
        }
    }
    @media (max-width: 768px) {
        margin-top: 1vh;
        textarea {
            border-color: #393939;
            height: 14vh;
            width: 100%;
        }
        h4 {
            height: 1.2vh;
            color: #B7B7B7;
        }
    }
`