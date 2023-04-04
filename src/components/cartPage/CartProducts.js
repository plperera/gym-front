import { useState } from "react"
import styled from "styled-components"
import MaquinaImage from "../../assets/images/Avatar-Maquina-Peito.png"

export default function CartProducts() {
    const [fakeProducts, setFakeProducts] = useState([{amount: 10}, {amount: 20}, {amount: 30}])
    const [timeDelete, setTimeDelete] = useState(false)

    function updateAmount(type, i) {
        const updatedProducts = [...fakeProducts]; 
        if (type === "+") {
          updatedProducts[i].amount += 1; 
        } else if (type === "-") {
          updatedProducts[i].amount -= 1; 
        }
        setFakeProducts(updatedProducts);
    }
    function removeProduct(index) {
        if(timeDelete === false){
            setTimeDelete(index)
            const updatedProducts = fakeProducts.filter((product, i) => i !== index);

            setTimeout(()=>{
                setFakeProducts(updatedProducts);
                setTimeDelete(false)
            }, 700)
        }        
    }

    return(
        
        <Container>
            {
            fakeProducts.map((e,i) => 
                <ProductContainer willDelete={ () => i === timeDelete ? ("0"):("1")}>

                    <LeftSideProduct>
                        <img src={MaquinaImage}/>
                    </LeftSideProduct>

                    <RightSideProduct>
                        <ProductTitle>Decline Chest Press Articulado</ProductTitle>
                        <ProductAmountManager>

                            <ProductAmout>
                                <div onClick={() => updateAmount("-",i)}>-</div>
                                <Amount>{fakeProducts[i].amount}</Amount>
                                <div onClick={() => updateAmount("+",i)}>+</div>
                            </ProductAmout>

                            <ProductDelete onClick={() => removeProduct(i)}>Tirar do Carrinho</ProductDelete>
                        </ProductAmountManager>
                    </RightSideProduct>
                   
                </ProductContainer>

            )
            }
        </Container>      
    )
}
const Container = styled.div`

    

`
const ProductContainer = styled.div`
    background-color: #F3F3F3;
    display: flex;
    justify-content: left;
    align-items: center;
    height: 15vh;
    width: 100%;
    padding-left: 2vw;
    border-radius: 5px;
    margin-top: 2vh;
    opacity: ${props => props.willDelete};
    transition: .7s ease-in-out !important;
`
const LeftSideProduct = styled.div`

    img {
        height: 12vh;
        object-fit: cover;
        border-radius: 5px;
    }
`
const RightSideProduct = styled.div`
    height: 12vh;
    margin-left: 2vw;
    display: flex;
    flex-direction: column;
`
const ProductTitle = styled.div`
    font-size: 2.2vh;
    font-weight: 700;
    margin-top: 1vh;
`
const ProductAmountManager = styled.div`
    height: 10vh;
    width: 40vw;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
`
const ProductDelete = styled.div`
    height: 2.5vh;
    width: 7vw;
    font-size: 1.4vh;
    color: #B30B0B;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    
    border: 2px solid #B30B0B;
    border-radius: 5px;

    :hover{
        background-color: #B30B0B;
        color: white; 
    }
`
const ProductAmout = styled.div`
    display: flex;
    flex-direction: row;
    width: 25vw;
    height: 4vh;
    div{
        width: 3vw;
        background-color: #CFCFCF;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50px;
        font-weight: 700;
        font-size: 2vh;
        margin-right: .6vw;
        cursor: pointer;
        user-select: none;
    }
`
const Amount = styled.div`
    width: 5vw !important;
`