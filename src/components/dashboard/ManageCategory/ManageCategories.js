import styled from "styled-components"
import { useState } from "react"
import api from "../../../services/API"
import { useEffect } from "react"
import CategoryCard from "./CategoryCard"

export default function ManageCategories (){

    const [allCategories, setAllCategories] = useState([
        {tipo:"Maquinas do tipo A", id:1},
        {tipo:"okdwkdo", id:1},
        {tipo:"okdwkdo", id:1},
        {tipo:"okdwkdo", id:1},
        {tipo:"okdwkdo", id:1},
        {tipo:"okdwkdo", id:1},
        {tipo:"okdwkdo", id:1},
        {tipo:"okdwkdo", id:1},
        {tipo:"okdwkdo", id:1},
        {tipo:"okdwkdo", id:1}
    ])
    async function getProducts(){
        const response = await api.GetAllCategories()
        setAllCategories(response.data)
    }

    useEffect(() => {

        getProducts()

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