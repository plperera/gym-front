import { useContext } from "react"
import styled from "styled-components"
import CartForms from "../../components/cartPage/CartForms"
import CartProducts from "../../components/cartPage/CartProducts"
import CartResume from "../../components/cartPage/CartResume"
import UserContext from "../../context/UserContext"

export default function CartPage() {

    const { setUserData, userData } = useContext(UserContext)
    

    return(
        <Container>

            <Title>Carrinho</Title>

            <LeftContainer>

                <CartProducts/>

                <CartForms/>
                
            </LeftContainer>

            <RightContainer>
                
                <CartResume/>

            </RightContainer>

        </Container>      
    )
}
const Container = styled.div`
    width: 100vw;
    height: 100%;
    min-height: 93vh;
    background-color: #0A0A0A;
    margin-top: 7vh;

    display: flex;
    justify-content:center;
    align-items: flex-start;
    flex-wrap: wrap;
`
const Title = styled.div`
    width: 85%;
    height: 8vh;
    color: white;
    font-size: 4vh;
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