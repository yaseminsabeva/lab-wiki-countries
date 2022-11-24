import './App.css';
import { useState } from 'react';
import allCountries from './countries.json';
import Navbar from './components/Navbar/Navbar';
import CountriesList from './components/CountriesList/CountriesList';
import { Routes, Route } from 'react-router-dom';
import CountryDetails from './components/CountryDetails/CountryDetails';

function App() {
  const [countries, setCountries] = useState(allCountries);
  return (
    <div className="App">
      <Navbar />

      <div className="container">
        <div className="row">
          <Routes>
            <Route path="/" element={<CountriesList countries={countries} />}>
              <Route
                path="/:id"
                element={<CountryDetails countries={countries} />}
              >
                <Route path="about" element={<h1>About</h1>} />
              </Route>
            </Route>
          </Routes>
        </div>
      </div>
    </div>
  );
}
export default App;
