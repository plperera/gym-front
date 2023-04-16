import styled from "styled-components"
import { useState, useEffect } from "react";
import api from "../../services/API"
import Filter from "../../components/allProducts/Filter";
import Content from "../../components/allProducts/Content";

export default function ProductsPage() {

    const [hasSelect, setHasSelect] = useState(undefined)
    const [categories, setCategories] = useState(undefined)
    const [filterProducts, setFilterProducts] = useState(undefined)
    const [ products, setProducts ] = useState(undefined);

    function selectOption(option){
        if(option === hasSelect){

            setFilterProducts(products)
            setHasSelect(undefined)

        } else {

            const filterProducts = products.filter(item => {
                return item.categoriasProduto.some(categoriaProduto => {
                    return categoriaProduto.categorias.tipo === option;
                });
            });
            setFilterProducts(filterProducts)
            setHasSelect(option)
            
        }
        
    }

    async function getProducts(){
        const response = await api.GetAllProducts()
        const secondResponse = await api.GetAllCategories()
        setCategories(secondResponse.data.slice(0, 7))
        
        const fake = [...response.data, ...response.data, ...response.data, ...response.data, ...response.data, ...response.data]
        setFilterProducts([...fake, ...fake, ...fake])
        setProducts([...fake, ...fake, ...fake])
        console.log(fake)
    }

    useEffect(() => {

        getProducts()

    }, [])

    return(
        products ? (
            <Container>
                <CategoryMenuContainer>
                    <Filter hasSelect={hasSelect} categories={categories} selectOption={selectOption}/>
                </CategoryMenuContainer>

                <ContentContainer>
                    <Content filterProducts={filterProducts}/>
                </ContentContainer>

            </Container>      
        ):(<Container>Carregando...</Container>)
        
    )
}
const Container = styled.div`
    width: 100%;
    height: 100%;
    min-height: 100vh;
    background-color: #0A0A0A;
    color: white;
    margin-top: 7vh;
    padding-top: 3.5vh;
    padding-left: 7vw;

    display: flex;
    flex-direction: column;
`
const CategoryMenuContainer = styled.div`
    width: 85%;
    height: 15vh;
`
const ContentContainer = styled.div`
    width: 100%;
    height: 100%;
    min-height: 60vh;
`
