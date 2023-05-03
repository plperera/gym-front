import styled from "styled-components"
import { AiFillEdit } from 'react-icons/ai';
import { BsCheck2Square } from 'react-icons/bs';
import { useState } from "react";
import { toast } from "react-toastify";

export default function ProductCard ({ name }){

    const [ editMode, setEditMode ] = useState({ name: false, description: false})
    const [ form, setForm ] = useState({ name: name })

    function changeEditMode(element){
        const newValue = { ...editMode };
        if( newValue[element] && name !== form[element]) {
            toast("mudou que eu vi")
        }
        newValue[element] = !newValue[element]
        setEditMode(newValue)
    }

    function handleForm({ target: { value, name } }) {
        setForm({ ...form, [name]: value });
    }

    return(
        <>       
            <Container>
                <NameContainer>
                    {!editMode.name ? (
                        <>
                            <SubTitle onClick={ () => changeEditMode("name")}>{name}</SubTitle>
                            <ReactIconContainer onClick={ () => changeEditMode("name")}><AiFillEdit/></ReactIconContainer>
                        </>
                    ):(
                        <>
                            <InputStyle value={form.name} onChange={handleForm} name="name"/>
                            <ReactIconContainer onClick={ () => changeEditMode("name")}><BsCheck2Square/></ReactIconContainer>
                        </>
                    )}
                </NameContainer> 

                <div></div>
            </Container>
        </>
    )
}
const Container = styled.div`
    width: 20vw;
    height: 20vh;
    margin-right: 1.2vw;
    margin-top: 2vh;
    padding: 1.4vh 0.8vw 0 0.8vw;
    background-color: #353535;
    color: #FFFFFF;
    border-radius: 5px;

    display: flex;
    align-items: left;
    justify-content: start;
    flex-direction: column;
    user-select: none;
    cursor: pointer;
`
const NameContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 0.6vw;
    padding-right: 0.6vw;
    border-radius: 5px;
    width: 100%;
    height: 4vh;
    background-color: #272727;
    font-size: 1rem;
    cursor: pointer;
`
const ReactIconContainer = styled.div`
    width: 15%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`
const SubTitle = styled.div`
    width: 80%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`
const InputStyle = styled.input`
    font-size: 1rem;
    height: 90%;
    width: 85%;
    border-radius: 5px;
    background-color: #313131;
    color: #FFFFFF;
    border: none;
    font: inherit;
    outline: none;
    padding: 0 0.4vw 0 0.4vw;
`