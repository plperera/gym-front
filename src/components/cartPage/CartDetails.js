import styled from "styled-components"

export default function CartDetails({products}) {


    return(
        <Container>
        
        {!products?.length ? (
            <FilledContainer>
                <div>lista de produtos</div>
            </FilledContainer>
        ):(
            <EmptyContainer>
                Ao selecionar produtos eles aparecerão aqui.
            </EmptyContainer>
        )}

        </Container>      
    )
}
const Container = styled.div`
    position: absolute;
    background-color: #1F1F1F;
    border-radius: 5px;

    display: flex;
    align-items: center;
    justify-content: center;

    right: 10vw;
    top: 6.5vh;
    
    div {
        display: flex;
        justify-content: center;
    }

`
const EmptyContainer = styled.div`
    
    align-items: center;
    height: 6vh;
    width: 25vw;
    font-size: 1.6vh;

`
const FilledContainer = styled.div`
    height: 40vh;
    width: 40vw;
`