import { useContext, useState, useEffect } from "react";
import styled from "styled-components"
import CartForms from "../../components/cartPage/CartForms"
import CartProducts from "../../components/cartPage/CartProducts"
import CartResume from "../../components/cartPage/CartResume"
import UserContext from "../../context/UserContext"
import api from "../../services/API"
import { useNavigate } from "react-router-dom";
import { useCustomForm } from "../../hooks/useCustomForms";

export default function CartPage() {

    const { setUserData, userData } = useContext(UserContext)
    const [ products, setProducts ] = useState(undefined);
    const [ refresh, setRefresh ] = useState(false);
    const [ verify, setVerify ] = useState(false);
    const [ form, handleForm, setForm ] = useCustomForm();
    const navigate = useNavigate()

    async function getProducts(array) {
        if (!array) {
          return;
        }
      
        const updatedCart = await Promise.all(
          array.map(async (item) => {
            const response = await api.GetProductById(item.id);
            if (response.data !== []) {
              return { ...item, productData: response.data };
            } else {
              return item;
            }
          })
        );
      
        setUserData({ ...userData, cart: updatedCart });
        setProducts([userData])
    }

    useEffect(() => {

        try {
            getProducts(userData.cart)
        } catch (error) {
            console.log(error)
        }

    }, [refresh])

    useEffect(() => {

        const test = products?.length > 0 ? (products[0].cart.length > 0) : false
        setVerify(products?.length !== undefined && test)
   
    }, [products])



    
    return(
        <Container>
            {(verify) ? (
                <>
                    <Title>Carrinho</Title>

                    <LeftContainer>

                        <CartProducts setUserData={setUserData} userData={userData} products={products} setRefresh={setRefresh} refresh={refresh} getProducts={getProducts}/>

                        <CartForms form={form} handleForm={handleForm} setForm={setForm}/>
                        
                    </LeftContainer>

                    <RightContainer onClick={() => setRefresh(!refresh)}>
                        
                        <CartResume userData={userData} form={form}/>

                    </RightContainer>
                </>
            ):(<EmptyCart onClick={ () => navigate("/products")}>Carrinho Vazio<div>(clique aqui para ir ao catálogo)</div></EmptyCart>)}
        </Container>   
    )
}
const Container = styled.div`
    width: 100%;
    height: 100%;
    min-height: 93vh;
    background-color: #0A0A0A;
    margin-top: 7vh;

    display: flex;
    justify-content:center;
    align-items: flex-start;
    flex-wrap: wrap;
`
const EmptyCart = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 30vh;
    font-size: 4rem;
    color: #747474;
    cursor: pointer;
    div {
        font-size: 1rem;
        margin-top: 1.2vh;
    }
`
const Title = styled.div`
    width: 85%;
    height: 8vh;
    color: white;
    font-size: 2.8rem;
    font-weight: 700;
    letter-spacing: 0.3vw;

    display: flex;
    align-items: flex-end;
    justify-content: left;
`
const LeftContainer = styled.div`
    width: 45%;
    min-height: 85vh;
    height: 100%;

`
const RightContainer = styled.div`
    width: 40%;
    min-height: 85vh;
    height: 100%;
`