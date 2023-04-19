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
    height: 5vh;
    font-size: 2.2vh;
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
`
const InputStyle = styled.input`
    
    margin-top: 1.8vh;
    margin-right: 1.5vw;
    height: 4vh;
    width: 70%;
    text-decoration: none;
    opacity: 1;
    border: none;
    border-bottom: 0.5vh #ababab solid;
    font-size: 14px;
    color: #FFFFFF;

    padding-left: 1.6em;
    padding-right: 0;
    outline: none;
    background: #272727;
    border-radius: 5px;

    ::placeholder{
        color: #9b9b9b;
        opacity: 1;
    }
    :focus {
        border-bottom: 0.5vh #ffcc00 solid;
    }
    
`