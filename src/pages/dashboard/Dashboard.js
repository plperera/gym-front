import styled from "styled-components"
import DashboardOption from "../../components/dashboard/DashboardOption"
import { AiOutlineAppstoreAdd } from 'react-icons/ai';
import { MdManageSearch, MdCreateNewFolder } from 'react-icons/md';
import { RiFolderSettingsFill } from 'react-icons/ri';
import { useState } from "react";
import NewProduct from "../../components/dashboard/NewProduct/NewProduct";
import ManageProducts from "../../components/dashboard/ManageProduct/ManageProducts";
import NewCategoty from "../../components/dashboard/NewCategory/NewCatogory";

export default function Dashboard (){

    const [pageSelector, setPageSelector] = useState(false)

    return(
        <>       
            <Container>
                <Title showArrow={!!pageSelector} onClick={() => setPageSelector(undefined)}>Admin Dashboard <span>{"(clique para voltar)"}</span></Title>

                {(!!pageSelector) ? (pageSelector):(<>

                    <OptionsContainer>
                        <DashboardOption Icon={<AiOutlineAppstoreAdd/>} Title={"Novo Produto"} setPageSelector={setPageSelector} ComponentRef={<NewProduct/>} />
                        <DashboardOption Icon={<MdCreateNewFolder/>} Title={"Nova Categoria"} setPageSelector={setPageSelector} ComponentRef={<NewCategoty/>} />
                        <DashboardOption Icon={<MdManageSearch/>} Title={"Gerenciar Produtos"} setPageSelector={setPageSelector} ComponentRef={<ManageProducts/>} />
                        <DashboardOption Icon={<RiFolderSettingsFill/>} Title={"Gerenciar Categorias"} setPageSelector={setPageSelector} ComponentRef={undefined} />
                    </OptionsContainer>

                </>)}
               
            </Container>
        </>
    )
}
const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    max-height: 100%;
    padding-top: 12vh;
    padding-left: 7vw;
    background-color: #0F0F0F;

    display: flex;
    align-items: left;
    justify-content: start;
    flex-direction: column;
    @media (max-width: 768px) {
        flex-wrap: wrap;
    }
`
const Title = styled.div`
    font-size: 3rem;
    color: #FFFFFF;
    cursor: pointer;
    span {
        display: ${props => props.showArrow ? ("initial"):("none")};
        color: #5A5A5A;
        font-size: 1.2rem;
    }
    @media (max-width: 768px) {
        font-size: 25px;
        span {
            font-size: 12px;
        }
    }
`
const OptionsContainer = styled.div`
    margin-top: 4vh;
    width: 85%;
    height: 30vh;
    display: flex;
    align-items: left;
    justify-content: start;
    flex-direction: row;
    flex-wrap: wrap;
    overflow: hidden;
    @media (max-width: 768px) {
        height: 100%;
        width: 100%;
    }
`