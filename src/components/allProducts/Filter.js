import { useState } from "react"
import styled from "styled-components"

export default function Filter({hasSelect, categories, selectOption}) {

    const [showAll, setShowAll] = useState(5)

    function changeShowCase(){
        showAll > 5 ?(setShowAll(5)):(setShowAll(999))
        return
    }

    return(
        <>
            <Title>{ hasSelect ? (hasSelect):("Todos os Produtos")}</Title>
            <OptionsContainer>
                {
                    categories ? (
                        categories.map((e,i) => {
                            if (i <= showAll){
                                return <ProductOption 
                                    onClick={() => selectOption(e.tipo)} 
                                    background={(hasSelect !== e.tipo) ? ("none"):("#ffcc00")}
                                    border={(hasSelect !== e.tipo) ? ("1px solid #ffcc00;"):("none")}
                                    borderRadius={(hasSelect !== e.tipo) ? ("0px"):("50px")}
                                    bold={(hasSelect !== e.tipo) ? ("400"):("700")}
                                    color={(hasSelect !== e.tipo) ? ("#FFFFFF"):("#000000")}
                                >
                                    {e.tipo}
                                </ProductOption>
                                }
                            return <></>
                        })
                    ):(<></>)  
                }
            <ShowCaseIcon onClick={() => changeShowCase()}>{showAll > 5 ?('-'):('+')}</ShowCaseIcon>
            </OptionsContainer>    
        </>
          

        
    )
}
const OptionsContainer = styled.div`
    width: 100%;
    min-height: 50%;
    max-height: 100%;
    border-radius: 5px;
    flex-wrap: wrap;

    padding: 1vh 3vw;
    row-gap: 1vh;

    display: flex;
    align-items: center;   
    justify-content: left;
    background-color: #1B1B1B;  
    @media (max-width: 768px) {
        flex-wrap: wrap;
        padding-bottom: 1vh;
    }
`
const ProductOption = styled.div`
    width: 9vw;
    height: 5vh;
    padding-bottom: 1.4vh;
    font-size: 12px;

    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    user-select: none;

    color: ${props => props.color};
    border-radius: ${props => props.borderRadius};
    border-bottom: ${props => props.border};
    background-color: ${props => props.background};
    font-weight: ${props => props.bold};

    margin-right: 4vw;

    cursor: pointer;

    @media (max-width: 768px) {
        width: 21vw;
        font-size: 12px;
    }
`
const Title = styled.div`
    height: 50%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: left;
    font-size: 32px;
    margin-bottom: 2vh;
    @media (max-width: 768px) {
        font-size: 26px;
        margin-bottom: 0vh;
    }
`
const ShowCaseIcon = styled.div`
    width: 40px;
    height: 30px;
    font-size: 20px;
    background-color: #FFFFFF;
    color: black;
    border-radius: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    position: absolute;
    right: 10vw;
    bottom: 78vh;
    cursor: pointer;
    user-select: none;
    @media (max-width: 768px) {
        width: 25px;
        height: 60px;
        font-size: 12px;
    }
`