import styled from "styled-components"
import ProductCard from "./ProductCard"

export default function ManageProducts (){

    const arrayParaTeste = [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2]

    return(
        <>       
            <Container>
                <Title>Todos os Produtos</Title>
                <ProductsContainer>
                    {arrayParaTeste.map( e => <ProductCard name={"Supino Maquina TOP"}/>)}  
                </ProductsContainer>
            </Container>
        </>
    )
}
const Container = styled.div`
    width: 100%;
    min-height: 69vh;
    padding: 2vh 4vh 2vh 0;
    color: #FFFFFF;

    display: flex;
    align-items: left;
    justify-content: start;
    flex-direction: column;
`
const Title = styled.h3`
    font-size: 1.8rem;
    margin-bottom: 2vh;
    margin-top: 4.5vh;
`
const ProductsContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: left;
    flex-wrap: wrap;
`