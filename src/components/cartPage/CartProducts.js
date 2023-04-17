import { useState } from "react"
import { toast } from "react-toastify";
import styled from "styled-components"

export default function CartProducts({ setUserData, userData, products, setRefresh, refresh }) {

    const [timeDelete, setTimeDelete] = useState(false)
    console.log(userData)

    function updateAmount(type, i) {
        const updatedProducts = [...userData.cart]; 
        if (type === "+") {
          updatedProducts[i].amount += 1; 
        } else if (type === "-") {
            if(updatedProducts[i].amount === 1){
                triggerDeleteAnimation(i)
            } else {
                updatedProducts[i].amount -= 1; 
            }
        }
        setUserData({ ...userData, cart: updatedProducts });
    }
    function removeProduct(index) {
        const updatedProducts = userData.cart.filter((product, i) => i !== index);
        setUserData({ ...userData, cart: updatedProducts });
        setRefresh(!refresh);
        toast.dark(<CustomToast>Produto removido do Carrinho</CustomToast>)
    }
    function triggerDeleteAnimation(index) {
        setTimeDelete(index);
        setTimeout(() => {
            removeProduct(index);
            setTimeDelete(null);
        }, 700);
    }

    return(
        
        <Container>
            <h2>oi</h2>
            {
            userData.cart.map((e,i) => 
                <ProductContainer willDelete={i === timeDelete} key={i}>

                    <LeftSideProduct>
                        <img src={`https://drive.google.com/uc?export=view&id=${userData.cart[i].productData.imagensProduto[0].imageRef}`} alt={userData.cart[i].productData.nome} />
                    </LeftSideProduct>

                    <RightSideProduct>
                        <ProductTitle>{userData.cart[i].productData.nome}</ProductTitle>
                        <ProductAmountManager>

                            <ProductAmout>
                                <div onClick={() => updateAmount("-",i)}>-</div>
                                <Amount>{userData?.cart[i]?.amount}</Amount>
                                <div onClick={() => updateAmount("+",i)}>+</div>
                            </ProductAmout>

                            <ProductDelete onClick={() => triggerDeleteAnimation(i)}>Tirar do Carrinho</ProductDelete>
                        </ProductAmountManager>
                    </RightSideProduct>
                </ProductContainer>
            )
            }
        </Container>      
    )
}
const CustomToast = styled.div`
    color: #E90000;
    font-weight: 700;
`
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
    transform: ${props => (props.willDelete ? "scale(0)" : "scale(1)")};
    transition: transform 0.7s ease-in-out !important;
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