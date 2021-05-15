import './App.css';
import AppContext from './context/AppContext'
import useInitialState from './Hooks/useInitialState'
import Search from './components/Search/index'

function App() {
  const initialState = useInitialState()

  return (
    <AppContext.Provider value={initialState}>
      <div className="App">
        <Search />
      </div>
    </AppContext.Provider>
  );
}

export default App;
