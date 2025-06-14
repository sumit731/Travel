import * as React from 'react';
import DestinationCard from './components/DestinationCard';
import PackageCard from './components/PackageCard';
import HomePage from './components/HomePage';
import Advantage from './components/Advantage';

function App() {

  return (
    <>
      <HomePage />
      <DestinationCard />
      <Advantage/>
      <PackageCard />
      {/* <TRY/> */}
    </>
  )
}

export default App
