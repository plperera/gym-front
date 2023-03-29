import styled from "styled-components"

export default function FormularioLandingPage(){

    return (

        <Container>
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
        </Container>

    )
}
const Container = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    
`
const LeftSide = styled.div`
    width: 40%;
`
const RightSide = styled.div`
    width: 60%;
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
        font-size: 14px;
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
        font-size: 14px;
        color: #FFFFFF;
        padding-left: 1.6em;
        padding-right: 0;
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
`