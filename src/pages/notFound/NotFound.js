import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"

export default function NotFound (){
   
    const navigate = useNavigate()

    useEffect( () => {
        setTimeout(() => {
            
            navigate("/")
            
          }, 1500);
    })
    
    return(
        <Container>
            <h1>Pagina não encontrada</h1>
            <h2>Voltando para tela inicial...</h2>
        </Container>
    )
}
const Container = styled.div`
    width: 100%;
    height: 80vh;
    background-color: #171717;
    color: #3E3E3E;
    padding-top: 18vh;
    display: flex;
    align-items: center;
    justify-content: start;
    flex-direction: column;
    h1 { 
        font-size: 60px;
        margin-bottom: 3vh;
    }
    h2 { 
        font-size: 38px;
    }
`
