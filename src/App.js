import Header from "./components/Header"
import Pokemon from "./screens/Pokemon"
import {BrowserRouter as Router, Route} from "react-router-dom"
import {Provider} from "react-redux"
import {persistor, store} from "./store"
import {PersistGate} from "redux-persist/integration/react"
import SavedPokemons from "./screens/SavedPokemons"

const App = () => {
  return (
      <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
              <Router>
                  <Header />
                  <Route exact path="/" component={Pokemon} />
                  <Route exact path="/saved" component={SavedPokemons} />
              </Router>
          </PersistGate>
      </Provider>
  )
}

export default App