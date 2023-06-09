import styled from "styled-components"

export default function CategoriesSelector ({name, id, setForm, form}){

    function selectCategory(){
        if( !form[`category${id}`] ){
            setForm({...form, [`category${id}`]: name})
        } else {
            setForm({...form, [`category${id}`]: undefined})
        }
    }

    return(            
        <Container onClick={() => selectCategory()} isSelected={!!form[`category${id}`]}>{name}</Container>                
    )
}
const Container = styled.div`
    display: flex;
    width: 10vw;
    height: 8vh;
    font-size: 13px;
    text-align: center;
    color: "#FFFFFF";
    border: 2px solid;
    font-weight: ${props => props.isSelected ? ("700"):("500")};
    background-color: #171717;
    border-color: ${props => props.isSelected ? ("#ffcc00"):("#171717")};
    margin-right: 1vw;
    margin-bottom: 1.4vh;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    @media (max-width: 768px) {
        height: 6vh;
        width: 48.5%;
        font-size: 18px;
    }
`