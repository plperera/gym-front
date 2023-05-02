import styled from "styled-components"

export default function Background ({backgroundImage}){
    //"Leve sua rotina de treino para o próximo nível com UpFitness!"
    //"Eleve seu corpo e sua mente com a UpFitness."

    return(
        <Container>

            <LeftSide>               
            </LeftSide>

            <RightSide>
                <Image src={backgroundImage}/>
                <ImageMobile src={backgroundImage}/>
            </RightSide>

        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    height: 100vh;
    margin-top: 7vh;

    display: flex;
    align-items: center;
    position: absolute;

    top: 0;
    @media ( max-width: 767px ){
        display: none;
    }
`

const Image = styled.img`
  width: 100%;
  height: 99%;
  object-fit: cover;
  filter: brightness(90%);
  mask-image: linear-gradient(
    to left,
    rgba(0, 0, 0, 0.7),
    rgba(0, 0, 0, 0)
  );
  @media ( max-width: 768px){ 
    display: none;
  }
`;
const ImageMobile = styled.img`
  width: 100%;
  height: 99%;
  object-fit: cover;
  filter: brightness(90%);
  mask-image: linear-gradient(
    to left,
    rgba(0, 0, 0, 0.7),
    rgba(0, 0, 0, 0)
  );
  display: none;
  @media ( max-width: 768px){ 
    display: inherit;
  }
`
const LeftSide = styled.div`
    width: 50%;
    height: 100%;
    background-color: #020202;

    display: flex;
    align-items: center;
    justify-content:center;
`
const RightSide = styled.div`
    width: 50%;
    height: 100%;
    background-color: #020202;
`