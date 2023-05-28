import styled from "styled-components"
import { useNavigate } from "react-router-dom";

export default function CategoryCard ({ type, id }){
    const navigate = useNavigate()
    return(
        <>       
            <Container onClick={() => navigate(`/admin/dashboard/category/${id}`)}>
                               
                <h2>{type}</h2>               
                
            </Container>
        </>
    )
}
const Container = styled.div`
    width: 20vw;
    height: 9vh;
    background-color: #E1E1E1;
    color: #000000;
    border-radius: 5px;
    text-align: center;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    user-select: none;
    cursor: pointer;

    h2 {
        font-size: 20px;
    }
`