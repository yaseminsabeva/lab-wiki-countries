import React from 'react';
import { useParams, Link, Outlet } from 'react-router-dom';

function CountryDetails({ countries }) {
  const params = useParams();
  const id = params.id;
  const foundCountry = countries.find((country) => country.alpha3Code === id);
  console.log(foundCountry);
  return (
    <div className="col-7">
      <Outlet />
      <h1>{foundCountry.name.official}</h1>
      <table className="table">
        <thead></thead>
        <tbody>
          <tr>
            <td style={{ width: '30%' }}>Capital</td>
            <td>{foundCountry.capital}</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>
              {foundCountry.area} km
              <sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              <ul>
                {foundCountry.borders.map((border) => {
                  return (
                    <li key={border}>
                      <Link to={`/${border}`}>{border}</Link>
                    </li>
                  );
                })}
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default CountryDetails;
