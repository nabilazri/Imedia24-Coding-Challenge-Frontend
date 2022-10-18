import React, {Component} from 'react'
import {toggleLike} from "../actions/pokemonAction"
import {connect} from "react-redux"
import {Box, Grid} from "@mui/material"
import PokeCard from "../components/PokeCard"
import {POKEMON_IMAGE_URL} from "../config/PokeAPI";

class SavedPokemons extends Component {

    render() {
        const { likedPokemons } = this.props

        return (
            <Box style={{ backgroundColor: "#FCE700" }}>
                <Grid container spacing={2} style={{ padding: "20px", textAlign: "center" }}>
                    {likedPokemons.map((pokemon) => {
                        const { species } = pokemon
                        const imgUrl = POKEMON_IMAGE_URL + species.url.split("/")[6] + ".png"
                        // const imgUrl = POKEMON_IMAGE_URL + index + ".png"
                        return (
                            <PokeCard
                                pokemon={pokemon}
                                pokemonImage={imgUrl}
                                key={pokemon.id}
                            />
                        )
                    })}
                </Grid>
            </Box>
        )
    }
}

const mapStateToProps = (state) => ({
    likedPokemons: state.likedPokemons
})

const mapDispatchToProps = (dispatch) => ({
    toggleLike: (pokemon) => dispatch(toggleLike(pokemon))
})

export default (
    connect(mapStateToProps, mapDispatchToProps)
)(SavedPokemons)
