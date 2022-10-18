import React, {Component, useRef} from 'react'
import axios from "axios"
import {API_URL, POKEMON_IMAGE_URL} from "../config/PokeAPI"
import {Box, Grid, IconButton, Typography} from "@mui/material"
import Loader from "../components/Loader"
import {toggleLike} from "../actions/pokemonAction"
import {FavoriteRounded} from "@mui/icons-material"
import {pink} from "@mui/material/colors"
import {connect} from "react-redux"

/*const styles = (theme) => ({
    pokemonBox: {
        display: "block",
        height: "600px",
        width: "566px",
        justifyContent: "center",
        alignItems: "center",
        margin: "auto"
    },
    pokemonImg: {
        width: "465px",
        height: "500px",
        margin: "-50px 0px 0px 0px"
    },
    pokemonName :{
        fontWeight: "500"
    }
})*/


class PokemonInfo extends Component {

    constructor(props) {
        super(props)
        this.state = {
            pokemon: null
        }
    }

    componentDidMount() {
        const { pokemon } = this.props
        // console.log(pokemon)
        const { id } = pokemon

        axios.get(API_URL + "/" + id).then((response) => {
            if (response.status >= 200 && response.status < 300){
                this.setState({ pokemon: response.data })
                // console.log(pokemon)
            }
        })
    }

    // Check likes
    likesChecker = (pokemon) => {
        let found = false
        this.props.likedPokemons?.forEach((poke) => {
            if (poke.id === pokemon.id) {
                found = true
            }
        })
        return found
    }

    render() {
        // console.log(this.props.likedPokemons)
        // style
        // const { classes } = this.props
        const { pokemon } = this.state

        if (pokemon){
            console.log(pokemon)
            const { id, name, height, weight, types, species } = pokemon

            const imgUrl = POKEMON_IMAGE_URL + species.url.split("/")[6] + ".png"
            console.log(pokemon.id)
            // const imgUrl = pokemon.imgUrl

            // Pokemon Types
            const PokemonType = () => {
                if (types[1]){
                    return `${types[0].type.name} / ${types[1].type.name}`
                }
                return types[0].type.name
            }

            return (
                    <Box key={id}>
                        <Box>
                            <Typography variant="h2" color="primary" style={{ float: "left" }}>
                                <strong>{name.toUpperCase()}</strong>
                            </Typography>
                            <IconButton aria-label="add to favorites" onClick={() => this.props.toggleLike(pokemon)}
                                        style={{ float: "right" }}>
                                <FavoriteRounded style={{ color: this.likesChecker(pokemon) ? pink[500] : "#fff", fontSize: "55px" }} />
                            </IconButton>
                        </Box>
                        <img src={imgUrl} alt="Pokemon" />
                        <Box>
                            <hr/>
                            <Grid container>
                                <Grid item md={4}>
                                    <Typography variant="body1" color="primary">
                                        Name <br/> {name.toUpperCase()}
                                    </Typography>
                                </Grid>
                                <Grid item md={2}>
                                    <Typography variant="body1" color="primary">
                                        Height <br/> {height}m
                                    </Typography>
                                </Grid>
                                <Grid item md={2}>
                                    <Typography variant="body1" color="primary">
                                        Weight <br/> {weight}Kg
                                    </Typography>
                                </Grid>
                                {/*{types.map((typePokemon) => {
                                    const { name } = typePokemon.type
                                    return (
                                        <Grid item md={2}>
                                            <Typography variant="body1" color="primary">
                                                type <br/> {name}
                                            </Typography>
                                        </Grid>
                                    )
                                })}*/}
                                <Grid item md={4}>
                                    <Typography variant="body1" color="primary">
                                        type <br/> { PokemonType() }
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>

            )
        } else {
            return <Loader />
        }
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
)(PokemonInfo)
