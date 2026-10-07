import { Provider } from 'react-redux'
import { store } from './store'
import EstiloGlobal from './styles/global'
import Home from './containers/Home'

function App() {
  return (
    <Provider store={store}>
      <EstiloGlobal />
      <Home />
    </Provider>
  )
}

export default App