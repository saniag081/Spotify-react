import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import AppContext from './context/AppContext'
import useInitialState from './Hooks/useInitialState'
import Home from './Pages/Home'
import SongDetail from './Pages/SongDetail'

function App() {
  const initialState = useInitialState()

  return (
    <AppContext.Provider value={initialState}>
      <div className="App">
        <Router>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/detail' component={SongDetail} />
          </Switch>
        </Router>
      </div>
    </AppContext.Provider>
  );
}

export default App;
