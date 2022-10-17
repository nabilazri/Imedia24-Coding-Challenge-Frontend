export const TOGGLE_LIKE = "TOGGLE_LIKE"

export const toggleLike = (pokemon) => ({
    type: TOGGLE_LIKE,
    payload: pokemon
})