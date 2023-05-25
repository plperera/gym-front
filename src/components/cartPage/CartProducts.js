import { useState } from "react"
import { toast } from "react-toastify";
import styled from "styled-components"
import { BsFillTrashFill } from 'react-icons/bs';

export default function CartProducts({ setUserData, userData, products, setRefresh, refresh }) {

    const [timeDelete, setTimeDelete] = useState(false)

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
        console.log(updatedProducts)
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
            {
            userData?.cart?.map((e,i) => 
                <ProductContainer willDelete={i === timeDelete} key={i}>

                    <LeftSideProduct>
                        <img src={`https://drive.google.com/uc?export=view&id=${userData?.cart[i]?.productData?.imagensProduto[0]?.imageRef | ""}`} alt={userData.cart[i].productData.nome} />
                    </LeftSideProduct>

                    <RightSideProduct>
                        <ProductTitle>{userData.cart[i].productData.nome | ""}</ProductTitle>
                        <ProductAmountManager>

                            <ProductAmout>
                                <div onClick={() => updateAmount("-",i)}>-</div>
                                <Amount>{userData?.cart[i]?.amount | ""}</Amount>
                                <div onClick={() => updateAmount("+",i)}>+</div>
                            </ProductAmout>

                            <ProductDelete onClick={() => triggerDeleteAnimation(i)}><span>Tirar do Carrinho</span><MobileIcon/></ProductDelete>
                        </ProductAmountManager>
                    </RightSideProduct>
                </ProductContainer>
            )}
        </Container>      
    )
}
const MobileIcon = styled(BsFillTrashFill)`
    display: none;
    @media (max-width: 768px) {
        display: inherit;
    }
`
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
    @media (max-width: 768px) {
        padding-left: 3vw;
        height: 16vh;
    }
`
const LeftSideProduct = styled.div`
    img {
        height: 12vh;
        object-fit: cover;
        border-radius: 5px;
    }

    @media (max-width: 768px) {
        width: 25vw;
        height: 10vh;
        display: flex;
        align-items: center;
        justify-content: center;
        img {
            max-width: 25vw;
            max-height: 12vh;
        }
    }
`
const RightSideProduct = styled.div`
    height: 12vh;
    margin-left: 2vw;
    display: flex;
    flex-direction: column;
    @media (max-width: 768px) {
        margin-left: 3vw;
        width: 60vw;
        padding-right: 5vw;
    }
`
const ProductTitle = styled.div`
    font-size: 19px;
    font-weight: 700;
    margin-top: 1vh;
    @media (max-width: 768px) {
        font-size: 13px;
    }
`
const ProductAmountManager = styled.div`
    height: 10vh;
    width: 30vw;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    @media (max-width: 768px) {
        margin-top: 3vh;
        width: 100%;
    }
`
const ProductDelete = styled.div`
    height: 2.5vh;
    width: 9vw;
    font-size: 11px;
    font-weight: 700;
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
    @media (max-width: 768px) {
        width: 8vw;
        height: 3.5vh;
        font-size: 15px;
        span { 
            display: none;
        }
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
        font-size: 18px;
        margin-right: .6vw;
        cursor: pointer;
        user-select: none;
    }
    @media (max-width: 768px) {
        width: 40vw;
        margin-top: 0.8vh;
        div {
            width: 8vw;
            height: 3.5vh;
            font-size: 15px;
        }
    }
`
const Amount = styled.div`
    width: 5vw !important;
    @media (max-width: 768px) {
        width: 12vw !important;
        height: 3.5vh;      
    }
`