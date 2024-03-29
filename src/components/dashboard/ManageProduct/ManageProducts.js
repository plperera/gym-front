import styled from "styled-components"
import ProductCard from "./ProductCard"
import { useState } from "react"
import api from "../../../services/API"
import { useEffect } from "react"

export default function ManageProducts (){

    const [allProducts, setAllProducts] = useState(undefined)
    
    async function getProducts(){
        try {
            const response = await api.GetAllProducts()
            setAllProducts(response.data)
        } catch (error) {  
        } 
    }

    useEffect(() => {

        getProducts()

    }, [])
    return(
        allProducts ? (
            <Container>
                {allProducts.map(e => <ProductCard name={e.nome} id={e.id} imagem={e.imagensProduto[0].imageRef}/>)}
            </Container>      
        ):(<Container>Carregando...</Container>)
    )
}
const Container = styled.div`
    width: 100%;
    padding: 2vh 4vh 2vh 0;
    color: #FFFFFF;

    display: flex;
    align-items: start;
    justify-content: left;
    flex-direction: row;
    flex-wrap: wrap;
`