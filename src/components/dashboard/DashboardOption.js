import styled from "styled-components"

export default function DashboardOption ({ Title, Icon, ComponentRef,  setPageSelector}){

    return(
        <>       
            <Container onClick={() => setPageSelector( ComponentRef )}>
               <SubContainer>
                    <OptionIcon>{Icon}</OptionIcon>
                    <OptionTitle>{Title}</OptionTitle>                
               </SubContainer>
            </Container>
        </>
    )
}
const Container = styled.div`
    width: 50%;
    height: 15vh;
    padding: 2vh 4vh 2vh 0;

    display: flex;
    align-items: left;
    justify-content: center;
    flex-direction: column;
    @media (max-width: 768px) {
        width: 100%;
    }
`
const SubContainer = styled.div`
    height: 100%;
    width: 100%;
    background-color: #171717;
    color: #FFFFFF;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`
const OptionIcon = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 20%;
    font-size:3.4rem;
    margin-right: 2vw;
    @media (max-width: 768px) {
        font-size: 30px;
    }
`
const OptionTitle = styled.div`
    display: flex;
    align-items: center;
    justify-content: left;
    width: 80%;
    font-size: 1.9rem;
    @media (max-width: 768px) {
        font-size: 20px;
    }
`
