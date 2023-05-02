import styled from "styled-components"

export default function CartForms({products, form, setForm, handleForm}) {

    function handleCellphone({ target: { value, name } }) {

        const regex = /[^0-9]/g;

        const newValue = value.replace(regex, '').replace(
        /^(\d{2})(\d{4,5})(\d{4})$/,
        "($1) $2-$3"
        );;

        setForm({ ...form, [name]: newValue });
    }

    return(
        <Container>

            <h2>Dados do Destinatario</h2>
            
            <TwoInputsContainer>
                <div>
                    <h3>Nome</h3>
                    <InputStyle placeholder='Seu Nome' name='name' onChange={handleForm} value={form.name}/>
                </div>

                <div>
                    <h3>Telefone/Celular</h3>
                    <InputStyle placeholder='Telefone para Contato' name='cellphone' onChange={handleCellphone} value={form.cellphone}/>
                </div>

            </TwoInputsContainer>

            <TwoInputsContainer>
                <div>
                    <h3>Estado</h3>
                    <InputStyle placeholder='Estado' name='estado' onChange={handleForm} value={form.estado}/>
                </div>

                <div>
                    <h3>Cidade</h3>
                    <InputStyle placeholder='Cidade' name='city' onChange={handleForm} value={form.city}/>
                </div>

            </TwoInputsContainer>

            <div>
                <h3>Email</h3>
                <InputStyle placeholder='Email para Contato' name='email' onChange={handleForm} value={form.email}/>
            </div>

        </Container>      
    )
}
const Container = styled.div`
    width: 100%;
    height: 100%;
    min-height: 32vh;

    color: white;
    border-radius: 5px;
    padding-top: 2vh;

    display: flex;
    flex-direction: column;

    h2 {
        font-size: 24px;
        font-weight: 700;
        letter-spacing: 0.2vw;
    }
    div {
        width: 100%;
    }
    h3 {
        margin-top: 1.5vh;
    }

`
const InputStyle = styled.input`
    
    margin-top: 1vh;
    height: 4vh;
    width: 100%;
    text-decoration: none;
    opacity: 1;
    border: none;
    border-bottom: 0.4vh #ababab solid;
    font-size: 15px;
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
        border-bottom: 0.4vh #ffcc00 solid;
    }
    
`
const TwoInputsContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: start; 
    
    div:first-child {
        width:48.75%;    
        margin-right: 2.5%;    
    }
    div:last-child {
        width:48.75%;
    }
    input {
        width: 100%;
    }
`