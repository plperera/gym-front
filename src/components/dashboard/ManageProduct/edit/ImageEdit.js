import { useState } from "react";
import styled from "styled-components";
import ImageFormsEdit from "./ImageFormsEdit";
import { toast } from "react-toastify";
import { useEffect } from "react";

export default function ImageEdit ({ images, editMode, setForm, form, imageAmount, setImageAmount }) {

    const [current, setCurrent] = useState(0);
    const length = images.length;

    useEffect(() => {

      const image = images.map(e => {return {imageCode: e.imageRef}})

      setImageAmount(image)
      
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    

    function AddMoreImages(){
        if (imageAmount.length < 5){
            setImageAmount([...imageAmount, imageAmount.length])
        } else {
            toast.dark("Limite de imagens atingido!!")
        }
    }
  
    function ChangeSlide(action){
      if(action === 'next'){
        setCurrent( current === length - 1 ? 0 : current + 1 )
      } else if (action === 'prev'){
        setCurrent(current === 0 ? length - 1 : current - 1);
      }
    }

    return (
        editMode ? (
            <Container padding="0">
                <CarouselContainer>

                    <ImageContainer flex="column" start="start">
                        <Title>Fotos</Title>
                        {
                          imageAmount.map((e,i) => <ImageFormsEdit setForm={setForm} form={form} index={i} key={i} valueRef={e?.imageRef}/>)
                        }
                        <ImageButtonStyle onClick={ () => AddMoreImages()}>+</ImageButtonStyle>
                    </ImageContainer>

                </CarouselContainer>
            </Container>
        ):(
            <Container>
                <CarouselContainer>
                <ButtonStyle onClick={() => ChangeSlide('prev')}>&#10094;</ButtonStyle>
                <ImageContainer><ImageStyle src={`https://drive.google.com/uc?export=view&id=${images[current].imageRef}`}/></ImageContainer>
                <ButtonStyle onClick={() => ChangeSlide('next')}>&#10095;</ButtonStyle>
                </CarouselContainer>
            </Container>
        )
        
      
    );
  };


const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 42.5vw;
  height: 50vh;
  padding: ${props => props.padding || '3vh 0 0 1.8vw'};
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
  justify-content: ${props => props.start || 'center'};
  flex-direction: ${props => props.flex || 'row'};
  border-radius: 5px;
  background-color: ${props => props.flex || '#F0F0F0'};
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
const ImageButtonStyle = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #1A1A1A;
    margin-top: 1.5vh;
    border-radius: 5px;
    font-size: 2rem;
    height: 4vh;
    width: 100%;
    cursor: pointer;
`
const Title = styled.h3`
    font-size: 1.8rem;
    margin-bottom: 2vh;
`