import styled from "styled-components"
import LogoUpFitness from "../../assets/images/logo.png"
import { FaUserShield } from 'react-icons/fa';
import { AiOutlineLink } from 'react-icons/ai';
import { useCustomForm } from "../../hooks/useCustomForms";
import api from "../../services/API";
import { useContext, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../context/AuthContext";

export default function Login (){
    
    const [ form, handleForm ] = useCustomForm();
    const { setAuthData } = useContext(AuthContext)

    function handleKeyPress (e){
        if (e.key === 'Enter') {
            submitForm();
        }
    }
    const navigate = useNavigate()

    async function submitForm(){
        try {
        const response = await api.Login(form);
        if (response.status === 200) {
            setAuthData(response.data)
            navigate("/admin/dashboard")
            toast.dark("Login feito com sucesso")
        } 
        } catch (error) {
            toast.error("Verifique os dados de Login")
            console.error(`Erro ao fazer login: ${error}`);
        }
    };

    return(
        <>       
            <Container>
                <LoginContainer>
                    <Title><FaUserShield/></Title>
                    <InputStyle placeholder="Email" value={form.email} name="email" onChange={handleForm}/>
                    <InputStyle placeholder="Senha" value={form.password} name="password" onChange={handleForm} type="password" onKeyPress={handleKeyPress}/>
                    <ButtonStyle onClick={() => submitForm()}>Entrar</ButtonStyle>

                </LoginContainer>
            </Container>
        </>
    )
}
const Container = styled.div`
    width: 100%;
    height: 100%;
    padding-top: 7vh;
    
    background-color: #0F0F0F;

    display: flex;
    align-items: center;
    justify-content: start;
    flex-direction: column;
`
const LoginContainer = styled.div`
    display:flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-top: 4vh;
    min-height: 69vh;
    width: 30vw;
    background-color: #171717;
    border-radius: 5px;
    @media (max-width: 768px) {
        width: 100%;
        border-radius: 0px;
    }
`
const Title = styled.div`
    font-size: 11rem;
    color: #ababab;
`
const ButtonStyle = styled.div`
    width: 80%;
    height: 7vh;
    font-size: 1.6rem;
    font-weight: 700;
    background-color: #ffcc00;
    margin-top: 3.3vh;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center; 
    cursor: pointer;
`
const InputStyle = styled.input`
    margin-top: 1vh;
    margin-bottom: 1vh;
    height: 6vh;
    width: 80%;
    text-decoration: none;
    opacity: 1;
    border: none;
    border-bottom: 0.4vh #ababab solid;
    font-size: 0.95rem;
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