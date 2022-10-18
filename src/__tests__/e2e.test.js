import {API_URL} from "../config/PokeAPI"

jest.mock("../config/PokeAPI")

describe('Pokemons action creators', () => {

    it('calls the correct Pokemon API endpoint', () => {
        expect(API_URL).toEqual('https://pokeapi.co/api/v2/pokemon')
    })

})