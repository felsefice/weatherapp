import './App.css';
import Cities from './Compenent/Cities';
import Weather from './Compenent/Weather';
import { CityProvider } from './Context/CityContext';

function App() {



  return (

    <div className="App">
      <CityProvider>
        <Cities />
        <Weather />
      </CityProvider>

    </div>
  );
}

export default App;
