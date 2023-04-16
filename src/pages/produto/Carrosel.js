import { useState } from "react";
import styled from "styled-components";


export default function Carrosel ({ images }) {

    const [current, setCurrent] = useState(0);
    const length = images.length;
  
    const nextSlide = () => {
      setCurrent(current === length - 1 ? 0 : current + 1);
    };
  
    const prevSlide = () => {
      setCurrent(current === 0 ? length - 1 : current - 1);
    };
  
    return (
        <CarouselContainer>
            <CarouselButton onClick={prevSlide}>&#10094;</CarouselButton>
                {images.map((image, index) => (
                    <CarouselSlide key={index} isActive={index === current}>
                    {index === current && <CarouselImage src={`https://drive.google.com/uc?export=view&id=${image.imageRef}`} alt="carousel" />}
                    </CarouselSlide>
                ))}
            <CarouselButton onClick={nextSlide}>&#10095;</CarouselButton>
        </CarouselContainer>
    );
  };
  const CarouselContainer = styled.section`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const CarouselSlide = styled.div`
  opacity: ${(props) => (props.isActive ? "1" : "0.95")};
  transition: opacity 0.4s ease-in-out;
`;

const CarouselImage = styled.img`
  max-height: 50vh;
  border-radius: 10px;
  border: 5px solid #313131;
  background-color: white;
  border-radius:5px;
`;

const CarouselButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: transparent;
  border: none;
  font-size: 5vh;
  color: white;
  cursor: pointer;
  z-index: 10;
  color: #313131;

  &:first-child {
    left: 1rem;
  }

  &:last-child {
    right: 1rem;
  }
`;