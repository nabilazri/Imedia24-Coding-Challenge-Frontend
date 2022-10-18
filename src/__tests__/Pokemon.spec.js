import {render} from "@testing-library/react"
import Pokemon from "../screens/Pokemon"

describe('Pokemon Component', () => {
    it('should render the list of pokemons', async () => {
        render(<Pokemon />)
    })
})