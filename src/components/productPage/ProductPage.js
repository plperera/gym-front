import styled from "styled-components"
import ProductBuyInfo from "./ProductBuyInfo"
import MaquinaPeito from "../../assets/images/maquina-peito.jpg"
import Maquina2 from "../../assets/images/maquina01.jpg"
import Carrosel from "../Carrosel"
import ProductEspecifcation from "./ProductEspecifcation"

export default function ProductPage() {


    return(
        <Container>
            <ProductImageContainer>
                {/* <img src={MaquinaPeito}/> */}
                <Carrosel images={[MaquinaPeito, Maquina2]}/>
            </ProductImageContainer>

            <ProductBuyInfoContainer>
                <ProductBuyInfo/>
            </ProductBuyInfoContainer>

            <ProductEspecifcationContainer>
                <ProductEspecifcation/>
            </ProductEspecifcationContainer>

        </Container>      
    )
}
const Container = styled.div`
    width: 100%;
    height: 100%;
    min-height: 100vh;
    background-color: #0A0A0A;
    margin-top: 7vh;
    padding-top: 3.5vh;
    padding-left: 7vw;

    display: flex;
    justify-content:center;
    flex-wrap: wrap;
`
const ProductImageContainer = styled.div`
    width: 50%;
    height: 50vh;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
        max-height: 50vh;
        border-radius: 10px;
        border: 5px solid #313131;
    }
`
const ProductBuyInfoContainer = styled.div`
    width: 50%;
    height: 50vh;
    background-color: none;
`
const ProductEspecifcationContainer = styled.div`
    width: 100%;
    height: 50vh;
`