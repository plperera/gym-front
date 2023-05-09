import { toast } from "react-toastify";
import styled from "styled-components"

export default function ImageFormsEdit ({setForm, form, index}){

    function extractImageCode({ target: { value, name } }) {
        const regex = /^https:\/\/drive\.google\.com\/file\/d\/([^\/]+)\//;
        const match = value.match(regex);
      
        setForm({
            ...form,
            [`link${index}`]: value,
            [`imageCode${index}`]: match ? match[1] : "",
        });
        if (match && match[1]) {

            setForm({ ...form, [`link${index}`]: value, [`imageCode${index}`]: match[1] });

        } else {
            setForm({ ...form, [`link${index}`]: '', [`imageCode${index}`]: "" });
            toast.error("Erro no link de imagem enviado !!")
        }
    
    }

    return(            
        <Container>
            <InputStyle value={form[`link${index}`]} onChange={extractImageCode}/>
        </Container>                
    )
}
const Container = styled.div`
    display: flex;
    width: 100%;
`
const InputStyle = styled.input`
    
    margin-top: 1.8vh;
    height: 4vh;
    width: 100%;
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