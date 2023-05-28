import styled from "styled-components"
import { useState } from "react"
import api from "../../../services/API"
import { useEffect } from "react"
import CategoryCard from "./CategoryCard"

export default function ManageCategories (){

    const [allCategories, setAllCategories] = useState(undefined)
    async function getCategories(){
        const response = await api.GetAllCategories()
        setAllCategories(response.data)
    }

    useEffect(() => {

        getCategories()

    }, [])
    return(
        allCategories ? (
            <Container>
                {allCategories.map(e => <CategoryCard type={e.tipo} id={e.id}/>)}
            </Container>      
        ):(<Container>Carregando...</Container>)
    )
}
const Container = styled.div`
    width: 100%;
    padding-top: 4vh;
    color: #FFFFFF;

    display: flex;
    align-items: start;
    justify-content: left;
    flex-direction: row;
    flex-wrap: wrap;
    row-gap: 1.4vw;
    column-gap: 2vw;
`