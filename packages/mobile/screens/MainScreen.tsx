import React from 'react';
import {ScrollView, Text} from 'react-native';
import {useGetCountriesQuery} from '@countries/shared/generated';
import {useTest} from '@countries/shared/hooks'

export const MainScreen = () => {
  const {data} = useGetCountriesQuery();
  const [state] = useTest();

  return (
    <ScrollView>
      <Text>{state}</Text>
      {
        data?.countries.map(country => (
          <Text>{country.name}</Text>
        ))
      }
    </ScrollView>
  )
}
