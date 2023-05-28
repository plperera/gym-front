import styled from "styled-components"
import LogoUpFitness from "../../assets/images/logo.png"
import { ImExit } from 'react-icons/im';
import { useNavigate } from "react-router-dom";

export default function AdminMenu (){

    const navigate = useNavigate()

    function changeScreen(to){

        navigate(`/${to}`)

        window.scrollTo({
            top: 0,
            behavior: 'smooth', 
        });
        
    }
    
    return(
        <OutContainer>
            <Container>

                <LogoContainer>
                    <Image src={LogoUpFitness} onClick={ () => changeScreen("admin/dashboard") }/>
                </LogoContainer>

                <OptionsContainer>
                    <div onClick={ () => changeScreen("admin/dashboard/products") }>Ver Catálogo</div>
                </OptionsContainer>
                
                <ExitContainer onClick={ () => changeScreen("") }>
                    <ExitIcon/>
                    <span>Sair do Painel Admin</span>
                </ExitContainer>
            
            </Container>
        </OutContainer>
    )
}
const OutContainer = styled.div`
    width: 100%;
    height: 7vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #020202;
    border-bottom: 1px solid #FFA600;
    position: fixed;
    z-index: 100;
    top: 0;
    @media (max-width: 850px) {
        height: 8vh;
    }
`
const Container = styled.div`
    width: 85%;
    height: 7vh;

    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
`
const Image = styled.img`
  width: 7vh;
  cursor: pointer;
`
const LogoContainer = styled.div`
    color: white;
    display: flex;
    align-items: center;
    justify-content: left;
`
const OptionsContainer = styled.div`
    font-size: 16px;
    font-weight: bold;
    color: white;

    display: flex; 
    align-items: center;
    justify-content: space-between;
    
    div {
        width: 10vw;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
    }
    @media (max-width: 850px) {
        display: none;
    }
`
const ExitContainer = styled.div`
    font-weight: bold;

    display: flex; 
    align-items: center;
    justify-content: center;
    
    width: 14vw;
    height: 4.3vh;

    border-radius: 50px;

    cursor: pointer;
    color: #FFFFFF;
    border: 2px solid #FF0000;

    :hover{ 
        background-color: #FF0000;
    }
    span {
        text-align: center;
        font-size: 12px;
        margin-left: .6vw;
    }
    @media (max-width: 768px) {
        width: 20vw;
        height: 5vh;
        span{
            display: none;
        }
    }
`
const ExitIcon = styled(ImExit)`
    font-size: 20px;
    transition: all ease 0s !important;
    @media (max-width: 768px) {
        font-size: 27px;
    }
`