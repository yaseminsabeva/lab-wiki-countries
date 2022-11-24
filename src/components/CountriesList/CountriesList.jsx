import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { useState } from 'react';

function CountriesList({ countries }) {
  return (
    <>
      <div className="col-5" style={{ maxHeight: '90vh', overflow: 'scroll' }}>
        <div className="list-group">
          {countries.map((country) => {
            return (
              <Link
                key={country.alpha3Code}
                className="list-group-item list-group-item-action"
                to={country.alpha3Code}
              >
                {country.alpha2Code} {country.name.official}
              </Link>
            );
          })}
        </div>
      </div>
      <Outlet />
    </>
  );
}

export default CountriesList;
