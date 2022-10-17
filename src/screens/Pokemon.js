import React, {useEffect, useState} from 'react'
import {Box, Grid} from "@mui/material"
import axios from "axios"
import {API_URL, POKEMON_IMAGE_URL} from "../config/PokeAPI"
import PokeCard from "../components/PokeCard"
import Loader from "../components/Loader"
import {makeStyles} from "@mui/styles"


const useStyles = makeStyles((theme) => ({
    pokemonBox: {
        textAlign: "center",
        padding: "25px 10px 0px 10px",
        backgroundColor: "#FCE700"
    }
}))

const Pokemon = () => {

    const [pokeData, setPokeData] = useState(null)

    // style
    const classes = useStyles()

    useEffect(() => {
        axios.get(API_URL + "?limit=500").then((response) => {
            //console.log(response.data)
            if (response.status >= 200 && response.status < 300) {
                const { results } = response.data
                let newPokemon = []
                results.forEach((pokemon, i) => {
                    i++
                    let p = {
                        id: i,
                        imgUrl: POKEMON_IMAGE_URL + i + ".png",
                        name: pokemon.name
                    }
                    // console.log("pokemon", pokemon)
                    // console.log("p", p)
                    newPokemon.push(p)
                })
                setPokeData(newPokemon)
            }
        })
    }, [])

    return (
        <Box className={classes.pokemonBox}>
            {
                pokeData ? (
                    <Grid container spacing={2}>
                        {pokeData.map((pokemon) => {
                            return (
                                <PokeCard
                                    pokemon={pokemon}
                                    pokemonImage={pokemon.imgUrl}
                                    key={pokemon.id}
                                />
                            )
                        })}
                    </Grid>
                ) : (
                    <Loader />
                )
            }
        </Box>
    )
}

export default Pokemon
