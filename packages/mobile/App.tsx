import React from 'react';
import {Providers} from './Providers';
import {MainScreen} from './screens/MainScreen';

const App = () => {

  return (
    <Providers>
      <MainScreen />
    </Providers>
  )
}

export default App;
