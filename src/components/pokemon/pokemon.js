import { Link } from 'react-router-dom'
import styled from 'styled-components';
import { ThemeContext } from "../../contexts/theme-context";
import { useContext } from "react";

const Pokemon = ({ pokemon }) => {
    const { theme } = useContext(ThemeContext)

    return (
        <li>
            <Link to={`pokemon/${pokemon.name}`}>
                <PokemonContainer theme={theme}>
                    <Div>
                        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
                        <h2>
                            {pokemon.name}
                        </h2>
                    </Div>
                </PokemonContainer >
            </Link>
        </li>
    );
}

const PokemonContainer = styled.div`
    display: flex;
    flex-direction: column;    
    height: 150px;
    width: 150px;
    justify-content: center;
    color: white;
    background-color: ${props => props.theme.container};
    border-radius: 10px;
    transition: ease-in-out .2s;

    &:hover {
        background-color: white;
        color: black;
    }
`

const Div = styled.div`
    display: flex;
    flex-direction: column;    
    align-items: center;
    justify-content: center;
    background-color: '#ffffff00';
`

export default Pokemon;