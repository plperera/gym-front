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

export default function Dashboard (){

    return(
        <>       
            <Container>
               <Title>Dashboard</Title>
            </Container>
        </>
    )
}
const Container = styled.div`
    width: 100%;
    height: 100vh;
    padding-top: 7vh;
    
    background-color: #0F0F0F;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`
const LoginContainer = styled.div`
    display:flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 75%;
    width: 30vw;
    background-color: #171717;
    border-radius: 5px;
`
const Title = styled.div`
    font-size: 20vh;
    color: #ababab;
`
const ButtonStyle = styled.div`
    width: 80%;
    height: 7vh;
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
    font-size: 14px;
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