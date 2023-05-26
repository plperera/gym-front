import { toast } from "react-toastify";
import styled from "styled-components"
import { useCustomForm } from "../../../hooks/useCustomForms";
import api from "../../../services/API";
import useToken from "../../../hooks/useToken";

export default function NewCategoty (){

    const [ form, handleForm ] = useCustomForm();
    const token = useToken()

    async function sendForms(){
        try {
            const body = {
                type: form.type
            }
            
            const response = await api.CreateCategoty({body, token})

            if( response.status === 201){
                toast.dark("Categoria criada com Sucesso !!")
            }

        } catch (error) {
            toast.error("Verifique o nome da Categoria !!")
        } 
    }

    return(
        <>       
           
            <Container>
                
                <Title>Criar Categoria</Title>
                <SubContainer>
                    <InputStyle placeholder="Nome da Categoria" name="type" value={form.type} onChange={handleForm}/>
                    <ButtonStyle onClick={() => sendForms()}>Criar Categoria</ButtonStyle>
                </SubContainer>  
                          
            </Container>
        
            
        </>
    )
}
const Container = styled.div`
    width: 85%;
    min-height: 80vh;
    padding: 2vh 4vh 2vh 0;

    display: flex;
    align-items: left;
    justify-content: start;
    flex-direction: column;
    color: #FFFFFF;
    @media (max-width: 768px) {
        width: 100%;
    }
`
const Title = styled.h3`
    font-size: 1.8rem;
    margin-bottom: 2vh;
    margin-top: 4.5vh;
    @media (max-width: 768px) {
        font-size: 20px;
        margin-bottom: 4vh;
    }
`
const InputStyle = styled.input`
    
    margin-right: ${props => props.margin || '0'};
    height: 4vh;
    width: 50%;
    text-decoration: none;
    opacity: 1;
    border: none;
    border-bottom: 0.5vh #ababab solid;
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
        border-bottom: 0.5vh #ffcc00 solid;
    }
    @media (max-width: 768px) {
        width: 100%;
        height: 6vh;
        font-size: 20px;
        margin-bottom: 2vh;
    }
    
`
const ButtonStyle = styled.div`
    width: 45%;
    height: 4vh;
    border-radius: 5px;
    background-color: #020202;

    border: 1px solid;
    border-color: #ffcc00;
    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.6rem;

    :hover{
        background-color: #ffcc00;
        color: #171717;
        font-weight: bold;
        animation: none;
    }
    @media (max-width: 768px) {
        width: 100%;
        height: 6vh;
        font-size: 20px;
    }
    
`
const SubContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media (max-width: 768px) {
        flex-direction: column;
        justify-content: center;
    }
`
