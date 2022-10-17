import {TOGGLE_LIKE} from "../constants/pokemonConstant"

const initData = {
    likedPokemons: []
}

const pokemonReducer = (state = initData, action) => {
    switch (action.type) {
        case TOGGLE_LIKE:
            let pokemon = action.payload
            let pokeFromLikedPokemons =
                state.likedPokemons.find((likedPokemon) =>
                    pokemon.id === likedPokemon.id)
            return {
                ...state,
                likedPokemons: pokeFromLikedPokemons ?
                    [...state.likedPokemons.filter(
                        (pokemon) => pokemon.id !== pokeFromLikedPokemons.id
                    )] : [...state.likedPokemons, action.payload]
            }
        default :
            return state
    }
}

export default pokemonReducer