import React from 'react';
import {useGetCountriesQuery} from '@countries/shared/generated';
import {useTest} from '@countries/shared/hooks';

export const App = () => {
  const {data} = useGetCountriesQuery();
  const [state] = useTest();

  return (
    <>
      <div>Countries - {state}</div>
      <ul>
        {
          data?.countries?.map(country => (
            <li>{country.emoji} {country.name}</li>
          ))
        }
      </ul>
    </>
  )
}
