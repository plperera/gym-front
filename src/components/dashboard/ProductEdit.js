import styled from "styled-components"
import { useState, useEffect } from "react";

import api from "../../services/API"
import { useParams } from "react-router-dom";
import ImageEdit from "./ImageEdit";
import ProductInfoEdit from "./ProductInfoEdit";
import { useCustomForm } from "../../hooks/useCustomForms";
import useToken from "../../hooks/useToken";
import { toast } from "react-toastify";

export default function ProductPage() {
    const [ product, setProduct ] = useState(undefined);
    const [ editMode, setEditMode ] = useState(false)
    const [ form, handleForm, setForm ] = useCustomForm();
    const [ imageAmount, setImageAmount ] = useState()
    const { productId } = useParams();
    const token = useToken()
    console.log(product)
    async function getProduct(){
        const response = await api.GetProductById(productId)
        setStartValueForms(response.data)
        setProduct(response.data)
    }
    function setStartValueForms(productResponse){

        let images = {}

        productResponse?.imagensProduto.map((e, i) => {
            images = ({ ...images, [`link${i}`]: `https://drive.google.com/file/d/${e.imageRef}/view?usp=share_link` } )
        })
        
        const initialBody = {
            name: productResponse.nome,
            rate: productResponse.rate / 100, 
            productId: productResponse.id, 
            largura: productResponse.largura / 100, 
            comprimento: productResponse.comprimento / 100, 
            altura: productResponse.altura / 100, 
            peso: productResponse.peso / 100, 
        }

        setForm({ ...form, ...initialBody, ...images })
    }
    async function SaveAndEdit (){
        if ( editMode ) {
            
            const body = formatBody()
            console.log("body:", body)
    
            try {   

                const response = await api.PutProduct({token, body})
                if( response.status === 200){
                    toast.dark("Produto alterado com Sucesso !!")
                    setEditMode(false)
                }
    
            } catch (error) {
                toast.error("Verifique os valores !!")
                console.log(error)
            } 

        } else {
            setEditMode(true)
        }
    }
    async function deleteProduct(){
        try {   
            console.log(token)
            const response = await api.DeleteProduct({token, body:{ id: product.id }})
            if( response.status === 200){
                toast.dark("Produto apagado com Sucesso !!")
            }

        } catch (error) {
            toast.error("Ocorreu um erro, tente atualizar a página")
            console.log(error)
        } 
    }
    function formatBody(){
        const arrayImagens = []

        imageAmount.forEach((e,i) => {
            if(e?.imageCode !== undefined){
                arrayImagens.push({nome: e.imageCode})
            }
            if(form[`imageCode${i}`] !== undefined){
                arrayImagens.push({nome: form[`imageCode${e}`]})
            }
            
        })

        return {
            id: product.id,
            nome: form.name,
            rate: Number(form.rate).toFixed(2) * 100,
            descricao: product.descricao,
            largura: Number(form.largura).toFixed(2) * 100,
            altura: Number(form.altura).toFixed(2) * 100,
            comprimento: Number(form.comprimento).toFixed(2) * 100,
            peso: Number(form.peso).toFixed(2) * 100,
            categorias: product.categoriasProduto,
            imagens: arrayImagens.reverse()
        }
    }

    useEffect(() => {

        getProduct()

    }, [editMode])

    useEffect(() => {

        console.log(form)

    }, [form])



    return(
        product ? (
            <Container>
                <ProductImageContainer>
                    <ImageEdit images={product.imagensProduto} editMode={editMode} form={form} setForm={setForm} imageAmount={imageAmount} setImageAmount={setImageAmount}/>
                </ProductImageContainer>

                <ProductBuyInfoContainer>
                    <ProductInfoEdit 
                        title={product.nome} 
                        rate={product.rate} 
                        productId={product.id} 
                        largura={product.largura} 
                        comprimento={product.comprimento} 
                        altura={product.altura} 
                        peso={product.peso} 
                        arrayCategorias={product.categoriasProduto} 
                        editMode={editMode}
                        form={form}
                        setForm={setForm}
                        handleForm={handleForm}
                    />
                </ProductBuyInfoContainer>

                <ButtonContainer>   
                    <ButtonStyle onClick={() => SaveAndEdit()}>{ editMode ? ("Salvar"):("Editar")}</ButtonStyle>
                    <DeleteButtonStyle onClick={() => deleteProduct()}>Deletar</DeleteButtonStyle>
                </ButtonContainer>
                
            </Container>      
        ):(<Container>Carregando...</Container>)
        
    )
}
const Container = styled.div`
    width: 100%;
    min-height: 100%;
    min-height: 85vh;
    background-color: #0A0A0A;
    color: white;
    margin-top: 7vh;
    padding-top: 3.5vh;
    padding-left: 7.5vw;
    padding-right: 7.5vw;

    display: flex;
    justify-content:center;
    flex-wrap: wrap;
    @media (max-width: 768px) {
    padding-top: 0;
    }
`
const ProductImageContainer = styled.div`
    width: 50%;
    height: 55vh;
    display: flex;
    align-items: center;
    justify-content: center;
    @media (max-width: 768px) {
        width: 100%;
    }
`
const ProductBuyInfoContainer = styled.div`
    width: 50%;
    min-height: 55vh;
    background-color: none;
    @media (max-width: 768px) {
        width: 100%;
        height: 40vh;
    }
`
const ButtonStyle = styled.div`
    width: 35%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 30px;
    user-select: none;
    
    background-color: #020202;
    border: 2px solid;
    border-color: #ffcc00;
    cursor: pointer;

    :hover{
        background-color: #ffcc00;
        color: #171717;
        font-weight: bold;
        animation: none;
    }
`
const DeleteButtonStyle = styled.div`
    width: 35%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 30px;
    font-weight: 700;
    user-select: none;
    
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
const ButtonContainer = styled.div`
    width: 100%;
    height: 6vh;
    display: flex;
    align-items: center;
    justify-content: space-around;
`