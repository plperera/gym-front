import { useState } from "react";
import styled from "styled-components";


export default function ImageCarrosel ({ images }) {

    const [current, setCurrent] = useState(0);
    const length = images.length;
  
    function ChangeSlide(action){
      if(action === 'next'){
        setCurrent( current === length - 1 ? 0 : current + 1 )
      } else if (action === 'prev'){
        setCurrent(current === 0 ? length - 1 : current - 1);
      }
    }
  
    return (
      <>
        <Container>
          <CarouselContainer>
            <ButtonStyle onClick={() => ChangeSlide('prev')}>&#10094;</ButtonStyle>
            <ImageContainer><ImageStyle src={`https://drive.google.com/uc?export=view&id=${images[current].imageRef}`}/></ImageContainer>
            <ButtonStyle onClick={() => ChangeSlide('next')}>&#10095;</ButtonStyle>
          </CarouselContainer>
        </Container>
      </>
    );
  };


const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 42.5vw;
  height: 50vh;
  padding: 3vh 0 0 1.8vw;
  @media (max-width: 768px) {
    width: 85vw;
    height: 40vh;
    padding: 0;
  }
`
const CarouselContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
`;
const ImageContainer = styled.div`
  width: 34vw;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  background-color: #F0F0F0;
  @media (max-width: 768px) {
    width: 68vw;
  }
`
const ImageStyle = styled.img`
  max-height: 100%;
  max-width: 95%;
  border-radius: 5px;
  border: none;
`
const ButtonStyle = styled.div`
  width: 4.25vw;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 50px;
  color: white;
  cursor: pointer;
  color: #F0F0F0;
  @media (max-width: 768px) {
    width: 8.5vw;
  }
`