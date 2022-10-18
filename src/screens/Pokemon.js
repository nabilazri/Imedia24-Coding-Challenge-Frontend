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

    const [pokeData, setPokeData] = useState([])

    // style
    const classes = useStyles()

    let offset = 0

    const loadMorePokemons = () => {
        axios.get(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${offset}`).then(({data}) => {
            //console.log(response.data)
            //if (data.status >= 200 && data.status < 300) {
                // const { results } = response.data
                const newPokemon = []
                data.results.forEach((pokemon, i) => {
                    i++
                    let p = {
                        id: i,
                        imgUrl: POKEMON_IMAGE_URL + pokemon.url.split("/")[6] + ".png",
                        name: pokemon.name
                    }
                    // console.log(i)
                    // console.log(pokemon.url.split("/")[6])
                    newPokemon.push(p)
                })
                setPokeData((oldPokemon) => [...oldPokemon, ...newPokemon])
            //}
        })
        offset += 10
    }

    const handleScroll = (e) => {
        // console.log(e.target.documentElement.scrollTop)
        // console.log('win: ', window.innerHeight)
        // console.log(e.target.documentElement.scrollHeight)
        if (window.innerHeight + e.target.documentElement.scrollTop + 1
            >= e.target.documentElement.scrollHeight){
            // console.log("bottom of the page")
            loadMorePokemons()
        }
    }

    useEffect(() => {
        loadMorePokemons()
        window.addEventListener("scroll", handleScroll)
    }, [])


    return (
        <Box className={classes.pokemonBox}>

                {
                    pokeData ? (
                        <Grid container spacing={2}>
                            {pokeData.map((pokemon, index) => {
                                return (
                                    <PokeCard
                                        pokemon={pokemon}
                                        pokemonImage={pokemon.imgUrl}
                                        key={index}
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
