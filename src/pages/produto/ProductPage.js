import styled from "styled-components"
import ProductBuyInfo from "../../components/product/ProductBuyInfo"
import { useState, useEffect } from "react";

import ProductEspecifcation from "../../components/product/ProductEspecifcation"
import api from "../../services/API"
import { useParams } from "react-router-dom";
import ImageCarrosel from "./ImageCarrosel";

export default function ProductPage() {

    const [ product, setProduct ] = useState(undefined);
    const { productName } = useParams();

    async function getProduct(){
        const response = await api.GetProductById(productName)
        setProduct(response.data)
    }

    useEffect(() => {

        getProduct()

    }, [])

    return(
        product ? (
            <Container>
                <ProductImageContainer>
                    <ImageCarrosel images={product.imagensProduto}/>
                </ProductImageContainer>

                <ProductBuyInfoContainer>
                    <ProductBuyInfo category={product.categoriasProduto[0].categorias.tipo} title={product.nome} rate={product.rate} productId={product.id}/>
                </ProductBuyInfoContainer>

                <ProductEspecifcationContainer>
                    <ProductEspecifcation largura={product.largura} comprimento={product.comprimento} altura={product.altura} peso={product.peso} arrayCategorias={product.categoriasProduto}/>
                </ProductEspecifcationContainer>
            </Container>      
        ):(<Container>Carregando...</Container>)
        
    )
}
const Container = styled.div`
    width: 100%;
    min-height: 100%;
    min-height: 100vh;
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
    height: 50vh;
    display: flex;
    align-items: center;
    justify-content: center;
    @media (max-width: 768px) {
        width: 100%;
    }
`
const ProductBuyInfoContainer = styled.div`
    width: 50%;
    height: 50vh;
    background-color: none;
    @media (max-width: 768px) {
        width: 100%;
        height: 40vh;
    }
`
const ProductEspecifcationContainer = styled.div`
    width: 100%;
    min-height: 50vh;
`