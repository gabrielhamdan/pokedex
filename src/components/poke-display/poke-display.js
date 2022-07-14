import { useState, useEffect, useContext } from "react";
import { getPokemons } from "../../services/pokeAPI";
import Pokemon from "../pokemon/pokemon";
import Button from '../button/button';
import styled from "styled-components";

const PokeDisplay = () => {
    const [pokemons, setPokemons] = useState([]);

    const pokemonsPerLoad = 10;
    const [offset, setOffset] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            const loadPokemons = await getPokemons(offset);

            setPokemons([...pokemons, ...loadPokemons]);
        }

        fetchData();
    }, [offset]);

    const morePokemon = async () => {
        setOffset(offset + pokemonsPerLoad);
    }

    return (
        <>
            <Container>
                <PokeList>
                    {
                        pokemons.map((pokemon, index) => {
                            return <Pokemon pokemon={pokemon} key={index} />
                        })
                    }
                </PokeList>
                <Button label="More Pokémon" onClick={() => morePokemon()} />
            </Container>
        </>
    );
}

const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin: 10px;
`

const PokeList = styled.ul`
    display: grid;
    grid-template-columns: repeat(5, 1fr);    
    justify-content: center;
    grid-gap: 10px;
    margin: 15px;

    @media(max-width: 800px) {
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 5px;
        margin: 10px;
    }
`

export default PokeDisplay;