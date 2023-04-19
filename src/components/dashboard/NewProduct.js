import { toast } from "react-toastify";
import styled from "styled-components"
import { useCustomForm } from "../../hooks/useCustomForms";
import ImageForms from "./ImageForms";
import { useState } from "react";
import api from "../../services/API";
import { useEffect } from "react";
import CategoriesSelector from "./CategoriesSelector";

export default function NewProduct (){

    const [ form, handleForm, setForm ] = useCustomForm();
    const [ imageAmount, setImageAmount ] = useState([0])
    const [ categories, setCategories ] = useState(undefined)
    const [ refresh, setRefresh ] = useState(undefined)

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
            console.log(response.data)
            setCategories(response.data)
        } catch (error) {
            console.log(error)
        } 
    }

    useEffect(() => {

        GetAllCategories()

    }, [refresh])

    return(
        <>       
            {categories ? (<>
                <Container>

                    <div>
                        <Title>Informações sobre o Produto</Title>
                        <InputStyle width={"53vw"} margin={"3vw"} placeholder="Nome" name="name" onChange={handleForm}/>
                        <InputStyle width={"20vw"} placeholder="Avaliação" name="rate" onChange={handleForm}/>
                    </div>
                    <div>
                        <InputStyle placeholder="Descrição"/>
                    </div>
                    <div>
                        <Title>Medidas</Title>
                        <InputStyle width={"17.875vw"} margin={"1.5vw"} placeholder="Largura" name="largura" onChange={handleForm}/>
                        <InputStyle width={"17.875vw"} margin={"1.5vw"} placeholder="Altura" name="altura" onChange={handleForm}/>
                        <InputStyle width={"17.875vw"} margin={"1.5vw"} placeholder="Comprimento" name="comprimento" onChange={handleForm}/>
                        <InputStyle width={"17.875vw"} placeholder="Peso" name="peso" onChange={handleForm}/>
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
                            imageAmount.map(e => <ImageForms setForm={setForm} form={form} index={e} key={e}/>)
                        }
                        <ImageButtonStyle onClick={ () => AddMoreImages()}>+</ImageButtonStyle>
                    </div>
                
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
    
`
const Title = styled.h3`
    font-size: 2.6vh;
    margin-bottom: 2vh;
    margin-top: 4.5vh;
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
        border-bottom: 0.5vh #ffcc00 solid;
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
    font-size: 3vh;
    height: 4vh;
    width: 100%;
    cursor: pointer;
`
