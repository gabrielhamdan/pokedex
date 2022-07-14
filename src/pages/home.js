import PokeDisplay from "../components/poke-display/poke-display";
import { useContext } from "react";
import styled, { createGlobalStyle } from "styled-components";
import { ThemeContext } from "../contexts/theme-context";
import { ThemeTogglerButton } from '../components/theme-toggler-button/theme-toggler-button'

const Home = () => {
    const { theme } = useContext(ThemeContext)

    return (
        <>
            <GlobalStyle theme={theme} />
            <Container>
                <BtnContainer>
                    <ThemeTogglerButton />
                </BtnContainer>
                <PokeDisplay />
            </Container>
            <Footer><a href="https://www.flaticon.com/free-icons/pokemon" target="_blank" rel="noreferrer" title="pokemon icons">Pokemon icons created by Nikita Golubev - Flaticon</a></Footer>
        </>
    );
}

export default Home;

const GlobalStyle = createGlobalStyle`
body {
    background-color: ${props => props.theme.background}
}
`

const Footer = styled.footer`
    display: flex;
    font-size: 8px;
    height: 50px;
    margin: 15px;
    justify-content: center;
    align-items: end;
`

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-self: center;
    min-width: 80%;
`

const BtnContainer = styled.div`
    align-self: flex-end;
`