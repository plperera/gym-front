import styled from "styled-components"
import ProductCard from "./ProductCard"

export default function Content({filterProducts}) {
    return(
        <>
            <OptionsProducts>
            {
                filterProducts ? (
                    filterProducts.map((e,i) => {
                        if (i <= 999){
                            return <ProductCard id={e.id} imagem={e.imagensProduto[0].imageRef} titulo={e.nome} subtitulo={e.descricao}/>
                        }
                        return <></>
                    })
                ):(<></>)
            }               
            </OptionsProducts>  
        </>        
    )
}
const OptionsProducts = styled.div`
    width: 85%;
    height: 100%;
    margin-top: 5vh;
    border-radius: 10px;

    display: flex;
    align-items: center;   
    justify-content: center;
    flex-wrap: wrap;
    
`