import { toast } from "react-toastify";
import styled from "styled-components"

export default function ImageForms ({setForm, form, index}){

    function extractImageCode({ target: { value, name } }) {
        const regex = /^https:\/\/drive\.google\.com\/file\/d\/([^\/]+)\//;
        const match = value.match(regex);
      
        if (match && match[1]) {

            setForm({ ...form, [`link${index}`]: value });
            setForm({ ...form, [`imageCode${index}`]: match[1] });

        } else {
            setForm({ ...form, [`link${index}`]: value });
            setForm({ ...form, [`imageCode${index}`]: "" });
            toast.error("Erro no link de imagem enviado !!")
        }
    }

    return(            
        <Container>
            <InputStyle placeholder={`Link da Imagem (${index})`} value={form[`link${index}`]} onChange={extractImageCode}/>
            <ImageRefContainer isValid={!!form[`imageCode${index}`]} >{form[`imageCode${index}`]}</ImageRefContainer>
        </Container>                
    )
}
const Container = styled.div`
    display: flex;
    width: 76vw;
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
    font-size: 0.9rem;
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
const ImageRefContainer = styled.div`
    margin-top: 1.8vh;
    height: 4vh;
    width: 30%;
    font-size: 0.9rem;
    letter-spacing: 1px;
    color: #FFFFFF;
    border: ${props => props.isValid ? ("1px solid #00DF30"):("1px solid #1D1D1D")};
    transition: all ease 1s; 

    outline: none;
    background: #1D1D1D;
    border-radius: 5px;

    display: flex;
    align-items: center;
    justify-content: center;
`