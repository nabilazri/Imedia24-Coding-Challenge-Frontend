import {SAVE_POKEMON} from "../constants/pokemonConstant"

export const toggleLike = (pokemon) => ({
    type: SAVE_POKEMON,
    payload: pokemon
})