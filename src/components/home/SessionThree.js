import styled from "styled-components"
import ThrendProduct from "./ThrendProduct";
import { useState } from "react";
import MaquinaPeitoImage from "../../assets/images/maquina-peito.jpg"
import EsteiraImage from "../../assets/images/esteira.jpg"
import BackgroundImage from "../../assets/images/background03.jpg"
export default function SessionThree (){

    const optionsArray = ["Peito", "Costas", "Membros Inferiores", "Cardio", "Peso Livre"]

    const textoLongoEsteira = "A família RX acaba de chegar em sua nova geração de esteiras! Com a maior área útil de lona do mercado (60 cm de largura) e motor 2HP, a nova RX8 NEW da Total Health é a esteira ideal para a prática de treinamentos avançados para todos os perfis de alunos. Design e durabilidade, com a qualidade da marca Total Health."
    const textoLongoPeito = "A biomecânica perfeita e a robustez que garantem resultados superiores. O Decline Chest Press Articulado foi desenvolvido para quem espera muito mais de um treinamento de força."

    const [hasSelect, setHasSelect] = useState(optionsArray[0])

    function selectOption(option){
        setHasSelect(option)
    }

    return(
        <>
            <Container background={BackgroundImage}>
                
                <Title>
                    <span>Produtos em <HighlightYellow>Alta</HighlightYellow></span>
                </Title>

                <ContainerOption>

                    {optionsArray.map( e => 
                        <ProductOption 
                            onClick={() => selectOption(e)} 
                            background={(hasSelect !== e) ? ("none"):("#ffcc00")}
                            border={(hasSelect !== e) ? ("1px solid #ffcc00;"):("none")}
                            borderRadius={(hasSelect !== e) ? ("0px"):("50px")}
                            bold={(hasSelect !== e) ? ("400"):("700")}
                            color={(hasSelect !== e) ? ("#FFFFFF"):("#000000")}
                        >
                            {e}
                        </ProductOption>
                    )}
  
                </ContainerOption>   

                <OptionsProducts>
                    <ThrendProduct imagem={MaquinaPeitoImage} titulo={"Decline Chest Press Articulado"} subtitulo={textoLongoPeito}/>
                    <ThrendProduct imagem={EsteiraImage} titulo={"Esteira Ergométrica RX8 NEW"} subtitulo={textoLongoEsteira}/>
                    <ThrendProduct imagem={MaquinaPeitoImage} titulo={"Decline Chest Press Articulado"} subtitulo={textoLongoPeito}/>
                    <ThrendProduct imagem={EsteiraImage} titulo={"Esteira Ergométrica RX8 NEW"} subtitulo={textoLongoEsteira}/>
                </OptionsProducts> 

                <ContainerButton>
                    <div>Ver Todos</div>
                </ContainerButton>

            </Container>
        </>
    )
}
const ContainerButton = styled.div`
    width: 91.5%;
    height: 50px;
    font-size: 22px;
    
    display: flex;
    align-items: center;
    justify-content: center;
    div {
        width: 200px;
        height: 50px;
        border-radius: 10px;
        background-color: #020202;
        border: 3px solid #ffcc00;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;

        :hover{
            background-color: #ffcc00;
            color: #171717;
            font-weight: bold;
            animation: none;
        }
    }
`
const HighlightYellow = styled.span`
    color: #ffcc00;
    font-weight: bold;
    font-size: 4.5vh !important;

`
const ContainerOption = styled.div`

    width: 60%;
    height: 10vh;
    border-radius: 5px;

    margin-top: 5vh;
    padding-left:3vw;

    display: flex;
    align-items: center;   
    justify-content: center;
    background-color: #1B1B1B;   
`
const ProductOption = styled.div`
    width: 8vw;
    height: 5vh;

    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-size: 1.7vh;

    color: ${props => props.color};
    border-radius: ${props => props.borderRadius};
    border-bottom: ${props => props.border};
    background-color: ${props => props.background};
    font-weight: ${props => props.bold};

    margin-right: 3vw;

    cursor: pointer;
`
const OptionsProducts = styled.div`

    width: 85%;
    height: 50vh;
    margin-top: 5vh;
    border-radius: 10px;

    display: flex;
    align-items: center;   
    justify-content: center;
    
`
const Title = styled.div`
    width: 100%;
    span{
        font-size: 4vh;
    }
`
const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-image:url(${props => props.background});
    background-repeat: no-repeat;
    background-size: cover;
    z-index: 1;
    color: white;
    
    display: flex;
    align-items: center;   
    flex-direction: column;
    padding: 10vh 0 0 8vw;

`