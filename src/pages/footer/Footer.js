import styled from "styled-components"
import LogoUpFitness from "../../assets/images/logo.png"
import { FaInstagram, FaFacebookSquare, FaWhatsapp } from 'react-icons/fa';
import { AiOutlineLink } from 'react-icons/ai';

export default function Footer (){
    const localizacao = "R. Kenedy dos Santos, 20A - Jardim Bela Vista, Lavras - MG, 37205-210"
    return(
        <>
        
            <Container>
                <InfoContainer>
                    <img src={LogoUpFitness}/>

                    <ReactIconContainer>
                        <div>
                            <a href="https://www.instagram.com/upsportsbrasil/"><FaInstagram/></a>
                        </div>
                        {/* <div>
                            <FaFacebookSquare/>
                        </div> */}
                        <div>
                            <a href="https://wa.me/5535997226735"><FaWhatsapp/></a>
                        </div>
                        {/* <div>
                            <AiOutlineLink/>
                        </div> */}
                    </ReactIconContainer>

                    <LocalDetails>{localizacao}</LocalDetails>

                </InfoContainer>
            </Container>

            <SubInfoContainer>
                <div>
                    <div>Todos os direitos reservados © 2023</div>
                   <SubTitle><a href="https://adsinfinite.com.br/">Feito por DG GREEN DIGITAL</a></SubTitle>
                </div>        
            </SubInfoContainer>  
        </>
    )
}
const Container = styled.div`
    width: 100%;
    height: 100%;
    
    background-color: #0F0F0F;

    display: flex;
    align-items: center;
    flex-direction: column;
`
const InfoContainer = styled.div`
    width: 85%;
    height: 15vh;
    background-color: #0F0F0F;
    display: flex;
    align-items: center;
    justify-content: space-between;
    img {
        height: 7vh;
        background-blend-mode: screen;
    }
    @media (max-width: 768px) {
        img {
            height: 5vh;
        }
    }

`
const SubInfoContainer = styled.div`
    width: 100%;
    height: 5vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #131313;
    div {
        height: 5vh;
        width: 85%;
        color: #5A5A5A;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    @media (max-width: 768px) {
        height: 6vh;
        font-size: 0.8rem;
        text-align: center;
    }
`
const ReactIconContainer = styled.div`
    font-size: 2rem;
    color: #FFFFFF;

    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 30%;
    @media (max-width: 768px) {
        font-size: 1.8rem;
        flex-wrap: wrap;
        width: 25%;
        justify-content: space-between;
        gap: 1vh;
    }
`
const LocalDetails = styled.div`
    width: 40%;
    color: #FFFFFF;
    font-size: 1rem;
    display: flex;
    align-items: center;
    justify-content: right;
    text-align: center;
    @media (max-width: 768px) {
        font-size: 0.8rem;
    }
`
const SubTitle = styled.div`
    display: flex;
    justify-content: right !important;
`
