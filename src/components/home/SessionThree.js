import styled from "styled-components"
import ThrendProduct from "./ThrendProduct";
import { useState, useEffect } from "react";

import BackgroundImage from "../../assets/images/background03.jpg"
import api from "../../services/API";
import { useNavigate } from "react-router-dom";

export default function SessionThree (){

    const [hasSelect, setHasSelect] = useState(undefined)
    const [categories, setCategories] = useState(undefined)
    const [filterProducts, setFilterProducts] = useState(undefined)
    const [ products, setProducts ] = useState(undefined);
    const navigate = useNavigate()

    function selectOption(option){
        const filterProducts = products.filter(item => {
            return item.categoriasProduto.some(categoriaProduto => {
                return categoriaProduto.categorias.tipo === option;
            });
        });
        setFilterProducts(filterProducts)
        setHasSelect(option)
    }

    console.log(filterProducts)

    async function getProducts(){
        const response = await api.GetAllProducts()
        const secondResponse = await api.GetAllCategories()
        setCategories(secondResponse.data)
        setProducts(response.data)
        setFilterProducts(response.data)
    }

    useEffect(() => {

        getProducts()

    }, [])

    function changeScreen(to){

        navigate(`/${to}`)

        window.scrollTo({
            top: 0,
            behavior: 'smooth', 
        });
        
    }

    return(
        <>
            <Container background={BackgroundImage}>
                
                <Title>
                    <span>Produtos em <HighlightYellow>Alta</HighlightYellow></span>
                </Title>

                <ContainerOption>

                    {
                        categories ? (
                            categories.map((e,i) => {
                                if (i <= 5){
                                    return <ProductOption 
                                        onClick={() => selectOption(e.tipo)} 
                                        background={(hasSelect !== e.tipo) ? ("none"):("#ffcc00")}
                                        border={(hasSelect !== e.tipo) ? ("1px solid #ffcc00;"):("none")}
                                        borderRadius={(hasSelect !== e.tipo) ? ("0px"):("50px")}
                                        bold={(hasSelect !== e.tipo) ? ("400"):("700")}
                                        color={(hasSelect !== e.tipo) ? ("#FFFFFF"):("#000000")}
                                    >
                                        {e.tipo}
                                    </ProductOption>
                                    }
                                return <></>
                            })
                        ):(<></>)  
                    }
  
                </ContainerOption>   

                <OptionsProducts>
                {
                    filterProducts ? (
                        filterProducts.map((e,i) => {
                            if (i <= 5){
                                return <ThrendProduct id={e.id} imagem={e.imagensProduto[0].imageRef} titulo={e.nome} subtitulo={e.descricao}/>
                            }
                            return <></>
                        })
                    ):(<></>)
                }
                    
                    
                </OptionsProducts> 

                <ContainerButton>
                    <div onClick={() => changeScreen("products")}>Ver Todos</div>
                </ContainerButton>

            </Container>
        </>
    )
}
const ContainerButton = styled.div`
    width: 91.5%;
    height: 50px;
    font-size: 1.4rem;
    
    display: flex;
    align-items: center;
    justify-content: center;
    div {
        width: 200px;
        height: 50px;
        border-radius: 10px;
        background-color: #020202;
        border: 3px solid #ffcc00;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;

        :hover{
            background-color: #ffcc00;
            color: #171717;
            font-weight: bold;
            animation: none;
        }
    }
`
const HighlightYellow = styled.span`
    color: #ffcc00;
    font-weight: bold;
    font-size: 2.4rem !important;

`
const ContainerOption = styled.div`

    width: 60%;
    height: 10vh;
    border-radius: 5px;

    margin-top: 5vh;
    padding-left:3vw;

    display: flex;
    align-items: center;   
    justify-content: center;
    background-color: #1B1B1B;   
`
const ProductOption = styled.div`
    width: 8vw;
    height: 5vh;

    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-size: 1.2rem;

    color: ${props => props.color};
    border-radius: ${props => props.borderRadius};
    border-bottom: ${props => props.border};
    background-color: ${props => props.background};
    font-weight: ${props => props.bold};

    margin-right: 3vw;

    cursor: pointer;
`
const OptionsProducts = styled.div`

    width: 85%;
    height: 50vh;
    margin-top: 5vh;
    border-radius: 10px;

    display: flex;
    align-items: center;   
    justify-content: center;
    
`
const Title = styled.div`
    width: 100%;
    span{
        font-size: 2.4rem;
    }
`
const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-image:url(${props => props.background});
    background-repeat: no-repeat;
    background-size: cover;
    z-index: 1;
    color: white;
    
    display: flex;
    align-items: center;   
    flex-direction: column;
    padding: 10vh 0 0 8vw;

`