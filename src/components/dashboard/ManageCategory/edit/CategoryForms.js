import styled from "styled-components"
import { useState, useEffect } from "react";

import api from "../../../../services/API"
import { useParams } from "react-router-dom";

import useToken from "../../../../hooks/useToken";

import { useNavigate } from "react-router-dom";
import { useCustomForm } from "../../../../hooks/useCustomForms";
import { toast } from "react-toastify";

export default function CategoryForms() {

    const [ category, setCategory ] = useState("undefined");
    const [ form, handleForm ] = useCustomForm();
    const { categoryId } = useParams();

    const navigate = useNavigate()
    const token = useToken()

    async function getCategory(){
        
        try {
            const response = await api.GetCategoryById(categoryId)
            if( response.status === 200){
                return setCategory(response.data)
            }
        } catch (error) {
            toast.error("Ocorreu um erro inesperado")
        }
        
    }
    useEffect(() => {

        getCategory()

    }, [])
    function Redirect(){
        toast.dark("Redirecionando para o dashboard")
        navigate("/admin/dashboard")
    }

    async function updateCategory (){      
        if (form?.type !== category.tipo && form?.type !== undefined){
            try {   
                const body = {
                    type: form?.type,
                    id: Number(categoryId)
                }
                const response = await api.PutCategory({body, token})
                if( response.status === 200){
                    toast.dark("Produto alterado com Sucesso !!")
                    getCategory()
                }
            } catch (error) {
                toast.error("Verifique os valores !!")
            } 
        }
    }

    async function deleteCategory(){
        try {   
            const response = await api.DeleteCategory({token, body:{ id: Number(categoryId) }})
            if( response.status === 200){
                toast.dark("Produto apagado com Sucesso !!")
                Redirect()
            }

        } catch (error) {
            toast.error("Ocorreu um erro, tente atualizar a página")
        } 
    }

    return(
              
           
        category ? (

        <Container>
                
            <Title>Alterando Categoria: <span>{category?.tipo}</span></Title>
            <SubContainer>
                <InputStyle placeholder="Insira o novo nome" name="type" value={form.type} onChange={handleForm}/>
                <ButtonStyle onClick={() => updateCategory()}>Salvar</ButtonStyle>
                <DeleteButton onClick={() => deleteCategory()}>Deletar</DeleteButton>
            </SubContainer>  
                      
        </Container>
        
        ):(<Container><Title>Carregando...</Title></Container>)      
       
    )
}
const Container = styled.div`
    width: 100vw;
    min-height: 80vh;
    background-color: #020202;
    padding: 7vh 10vh 7vh 7vw;

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
    span {
        color: #ffcc00; 
    }
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
    width: 25%;
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
const DeleteButton = styled(ButtonStyle)`
    background-color: #4A0000;
    border: 2px solid;
    border-color: #FF0000;
    cursor: pointer;

    :hover{
        background-color: #FF0000;
        color: #171717;
        font-weight: bold;
        animation: none;
    }
`
const SubContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2vw;
    @media (max-width: 768px) {
        flex-direction: column;
        justify-content: center;
    }
`
