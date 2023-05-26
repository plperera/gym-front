import { toast } from "react-toastify";
import styled from "styled-components"
import { useCustomForm } from "../../../hooks/useCustomForms";
import { useState } from "react";
import api from "../../../services/API";
import { useEffect } from "react";
import CategoriesSelector from "./CategoriesSelector";
import useToken from "../../../hooks/useToken";
import ImageFormsEdit from "./ImageForms";

export default function NewProduct (){

    const [ form, handleForm, setForm ] = useCustomForm();
    const [ imageAmount, setImageAmount ] = useState([0])
    const [ categories, setCategories ] = useState(undefined)
    const token = useToken()

    async function sendForm(){

        const body = formatBody()

        try {           
            const response = await api.CreateProduct({body, token})

            if( response.status === 201){
                toast.dark("Produto criado com Sucesso !!")
            }

        } catch (error) {
            toast.error("Verifique os valores !!")
        } 

    }
    function formatBody(){
        const arrayCategorias = []
        const arrayImagens = []

        imageAmount.forEach(e => {
            if(form[`imageCode${e}`] !== undefined){
                arrayImagens.push({nome: form[`imageCode${e}`]})
            }
        })
        categories.forEach(e => {
            if(form[`category${e.id}`] !== undefined){
                arrayCategorias.push({id: e.id, tipo: e.tipo})
            }
        })
        return {
            nome: form.name,
            rate: Number(form.rate).toFixed(2) * 100,
            descricao: form.descricao,
            largura: Number(form.largura).toFixed(2) * 100,
            altura: Number(form.altura).toFixed(2) * 100,
            comprimento: Number(form.comprimento).toFixed(2) * 100,
            peso: Number(form.peso).toFixed(2) * 100,
            categorias: arrayCategorias,
            imagens: arrayImagens.reverse()
        }
    }
    function AddMoreImages(){
        if (imageAmount.length < 5){
            setImageAmount([...imageAmount, imageAmount.length])
        } else {
            toast.dark("Limite de imagens atingido!!")
        }
    }
    async function GetAllCategories(){
        try {
            const response = await api.GetAllCategories()
            setCategories(response.data)
        } catch (error) {
        } 
    }
    function verifyInput(e) {
        e.target.value = formatarInput(e.target.value);
        handleForm(e);
    }
    function formatarInput(e) {
        let input = String(e) || '';
        let output = input?.replace(/[^\d,.]/g, '');
        let decimalIndex = output?.search(/[.,]/);
        if (decimalIndex !== -1) {
            let decimal = output[decimalIndex] === ',' ? '.' : output[decimalIndex];
            output = output.substring(0, decimalIndex) + decimal + output.substring(decimalIndex + 1, decimalIndex + 3)?.replace(/[.,]/g, '');
        }
        return (output) || '';
    }
    useEffect(() => {

        GetAllCategories()

    }, [])

    return(
        <>       
            {categories ? (<>
                <Container>

                    <div>
                        <Title>Informações sobre o Produto</Title>
                        <InputStyle width={"53vw"} margin={"3vw"} placeholder="Nome" name="name" value={form.name} onChange={handleForm}/>
                        <InputStyle width={"20vw"} placeholder="Avaliação" name="rate" value={form.rate} onChange={verifyInput}/>
                    </div>
                    <div>
                        <InputStyle placeholder="Descrição" name="descricao" value={form.descricao} onChange={handleForm}/>
                    </div>
                    <div>
                        <Title>Medidas</Title>
                        <InputStyle width={"17.875vw"} margin={"1.5vw"} placeholder="Largura" name="largura" value={form.largura} onChange={verifyInput}/>
                        <InputStyle width={"17.875vw"} margin={"1.5vw"} placeholder="Altura" name="altura" value={form.altura} onChange={verifyInput}/>
                        <InputStyle width={"17.875vw"} margin={"1.5vw"} placeholder="Comprimento" name="comprimento" value={form.comprimento} onChange={verifyInput}/>
                        <InputStyle width={"17.875vw"} placeholder="Peso" name="peso" value={form.peso} onChange={verifyInput}/>
                    </div>
                    <div>
                        <Title>Categoria</Title>
                        <CategoriesContainer>
                            {
                                categories.map( e => <CategoriesSelector setForm={setForm} form={form} id={e.id} name={e.tipo}/>)
                            }
                        </CategoriesContainer>
                    </div>
                    
                    <div>
                        <Title>Fotos</Title>
                        {
                            imageAmount.map(e => <ImageFormsEdit setForm={setForm} form={form} index={e} key={e}/>)
                        }
                        <ImageButtonStyle onClick={ () => AddMoreImages()}>+</ImageButtonStyle>
                    </div>

                    <ButtonStyle onClick={() => sendForm()}>Criar Produto</ButtonStyle>
                
                </Container>
            </>):(<>CARREGANDO...</>)}
            
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
        height: 100%;
        width: 100%;
    }
    
`
const Title = styled.h3`
    font-size: 1.8rem;
    margin-bottom: 2vh;
    margin-top: 4.5vh;
    @media (max-width: 768px) {
        font-size: 20px;
    }
`
const InputStyle = styled.input`
    
    margin-top: 1.8vh;
    margin-right: ${props => props.margin || '0'};
    height: 4vh;
    width: ${props => props.width || '100%'};
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
    }
    
`
const CategoriesContainer = styled.div`
    width: 100%;
    min-height: 10vh;
    max-height: 100%;
    margin-top: 2vh;
    padding: 2vh 2vh 1vh 2vh;
    background-color: #242424;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: left;
    flex-wrap: wrap;
    
`
const ImageButtonStyle = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #1A1A1A;
    margin-top: 1.5vh;
    border-radius: 5px;
    font-size: 2rem;
    height: 4vh;
    width: 100%;
    cursor: pointer;
`
const ButtonStyle = styled.div`
    width: 100%;
    height: 5vh;
    margin-top: 4vh;
    border-radius: 5px;
    background-color: #020202;

    border: 2px solid;
    border-color: #ffcc00;
    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.8rem;

    :hover{
        background-color: #ffcc00;
        color: #171717;
        font-weight: bold;
        animation: none;
    }
    
`