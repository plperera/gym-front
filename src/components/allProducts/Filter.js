import styled from "styled-components"

export default function Filter({hasSelect, categories, selectOption}) {
    return(
        <>
            <Title>{ hasSelect ? (hasSelect):("Todos os Produtos")}</Title>
            <OptionsContainer>
                {
                    categories ? (
                        categories.map((e,i) => {
                            if (i <= 5){
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

            </OptionsContainer>    
        </>
          

        
    )
}
const OptionsContainer = styled.div`
    width: 100%;
    height: 50%;
    border-radius: 5px;

    padding-left:3vw;

    display: flex;
    align-items: center;   
    justify-content: left;
    background-color: #1B1B1B;  
`
const ProductOption = styled.div`
    width: 7vw;
    height: 5vh;

    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-size: 1.7vh;
    user-select: none;

    color: ${props => props.color};
    border-radius: ${props => props.borderRadius};
    border-bottom: ${props => props.border};
    background-color: ${props => props.background};
    font-weight: ${props => props.bold};

    margin-right: 4vw;

    cursor: pointer;
`
const Title = styled.div`
    height: 50%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: left;
    font-size: 3vh;
`