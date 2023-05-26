import styled from "styled-components"
import { useNavigate } from "react-router-dom";

export default function ProductCard ({ name, id, imagem }){
    const imagePath = `https://drive.google.com/uc?export=view&id=${imagem}`
    const navigate = useNavigate()
    return(
        <>       
            <Container onClick={() => navigate(`/admin/dashboard/product/${id}`)}>
                
                <ImageContainer>
                    <img src={imagePath} alt=""/>
                </ImageContainer>

                <TextContainer>
                    <h2>{name}</h2>
                </TextContainer>
                

            </Container>
        </>
    )
}
const Container = styled.div`
    width: 25vw;
    height: 14vh;
    margin-right: 1.2vw;
    margin-top: 2vh;
    padding: 1.4vh 0.8vw 0 0.8vw;
    background-color: #353535;
    color: #FFFFFF;
    border-radius: 5px;

    display: flex;
    align-items: left;
    justify-content: start;
    flex-direction: row;
    user-select: none;
    cursor: pointer;
`
const ImageContainer = styled.div`
    width: 8vw;
    height: 11.8vh;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
        max-width: 7.5vw;
        max-height: 12vh;
    }
`
const TextContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    margin-left: 1vw;

`