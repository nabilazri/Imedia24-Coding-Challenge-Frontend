import Header from "./components/Header"
import Pokemon from "./screens/Pokemon"
import {BrowserRouter as Router, Route} from "react-router-dom"

const App = () => {
  return (
      <Router>
          <Header />
          <Route path="/" component={Pokemon} />
      </Router>
  )
}

export default App